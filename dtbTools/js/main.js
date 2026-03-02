/**
 * DTB Tools - Main Application Logic
 * DTB 文件识别工具主逻辑
 */

// ==================== 全局配置 ====================
const IS_DEBUG_DEFAULT = false;
let currentLanguage = 'en';
let translations = {};
let ARKOS4CLONE_DB = [];

// ==================== GPIO 映射 ====================
const GPIO_MAPPING = {
    0x0: "RK_PA0", 0x1: "RK_PA1", 0x2: "RK_PA2", 0x3: "RK_PA3",
    0x4: "RK_PA4", 0x5: "RK_PA5", 0x6: "RK_PA6", 0x7: "RK_PA7",
    0x8: "RK_PB0", 0x9: "RK_PB1", 0xa: "RK_PB2", 0xb: "RK_PB3",
    0xc: "RK_PB4", 0xd: "RK_PB5", 0xe: "RK_PB6", 0xf: "RK_PB7",
    0x10: "RK_PC0", 0x11: "RK_PC1", 0x12: "RK_PC2", 0x13: "RK_PC3",
    0x14: "RK_PC4", 0x15: "RK_PC5", 0x16: "RK_PC6", 0x17: "RK_PC7",
    0x18: "RK_PD0", 0x19: "RK_PD1", 0x1a: "RK_PD2", 0x1b: "RK_PD3",
    0x1c: "RK_PD4", 0x1d: "RK_PD5", 0x1e: "RK_PD6", 0x1f: "RK_PD7"
};

// ==================== 数据加载 ====================
async function loadData() {
    try {
        const [zhData, enData, jaData, koData, deData, ptData, arkos4cloneData] = await Promise.all([
            fetch('dtbTools/i18n/zh.json').then(r => r.json()),
            fetch('dtbTools/i18n/en.json').then(r => r.json()),
            fetch('dtbTools/i18n/ja.json').then(r => r.json()),
            fetch('dtbTools/i18n/ko.json').then(r => r.json()),
            fetch('dtbTools/i18n/de.json').then(r => r.json()),
            fetch('dtbTools/i18n/pt.json').then(r => r.json()),
            fetch('dtbTools/data/arkos4clone.json').then(r => r.json())
        ]);
        
        translations = { zh: zhData, en: enData, ja: jaData, ko: koData, de: deData, pt: ptData };
        ARKOS4CLONE_DB = normalizeDatabase(arkos4cloneData);
        
        return true;
    } catch (error) {
        console.error('Failed to load data:', error);
        return false;
    }
}

function normalizeDatabase(db) {
    return db.map(item => normalizeDbItem(item));
}

function normalizeDbItem(item) {
    let md5 = item.md5;
    if (md5 === null || md5 === undefined) md5 = [];
    else if (typeof md5 === 'string') md5 = md5 ? [md5] : [];
    return { ...item, md5 };
}

// ==================== 工具函数 ====================
function readNullTerminatedStrings(bytes) {
    const out = []; let cur = [];
    for (let i = 0; i < bytes.length; i++) {
        const b = bytes[i];
        if (b === 0) { if (cur.length) { out.push(new TextDecoder().decode(new Uint8Array(cur))); cur = []; } }
        else { cur.push(b); }
    }
    if (cur.length) { out.push(new TextDecoder().decode(new Uint8Array(cur))); }
    return out;
}

// ==================== 主识别类 ====================
class DTBIdentifier {
    constructor() {
        this.phandleMap = new Map();
        this.nodeBeginToPath = new Map();
        this.pathToBegin = new Map();
        this.isDebug = IS_DEBUG_DEFAULT;
    }
    
    getSystemName() { return 'ArkOS4Clone'; }
    getSystemTag() { return 'tag-arkos4clone'; }
    getSystemUrl() { return 'https://github.com/lcdyk0517/arkos4clone'; }

    async identifyDtb(arrayBuffer, precomputedMd5) {
        const result = [];
        const systemName = this.getSystemName();
        const systemTag = this.getSystemTag();
        const systemUrl = this.getSystemUrl();

        const md5 = precomputedMd5 || MD5.md5(arrayBuffer);

        // 头部信息
        result.push(`<span class="comment">${translations[currentLanguage].fileInfo}</span>`);
        result.push(`<span class="property">${translations[currentLanguage].fileMD5}</span>: <span class="value">${md5}</span>`);
        result.push(`<span class="property">${translations[currentLanguage].fileSize}</span>: <span class="value">${arrayBuffer.byteLength}</span> ${translations[currentLanguage].fileSizeUnit}`);
        result.push(`<span class="property">${translations[currentLanguage].projectUrl}</span>: <a href="${systemUrl}" target="_blank" rel="noopener noreferrer">${systemUrl}</a>`);
        if (currentLanguage === 'zh') {
            result.push(`<span class="property">${translations[currentLanguage].qqGroup}</span>`);
        }
        result.push(`<span class="property">${translations[currentLanguage].targetSystem}</span>: <span class="system-tag ${systemTag}">${systemName}</span>\n`);

        this.buildNodeTree(arrayBuffer);
        const view = new DataView(arrayBuffer);

        const panelInfo = this.extractPanelInfo(arrayBuffer);
        const codecInfo = this.extractCodecInfo(arrayBuffer);
        const designCapacity = this.detectDesignCapacity(view);
        const designQmax = this.detectDesignQmax(view);

        const adcKeysEnabled = this.detectAdcKeysFlag(view);

        if (this.isDebug) {
            result.push(`<span class="comment">${translations[currentLanguage].panelInfo}</span>`);
            if (panelInfo.initSequence) {
                result.push(`<div class="sequence-block"><span class="property">panel-init-sequence</span> = ${this.formatSequence(panelInfo.initSequence)};</div>`);
            } else {
                result.push(`<span class="comment">${translations[currentLanguage].noPanelSequence}</span>`);
            }

            if (panelInfo.resetGpios || panelInfo.enableGpios) {
                result.push(`<div class="gpio-block">`);
                if (panelInfo.resetGpios) {
                    result.push(`<span class="property">reset-gpios</span> = ${this.formatGpios(panelInfo.resetGpios)};`);
                }
                if (panelInfo.enableGpios) {
                    result.push(`<span class="property">enable-gpios</span> = ${this.formatGpios(panelInfo.enableGpios)};`);
                }
                result.push(`</div>`);
            }

            result.push(`<span class="comment">adc-keys</span> = <span class="value">${adcKeysEnabled ? 'true' : 'false'}</span>;`);

            result.push(`<span class="comment">${translations[currentLanguage].codecInfo}</span>`);
            result.push(`<span class="property">use-ext-amplifier</span> = <span class="value">${codecInfo.useExtAmplifier ? 'true' : 'false'}</span>;`);
        }

        result.push(`<span class="comment">=== ${systemName} ${translations[currentLanguage].adaptationSuggestion} ===</span>`);

        // MD5 精确匹配
        let exactMatch = null;
        for (const dbItem of ARKOS4CLONE_DB) {
            if (dbItem.md5 && dbItem.md5.includes(md5)) {
                exactMatch = { matchedName: dbItem.name, exactMatch: true };
                break;
            }
        }

        if (exactMatch) {
            result.push(`<div class="match-success">✅ <span class="property">${translations[currentLanguage].exactMatch}</span><br>${exactMatch.matchedName}</div>`);
            return result.join('\n');
        }

        // 屏幕参数匹配
        const screenMatches = [];
        for (const dbItem of ARKOS4CLONE_DB) {
            if (this.compareScreenParams(dbItem, panelInfo, codecInfo, adcKeysEnabled)) {
                screenMatches.push(dbItem.name);
            }
        }

        if (screenMatches.length > 0) {
            const t = translations[currentLanguage];
            const capLine = designCapacity ? `<div class="comment">🔋 ${t.batteryDesignCapacity}: <span class="value">${designCapacity}</span></div>` : '';
            const capLineMax = designQmax ? `<div class="comment">🔋 ${t.batteryDesignQmax}: <span class="value">${designQmax}</span></div>` : '';
            const toolTip = `<div style="margin-top:10px;padding-top:8px;border-top:1px solid rgba(255,215,0,.3);">${t.dtbToolTip}</div>`;

            result.push(`<div class="match-warning">⚠️ <span class="property">${t.screenMatch}</span><br>${capLine}${capLineMax}<br><span class="comment">${t.screenMatchDesc}</span><br><span class="comment">${t.screenMatchAdvice}</span><div style="margin-top:8px;">${screenMatches.map(n => `<div>• <span class="value">${n.replace(/\s*->\s*/g, ' → ')}</span></div>`).join('')}</div>${toolTip}</div>`);
        } else {
            const emailSubject = encodeURIComponent('ArkOS4Clone DTB Adaptation Request');
            const emailBody = encodeURIComponent(`Hi,

I would like to request ArkOS4Clone support for my device.

Device info:
- Device name: 
- DTB file: (please attach the DTB file)
- Discord contact: 

Thanks!`);
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=lcdyk0517@qq.com&su=${emailSubject}&body=${emailBody}`;

            const t = translations[currentLanguage];
            const noMatchTip = `<div style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(86,156,214,.3);font-size:0.9em;">${t.noMatchTip}<br><br><a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:8px;padding:8px 16px;background:var(--secondary);color:#fff;border-radius:6px;text-decoration:none;">${t.emailButton}</a></div>`;

            result.push(`<div class="match-info">❓ <span class="property">${t.noMatch}</span> ${t.noMatchDesc}${noMatchTip}</div>`);
        }

        return result.join('\n');
    }

    compareScreenParams(dbItem, panelInfo, codecInfo, adcKeysEnabled) {
        if (!this.compareSequences(dbItem.panelInitSequence, panelInfo.initSequence)) return false;
        if (!this.compareGpios(dbItem.resetGpios, panelInfo.resetGpios)) return false;
        if (!this.compareGpios(dbItem.enableGpios, panelInfo.enableGpios)) return false;

        if (dbItem.sdio !== undefined) {
            const dbSdio = dbItem.sdio === true || dbItem.sdio === "true";
            const extractedSdio = panelInfo.sdioSupport === true;
            if (dbSdio !== extractedSdio) return false;
        }

        if (dbItem.useExtAmplifier !== undefined) {
            const dbAmp = dbItem.useExtAmplifier === true || dbItem.useExtAmplifier === "true";
            const exAmp = codecInfo.useExtAmplifier === true;
            if (dbAmp !== exAmp) return false;
        }

        if (adcKeysEnabled !== null && dbItem.adcKey !== undefined) {
            const dbAdc = dbItem.adcKey === true || dbItem.adcKey === "true";
            if (dbAdc !== !!adcKeysEnabled) return false;
        }
        return true;
    }

    compareSequences(dbSequence, extractedSequence) {
        if (!dbSequence || !extractedSequence) return false;
        const dbBytes = this.sequenceStringToBytes(dbSequence);
        if (dbBytes.length !== extractedSequence.length) return false;
        for (let i = 0; i < dbBytes.length; i++) { if (dbBytes[i] !== extractedSequence[i]) return false; }
        return true;
    }

    compareGpios(dbGpios, extractedGpios) {
        if (dbGpios === null) return extractedGpios === null;
        if (extractedGpios === null && dbGpios !== null) return false;
        if (extractedGpios === null && dbGpios === null) return true;

        if (typeof dbGpios === 'string' && Array.isArray(extractedGpios)) {
            return dbGpios === this.formatGpiosForCompare(extractedGpios);
        }
        if (Array.isArray(dbGpios) && Array.isArray(extractedGpios)) {
            if (dbGpios.length !== extractedGpios.length) return false;
            for (let i = 0; i < dbGpios.length; i++) { if (dbGpios[i] !== extractedGpios[i]) return false; }
            return true;
        }
        return false;
    }

    formatGpiosForCompare(gpioData) {
        if (!gpioData || gpioData.length < 3) return '';
        const [phandle, pin, flags] = gpioData;
        const nodePath = this.phandleMap.get(phandle);
        let gpioController;
        if (nodePath) { const nodeName = this.getNodeNameFromPath(nodePath); gpioController = `&${nodeName.split('@')[0]}`; }
        else { gpioController = `&unknown_${phandle.toString(16)}`; }
        const pinName = GPIO_MAPPING[pin] || `0x${pin.toString(16)}`;
        const flagMap = { 0x0: "GPIO_ACTIVE_HIGH", 0x1: "GPIO_ACTIVE_LOW" };
        const flagStr = flagMap[flags] || `0x${flags.toString(16)}`;
        return `${gpioController} ${pinName} ${flagStr}`;
    }

    formatGpios(gpioData) {
        if (!gpioData || gpioData.length < 3) return '<span class="string">""</span>';
        return `&lt;${this.formatGpiosForCompare(gpioData)}&gt;`;
    }

    sequenceStringToBytes(seq) {
        return seq.trim().split(/\s+/).map(h => parseInt(h, 16));
    }

    formatSequence(sequence) {
        if (!sequence || sequence.length === 0) return '<span class="string">""</span>';
        return `[${sequence.map(b => `<span class="hex">${b.toString(16).padStart(2, '0')}</span>`).join(' ')}]`;
    }

    getNodeNameFromPath(nodePath) {
        const parts = nodePath.split('/');
        return parts[parts.length - 1] || nodePath;
    }

    buildNodeTree(arrayBuffer) {
        const view = new DataView(arrayBuffer);
        this.phandleMap.clear();
        this.nodeBeginToPath.clear();
        this.pathToBegin.clear();

        if (view.getUint32(0, false) !== 0xd00dfeed) return;
        const off_dt_struct = view.getUint32(8, false);
        const off_dt_strings = view.getUint32(12, false);
        this.parseNodeTree(view, off_dt_struct, off_dt_strings, [], '/');
    }

    parseNodeTree(view, offset, stringOffset, pathStack, currentPath) {
        let cur = offset;
        while (true) {
            if (cur + 4 > view.byteLength) break;
            const token = view.getUint32(cur, false); cur += 4;
            switch (token) {
                case 0x1: {
                    const name = this.readString(view, cur);
                    const beginNodeOffset = cur - 4;
                    cur += name.length + 1;
                    cur = this.align4(cur);
                    const nodePath = currentPath + (currentPath === '/' ? '' : '/') + name;
                    pathStack.push({ offset: cur, path: nodePath });
                    this.nodeBeginToPath.set(beginNodeOffset, nodePath);
                    this.pathToBegin.set(nodePath, beginNodeOffset);
                    const phandle = this.findPhandleInNode(view, cur, stringOffset);
                    if (phandle !== null) this.phandleMap.set(phandle, nodePath);
                    cur = this.parseNodeTree(view, cur, stringOffset, pathStack, nodePath);
                    break;
                }
                case 0x2: pathStack.pop(); return cur;
                case 0x3: {
                    const len = view.getUint32(cur, false); cur += 8 + len;
                    cur = this.align4(cur);
                    break;
                }
                case 0x9: return cur;
                default: return cur;
            }
        }
        return cur;
    }

    findPhandleInNode(view, nodeOffset, stringOffset) {
        let off = nodeOffset;
        while (true) {
            if (off + 4 > view.byteLength) break;
            const token = view.getUint32(off, false); off += 4;
            if (token === 0x2 || token === 0x9) break;
            if (token === 0x3) {
                const len = view.getUint32(off, false); off += 4;
                const nameoff = view.getUint32(off, false); off += 4;
                const propName = this.readString(view, stringOffset + nameoff);
                if (propName === 'phandle') return this.parseUint32(new Uint8Array(view.buffer, off, Math.min(len, 4)));
                off += len; off = this.align4(off);
            }
        }
        return null;
    }

    extractPanelInfo(arrayBuffer) {
        const view = new DataView(arrayBuffer);
        let initSequence = null, resetGpios = null, enableGpios = null;

        if (view.getUint32(0, false) !== 0xd00dfeed) {
            return { initSequence: null, resetGpios: null, enableGpios: null, sdioSupport: null, sdioHostPath: null };
        }
        const off_dt_strings = view.getUint32(12, false);

        let powerSupplyPhandle = null;
        for (let off = 0; off < view.byteLength - 100; off++) {
            const nodeInfo = this.findPanelNodeAtOffset(view, off, off_dt_strings);
            if (nodeInfo && nodeInfo.name) {
                const props = this.findPropertiesInNode(view, nodeInfo.offset, off_dt_strings);
                if (props.init) initSequence = props.init;
                if (props.resetGpios) resetGpios = props.resetGpios;
                if (props.enableGpios) enableGpios = props.enableGpios;
                else if (props.powerSupply) powerSupplyPhandle = props.powerSupply[0];
                if (initSequence || resetGpios || enableGpios || powerSupplyPhandle) break;
            }
        }

        const sdioInfo = this.detectSdioFromDwmmcFF380000(view);
        if (!enableGpios && powerSupplyPhandle) {
            enableGpios = this.findGpioFromPowerSupply(view, off_dt_strings, powerSupplyPhandle);
        }

        return { initSequence, resetGpios, enableGpios, sdioSupport: sdioInfo.sdioSupport, sdioHostPath: sdioInfo.hostPath };
    }

    detectSdioFromDwmmcFF380000(view) {
        const off_dt_strings = view.getUint32(12, false);
        let begin = this.pathToBegin.get('/dwmmc@ff380000') ?? null;
        let hostPath = '/dwmmc@ff380000';

        if (begin == null) {
            for (const [path, b] of this.pathToBegin.entries()) {
                if (this.getNodeNameFromPath(path) === 'dwmmc@ff380000') { begin = b; hostPath = path; break; }
            }
        }

        if (begin == null) return { sdioSupport: false, hostPath: null };
        const props = this.findPropertiesInNode(view, begin, off_dt_strings);
        return { sdioSupport: !!props.supportsSdio, hostPath };
    }

    detectDesignCapacity(view) {
        try {
            if (view.getUint32(0, false) !== 0xd00dfeed) return null;
            const off_dt_strings = view.getUint32(12, false);
            for (const [path, begin] of this.pathToBegin.entries()) {
                if (this.getNodeNameFromPath(path) === 'battery') {
                    const props = this.findPropertiesInNode(view, begin, off_dt_strings);
                    if (props.design_capacity !== null) return props.design_capacity;
                }
            }
        } catch (e) {}
        return null;
    }

    detectDesignQmax(view) {
        try {
            if (view.getUint32(0, false) !== 0xd00dfeed) return null;
            const off_dt_strings = view.getUint32(12, false);
            for (const [path, begin] of this.pathToBegin.entries()) {
                if (this.getNodeNameFromPath(path) === 'battery') {
                    const props = this.findPropertiesInNode(view, begin, off_dt_strings);
                    if (props.design_qmax !== null) return props.design_qmax;
                }
            }
        } catch (e) {}
        return null;
    }

    detectAdcKeysFlag(view) {
        if (view.getUint32(0, false) !== 0xd00dfeed) return false;
        const off_dt_strings = view.getUint32(12, false);

        for (const nodeName of ['adc-keys', 'rg351-keys']) {
            for (const [path, begin] of this.pathToBegin.entries()) {
                if (this.getNodeNameFromPath(path) === nodeName) {
                    const props = this.findPropertiesInNode(view, begin, off_dt_strings);
                    const st = (props.status || '').trim().toLowerCase();
                    if (st === '' || st === 'okay' || st === null) return true;
                }
            }
        }
        return false;
    }

    findGpioFromPowerSupply(view, stringOffset, powerSupplyPhandle) {
        const path = this.phandleMap.get(powerSupplyPhandle);
        if (!path) return null;
        const begin = this.pathToBegin.get(path);
        if (begin == null) return null;
        return this.findPropertiesInNode(view, begin, stringOffset).gpio || null;
    }

    findPanelNodeAtOffset(view, offset, stringOffset) {
        try {
            const token = view.getUint32(offset, false);
            if (token === 1) {
                const name = this.readString(view, offset + 4);
                if (name && (name.includes('panel') || name.includes('display') || name.includes('lcd'))) {
                    return { name, offset };
                }
            }
        } catch (e) {}
        return null;
    }

    findPropertiesInNode(view, nodeOffset, stringOffset) {
        let initSequence = null, resetGpios = null, enableGpios = null, powerSupply = null, gpio = null;
        let supportsSdio = false, useExtAmplifier = false, statusStr = null;
        let design_capacity = null, design_qmax = null;

        let off = nodeOffset + 4;
        off += this.readString(view, off).length + 1;
        off = this.align4(off);

        while (true) {
            if (off + 4 > view.byteLength) break;
            const token = view.getUint32(off, false);
            if (token !== 0x3) break;

            const len = view.getUint32(off + 4, false);
            const nameoff = view.getUint32(off + 8, false);
            const propName = this.readString(view, stringOffset + nameoff);

            if (propName === 'panel-init-sequence') initSequence = Array.from(new Uint8Array(view.buffer, off + 12, len));
            else if (propName === 'reset-gpios') resetGpios = this.parseGpioData(new Uint8Array(view.buffer, off + 12, len));
            else if (propName === 'enable-gpios') enableGpios = this.parseGpioData(new Uint8Array(view.buffer, off + 12, len));
            else if (propName === 'power-supply') powerSupply = this.parseGpioData(new Uint8Array(view.buffer, off + 12, len));
            else if (propName === 'gpio') gpio = this.parseGpioData(new Uint8Array(view.buffer, off + 12, len));
            else if (propName === 'design_capacity' && len >= 4) design_capacity = view.getUint32(off + 12, false);
            else if (propName === 'design_qmax' && len >= 4) design_qmax = view.getUint32(off + 12, false);
            else if (propName === 'supports-sdio') supportsSdio = true;
            else if (propName === 'use-ext-amplifier') useExtAmplifier = true;
            else if (propName === 'status') statusStr = this.readString(view, off + 12);

            off += 12 + len;
            off = this.align4(off);
        }

        return { init: initSequence, resetGpios, enableGpios, powerSupply, gpio, supportsSdio, useExtAmplifier, status: statusStr, design_capacity, design_qmax };
    }

    extractCodecInfo(arrayBuffer) {
        const view = new DataView(arrayBuffer);
        let useExtAmplifier = false;
        if (view.getUint32(0, false) !== 0xd00dfeed) return { useExtAmplifier };

        const off_dt_strings = view.getUint32(12, false);
        for (let offset = 0; offset < view.byteLength - 100; offset++) {
            const token = view.getUint32(offset, false);
            if (token === 1) {
                const name = this.readString(view, offset + 4);
                if (name && (name.includes('codec') || name.includes('sound') || name.includes('audio'))) {
                    const props = this.findPropertiesInNode(view, offset, off_dt_strings);
                    if (props.useExtAmplifier) { useExtAmplifier = true; break; }
                }
            }
        }
        return { useExtAmplifier };
    }

    parseGpioData(data) {
        const v = [];
        for (let i = 0; i < data.length; i += 4) {
            if (i + 4 <= data.length) v.push((data[i] << 24) | (data[i + 1] << 16) | (data[i + 2] << 8) | data[i + 3]);
        }
        return v;
    }

    parseUint32(data) {
        if (data.length >= 4) return (data[0] << 24) | (data[1] << 16) | (data[2] << 8) | data[3];
        return null;
    }

    readString(view, offset) {
        let s = '';
        for (let i = offset; i < view.byteLength; i++) {
            const ch = view.getUint8(i);
            if (ch === 0) break;
            s += String.fromCharCode(ch);
        }
        return s;
    }

    align4(offset) { return (offset + 3) & ~3; }
}

// ==================== Ko-fi 捐赠展示 ====================
let donorDataCache = null;

function renderDonors() {
    const listEl = document.getElementById('donorList');
    const titleEl = document.getElementById('donorTitle');
    const btnEl = document.getElementById('donateButton');

    if (!listEl || !titleEl || !btnEl) return;

    titleEl.textContent = translations[currentLanguage].donor_title;
    btnEl.textContent = translations[currentLanguage].donor_button;

    if (!btnEl._kofi_bound) {
        btnEl.addEventListener('click', () => window.open('https://ko-fi.com/lcdyk', '_blank', 'noopener'));
        btnEl._kofi_bound = true;
    }

    if (!donorDataCache || donorDataCache.length === 0) {
        listEl.innerHTML = `<div class="donor-empty">${translations[currentLanguage].donor_empty}</div>`;
        return;
    }

    const t = translations[currentLanguage];
    listEl.innerHTML = donorDataCache.map(d => {
        const safeName = d.name || 'Anonymous';
        const safeNote = currentLanguage === 'zh' ? (d.note_zh || d.note_en || '') : (d.note_en || d.note_zh || '');
        const safeDate = d.date_approx_date || d.date || '';
        return `<div class="donor-item"><div class="donor-header"><span class="donor-name">${safeName}</span><span class="donor-date-label">${t.donor_date_label}:</span><span class="donor-date">${safeDate}</span></div>${safeNote ? `<div class="donor-note"><span class="donor-note-label">${t.donor_note_label}:</span><span class="donor-note-text">${safeNote}</span></div>` : ''}</div>`;
    }).join('');
}

async function loadDonors() {
    try {
        const resp = await fetch('https://ko-fi.lcdyk.workers.dev/kofi', { cache: 'no-store' });
        if (!resp.ok) { donorDataCache = []; renderDonors(); return; }
        const data = await resp.json();
        let donors = Array.isArray(data.donors) ? data.donors : [];
        donors = donors.sort((a, b) => (b.date_approx_date || '').localeCompare(a.date_approx_date || '')).slice(0, 5);
        donorDataCache = donors;
        renderDonors();
    } catch (e) { donorDataCache = []; renderDonors(); }
}

// ==================== 语言切换 ====================
function switchLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
    });
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = lang;
    renderDonors();
}

// ==================== 初始化 ====================
async function initApp() {
    const loaded = await loadData();
    if (!loaded) {
        console.error('Failed to load application data');
        return;
    }

    const fileInput = document.getElementById('fileInput');
    const uploadArea = document.getElementById('uploadArea');
    const selectedFile = document.getElementById('selectedFile');
    const processBtn = document.getElementById('processBtn');
    const loading = document.getElementById('loading');
    const resultArea = document.getElementById('resultArea');
    const errorMessage = document.getElementById('errorMessage');
    const langSelect = document.getElementById('langSelect');
    const debugToggle = document.getElementById('debugToggle');

    // Umami 统计
    const umamiScript = document.createElement('script');
    umamiScript.defer = true;
    umamiScript.src = 'https://cloud.umami.is/script.js';
    umamiScript.setAttribute('data-website-id', 'f2b0e739-03a9-4953-813b-a3324f452ace');
    document.head.appendChild(umamiScript);

    const identifier = new DTBIdentifier();
    let currentFile = null;

    // 语言切换
    if (langSelect) {
        langSelect.addEventListener('change', () => switchLanguage(langSelect.value));
    }

    // Debug 开关 (暂时禁用)
    if (debugToggle) {
        debugToggle.addEventListener('change', function() {
            identifier.isDebug = this.checked;
            if (currentFile) processBtn.click();
        });
    }

    // 文件选择
    fileInput.addEventListener('change', e => {
        if (e.target.files.length > 0) {
            currentFile = e.target.files[0];
            selectedFile.textContent = `${translations[currentLanguage].fileSelected}: ${currentFile.name} (${(currentFile.size / 1024).toFixed(1)} KB)`;
            selectedFile.style.display = 'block';
            processBtn.disabled = false;
            hideError();
        }
    });

    // 拖拽上传
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => uploadArea.addEventListener(evt, e => { e.preventDefault(); e.stopPropagation(); }));
    ['dragenter', 'dragover'].forEach(evt => uploadArea.addEventListener(evt, () => uploadArea.classList.add('dragover')));
    ['dragleave', 'drop'].forEach(evt => uploadArea.addEventListener(evt, () => uploadArea.classList.remove('dragover')));

    uploadArea.addEventListener('drop', e => {
        const files = e.dataTransfer.files;
        if (files.length > 0 && (files[0].name.endsWith('.dtb') || files[0].name.endsWith('.dtbo'))) {
            fileInput.files = files;
            currentFile = files[0];
            selectedFile.textContent = `${translations[currentLanguage].fileSelected}: ${currentFile.name} (${(currentFile.size / 1024).toFixed(1)} KB)`;
            selectedFile.style.display = 'block';
            processBtn.disabled = false;
            hideError();
        }
    });

    // 识别按钮
    processBtn.addEventListener('click', async function() {
        if (!currentFile) return;
        loading.style.display = 'flex';
        resultArea.innerHTML = `<span class="comment">${translations[currentLanguage].identifying}</span>`;
        processBtn.disabled = true;
        hideError();

        try {
            const buf = await currentFile.arrayBuffer();
            const md5 = MD5.md5(buf);
            const result = await identifier.identifyDtb(buf, md5);
            resultArea.innerHTML = result;
        } catch (err) {
            const msg = `${translations[currentLanguage].identificationError}: ${err.message}`;
            errorMessage.textContent = msg;
            errorMessage.style.display = 'block';
            resultArea.innerHTML = `<span style="color:#e74c3c">${msg}</span>`;
        } finally {
            loading.style.display = 'none';
            processBtn.disabled = false;
        }
    });

    function hideError() { errorMessage.style.display = 'none'; }

    // 初始化
    switchLanguage(currentLanguage);
    loadDonors();
}

// 导出全局函数
window.initDtbTools = initApp;
