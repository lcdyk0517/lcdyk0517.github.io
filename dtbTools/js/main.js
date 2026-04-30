/**
 * DTB Tools - Main Application Logic
 * DTB 文件识别工具主逻辑
 */

// ==================== 全局配置 ====================
const IS_DEBUG_DEFAULT = false;
let currentLanguage = 'en';
let translations = {};
let ARKOS4CLONE_DB = [];
let AURKNIX_DB = [];

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
        const [zhData, enData, jaData, koData, deData, ptData, arkos4cloneData, aurknixData, boardMappingData] = await Promise.all([
            fetch('dtbTools/i18n/zh.json').then(r => r.json()),
            fetch('dtbTools/i18n/en.json').then(r => r.json()),
            fetch('dtbTools/i18n/ja.json').then(r => r.json()),
            fetch('dtbTools/i18n/ko.json').then(r => r.json()),
            fetch('dtbTools/i18n/de.json').then(r => r.json()),
            fetch('dtbTools/i18n/pt.json').then(r => r.json()),
            fetch('dtbTools/data/arkos4clone.json').then(r => r.json()),
            fetch('dtbTools/data/aurknix.json').then(r => r.json()),
            fetch('dtbTools/data/board-mapping.json').then(r => r.json())
        ]);
        
        translations = { zh: zhData, en: enData, ja: jaData, ko: koData, de: deData, pt: ptData };
        ARKOS4CLONE_DB = normalizeDatabase(arkos4cloneData);
        AURKNIX_DB = normalizeDatabase(aurknixData);
        window.BOARD_MAPPING = boardMappingData;
        
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
    constructor(config) {
        this.systemName = config.systemName;
        this.systemTag = config.systemTag;
        this.systemUrl = config.systemUrl;
        this.releaseUrl = config.releaseUrl || null;
        this.database = config.database;
        this.showQqGroup = config.showQqGroup || false;
        this.phandleMap = new Map();
        this.nodeBeginToPath = new Map();
        this.pathToBegin = new Map();
        this.isDebug = IS_DEBUG_DEFAULT;
    }

    async identifyDtb(arrayBuffer, precomputedMd5) {
        const result = [];
        const systemName = this.systemName;
        const systemTag = this.systemTag;
        const systemUrl = this.systemUrl;

        const md5 = precomputedMd5 || MD5.md5(arrayBuffer);

        result.push(`<span class="comment">${translations[currentLanguage].fileInfo}</span>`);
        result.push(`<span class="property">${translations[currentLanguage].fileMD5}</span>: <span class="value">${md5}</span>`);
        result.push(`<span class="property">${translations[currentLanguage].fileSize}</span>: <span class="value">${arrayBuffer.byteLength}</span> ${translations[currentLanguage].fileSizeUnit}`);
        result.push(`<span class="property">${translations[currentLanguage].projectUrl}</span>: <a href="${systemUrl}" target="_blank" rel="noopener noreferrer">${systemUrl}</a>`);
        if (this.releaseUrl) {
            result.push(`<span class="property">${translations[currentLanguage].releaseUrl}</span>: <a href="${this.releaseUrl}" target="_blank" rel="noopener noreferrer">${this.releaseUrl}</a>`);
        }
        if (this.showQqGroup && currentLanguage === 'zh') {
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
        for (const dbItem of this.database) {
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
        for (const dbItem of this.database) {
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
            const t = translations[currentLanguage];

            const noMatchTip = `<div style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(86,156,214,.3);font-size:0.9em;">${t.noMatchTip.replace(/ArkOS4Clone/g, systemName)}<br><br><button onclick="sendEmailRequest('${systemName}')" style="display:inline-block;margin-top:8px;padding:8px 16px;background:var(--secondary);color:#fff;border-radius:6px;text-decoration:none;border:none;cursor:pointer;font-weight:600;">${t.emailButton}</button></div>`;

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
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) el.placeholder = translations[lang][key];
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
    const identificationResultsBtn = document.getElementById('identificationResultsBtn');
    const closeBoardModalBtn = document.getElementById('closeBoardModal');
    const boardNotFoundBtn = document.getElementById('boardNotFoundBtn');

    // 模态框按钮事件
    if (identificationResultsBtn) {
        identificationResultsBtn.addEventListener('click', openBoardModal);
    }

    if (closeBoardModalBtn) {
        closeBoardModalBtn.addEventListener('click', closeBoardModal);
    }

    // "没有找到你的主板？"按钮事件
    if (boardNotFoundBtn) {
        boardNotFoundBtn.addEventListener('click', function() {
            closeBoardModal();
            setTimeout(() => {
                sendEmailRequest();
            }, 300);
        });
    }

    // 搜索功能
    const searchInput = document.getElementById('boardSearchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    let searchTimeout;

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const filterText = searchInput.value.trim();
                renderBoardList(filterText);
                
                // 显示/隐藏清除按钮
                if (clearSearchBtn) {
                    clearSearchBtn.style.display = filterText ? 'flex' : 'none';
                }
            }, 300);
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', function() {
            if (searchInput) {
                searchInput.value = '';
                renderBoardList('');
                clearSearchBtn.style.display = 'none';
                searchInput.focus();
            }
        });
    }

    // 点击模态框外部关闭
    const boardModal = document.getElementById('boardModal');
    if (boardModal) {
        boardModal.addEventListener('click', (e) => {
            if (e.target === boardModal) {
                closeBoardModal();
            }
        });
    }

    // ESC 键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBoardModal();
            closeImageModal();
        }
    });

    // 图片模态框关闭按钮
    const closeImageModalBtn = document.getElementById('closeImageModal');
    if (closeImageModalBtn) {
        closeImageModalBtn.addEventListener('click', closeImageModal);
    }

    // 点击图片模态框外部关闭
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                closeImageModal();
            }
        });
    }

    // Umami 统计
    const umamiScript = document.createElement('script');
    umamiScript.defer = true;
    umamiScript.src = 'https://cloud.umami.is/script.js';
    umamiScript.setAttribute('data-website-id', 'f2b0e739-03a9-4953-813b-a3324f452ace');
    document.head.appendChild(umamiScript);

    const arkosIdentifier = new DTBIdentifier({
        systemName: 'ArkOS4Clone',
        systemTag: 'tag-arkos4clone',
        systemUrl: 'https://github.com/lcdyk0517/arkos4clone',
        database: ARKOS4CLONE_DB,
        showQqGroup: true
    });
    const aurknixIdentifier = new DTBIdentifier({
        systemName: 'Aurknix',
        systemTag: 'tag-aurknix',
        systemUrl: 'https://github.com/AveyondFly/distribution_rocknix',
        releaseUrl: 'https://github.com/AveyondFly/distribution-nightly/releases',
        database: AURKNIX_DB,
        showQqGroup: false
    });
    let currentFile = null;

    // 语言切换
    if (langSelect) {
        langSelect.addEventListener('change', () => switchLanguage(langSelect.value));
    }

    // Debug 开关 (暂时禁用)
    if (debugToggle) {
        debugToggle.addEventListener('change', function() {
            arkosIdentifier.isDebug = this.checked;
            aurknixIdentifier.isDebug = this.checked;
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
            const arkosResult = await arkosIdentifier.identifyDtb(buf, md5);
            const aurknixResult = await aurknixIdentifier.identifyDtb(buf, md5);
            resultArea.innerHTML = `<div class="system-result">${arkosResult}</div><div class="system-result">${aurknixResult}</div>`;
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

// ==================== 主板列表模态框 ====================
let boardFolders = [];

async function loadBoardFolders() {
    try {
        // 获取映射文件
        const mapping = window.BOARD_MAPPING || {};
        
        // 使用 JSON 文件中的键名作为顺序
        const order = Object.keys(mapping);
        
        // 只返回在映射文件中定义的文件夹（不管是否有DTB）
        boardFolders = order.filter(folder => mapping[folder]);
        
        console.log('=== Board Folders Debug ===');
        console.log('Order array:', order);
        console.log('Filtered folders:', boardFolders);
        console.log('==========================');
        
        return boardFolders;
    } catch (error) {
        console.error('Failed to load board folders:', error);
        return [];
    }
}

async function loadBoardImages(folderName) {
    const images = { mainboard: null };
    const baseUrl = `images/${folderName}/`;

    try {
        // 只加载主板图片
        const mainboardUrl = `${baseUrl}mainboard.jpg`;
        const response = await fetch(mainboardUrl);
        if (response.ok) {
            images.mainboard = mainboardUrl;
        }
    } catch (error) {
        console.error(`Failed to load images for ${folderName}:`, error);
    }

    return images;
}

async function createBoardCard(folder) {
    const images = await loadBoardImages(folder);

    const card = document.createElement('div');
    card.className = 'board-card';

    // 创建图片区域
    const imagesDiv = document.createElement('div');
    imagesDiv.className = 'board-card-images';

    if (images.mainboard) {
        const img = document.createElement('img');
        img.src = images.mainboard;
        img.alt = `${folder} Mainboard`;
        img.className = 'board-card-img';
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            openImageModal(images.mainboard, folder);
        });
        imagesDiv.appendChild(img);
    }

    // 创建标题
    const title = document.createElement('div');
    title.className = 'board-card-title';
    title.textContent = folder;

    // 创建操作按钮区域
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'board-card-actions';

    // 获取映射信息
    const mapping = window.BOARD_MAPPING && window.BOARD_MAPPING[folder];
    const originalDtb = mapping ? mapping.originalDtb : null;
    const arkosRecommendation = mapping ? mapping.arkosRecommendation : null;

    // 原始 DTB 按钮 - 下载DTB文件
            const dtbBtn = document.createElement('button');
            dtbBtn.className = 'board-card-btn board-card-btn-original';
            
            if (originalDtb) {
                dtbBtn.textContent = translations[currentLanguage].viewOriginalDTB || 'Download Original DTB';
                dtbBtn.addEventListener('click', function() {
                    const link = document.createElement('a');
                    link.href = `images/${folder}/${originalDtb}`;
                    link.download = originalDtb;
                    link.click();
                });
            } else {
                dtbBtn.textContent = translations[currentLanguage].noDtbAvailable || 'No DTB Available';
                dtbBtn.disabled = true;
                dtbBtn.style.opacity = '0.5';
                dtbBtn.style.cursor = 'not-allowed';
            }
            actionsDiv.appendChild(dtbBtn);
    // ArkOS4Clone 按钮 - 显示推荐的DTB信息
    const arkosBtn = document.createElement('button');
    arkosBtn.className = 'board-card-btn board-card-btn-arkos4clone';
    arkosBtn.textContent = translations[currentLanguage].viewArkOS4Clone || 'View Recommended DTB';
    
    if (arkosRecommendation) {
        arkosBtn.addEventListener('click', function() {
            const t = translations[currentLanguage];
            alert(`${t.arkosRecommendationTitle}\n\n${arkosRecommendation}`);
        });
    } else {
        arkosBtn.disabled = true;
        arkosBtn.style.opacity = '0.5';
        arkosBtn.style.cursor = 'not-allowed';
    }
    actionsDiv.appendChild(arkosBtn);

    // 设备信息按钮
    const deviceInfo = mapping ? mapping.deviceInfo : null;
    const infoBtn = document.createElement('button');
    infoBtn.className = 'board-card-btn board-card-btn-info';
    infoBtn.textContent = translations[currentLanguage].viewDeviceInfo || 'Device Info';
    infoBtn.style.background = 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)';
    infoBtn.style.boxShadow = '0 4px 6px -1px rgba(155, 89, 182, 0.3)';
    
    infoBtn.addEventListener('click', function() {
        showDeviceInfoModal(folder, deviceInfo);
    });
    actionsDiv.appendChild(infoBtn);

    card.appendChild(imagesDiv);
    card.appendChild(title);
    card.appendChild(actionsDiv);

    return card;
}

async function renderBoardList(filterText = '') {
    const boardList = document.getElementById('boardList');
    const noResults = document.getElementById('noResults');
    if (!boardList) return;

    boardList.innerHTML = '<div class="loading" style="position:static;background:transparent;"><div class="spinner"></div></div>';

    const folders = await loadBoardFolders();
    boardFolders = folders;

    boardList.innerHTML = '';

    // 过滤主板列表
    const filteredFolders = folders.filter(folder => 
        folder.toLowerCase().includes(filterText.toLowerCase())
    );

    // 显示或隐藏"无结果"提示
    if (noResults) {
        noResults.style.display = filteredFolders.length === 0 ? 'block' : 'none';
        const noResultsText = noResults.querySelector('span');
        if (noResultsText) {
            const key = noResultsText.getAttribute('data-i18n');
            if (key && translations[currentLanguage] && translations[currentLanguage][key]) {
                noResultsText.textContent = translations[currentLanguage][key];
            }
        }
    }

    // 渲染过滤后的卡片 - 按系列分组
    const seriesGroups = {};
    filteredFolders.forEach(folder => {
        const mapping = window.BOARD_MAPPING && window.BOARD_MAPPING[folder];
        const series = mapping ? mapping.series : 'Other';
        console.log(`Folder: ${folder}, Series: ${series}`);
        if (!seriesGroups[series]) {
            seriesGroups[series] = [];
        }
        seriesGroups[series].push(folder);
    });

    console.log('=== Series Groups ===');
    console.log(seriesGroups);
    console.log('===================');

    // 动态获取所有series并按顺序渲染
    const seriesOrder = Object.keys(seriesGroups).sort();
    console.log('=== Series Order ===');
    console.log(seriesOrder);
    console.log('===================');

    for (const series of seriesOrder) {
        // 创建系列标题
        const seriesHeader = document.createElement('div');
        seriesHeader.className = 'board-series-header';
        seriesHeader.textContent = series;
        boardList.appendChild(seriesHeader);

        // 渲染该系列的所有主板（等待每个卡片创建完成）
        for (const folder of seriesGroups[series]) {
            const card = await createBoardCard(folder);
            boardList.appendChild(card);
        }
    }
}

function openBoardModal() {
    const modal = document.getElementById('boardModal');
    if (!modal) return;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderBoardList();
}

function closeBoardModal() {
    const modal = document.getElementById('boardModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== 图片放大模态框 ====================
function openImageModal(imageUrl, title) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('imageModalImg');
    const titleEl = document.getElementById('imageModalTitle');

    if (!modal || !img || !titleEl) return;

    img.src = imageUrl;
    img.alt = title;
    titleEl.textContent = title;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== 设备信息弹窗 ====================
function showDeviceInfoModal(folderName, deviceInfo) {
    const t = translations[currentLanguage];
    
    // 创建或获取设备信息弹窗
    let modal = document.getElementById('deviceInfoModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'deviceInfoModal';
        modal.className = 'device-info-modal';
        modal.innerHTML = `
            <div class="device-info-modal-content">
                <div class="device-info-modal-header">
                    <h2 id="deviceInfoModalTitle">${t.deviceInfoTitle || '设备信息'}</h2>
                    <button class="device-info-modal-close" id="closeDeviceInfoModal">&times;</button>
                </div>
                <div class="device-info-modal-body" id="deviceInfoModalBody">
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // 关闭按钮事件
        modal.querySelector('#closeDeviceInfoModal').addEventListener('click', closeDeviceInfoModal);
        
        // 点击背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeDeviceInfoModal();
            }
        });
    }
    
    // 更新标题
    modal.querySelector('#deviceInfoModalTitle').textContent = folderName;
    
    // 构建设备信息内容
    const body = modal.querySelector('#deviceInfoModalBody');
    
    if (!deviceInfo) {
        body.innerHTML = `<div class="device-info-empty">${t.deviceInfoEmpty || '暂无设备信息'}</div>`;
    } else {
        const ram = deviceInfo.ram || '';
        const useExtAmplifier = deviceInfo.useExtAmplifier;
        
        // 获取多语言 tips，优先当前语言，fallback 到英文
        let tips = '';
        if (deviceInfo.tips && typeof deviceInfo.tips === 'object') {
            tips = deviceInfo.tips[currentLanguage] || deviceInfo.tips['en'] || '';
        } else if (typeof deviceInfo.tips === 'string') {
            tips = deviceInfo.tips; // 兼容旧格式
        }
        
        let html = '<div class="device-info-grid">';
        
        // 内存信息
        html += `
            <div class="device-info-item">
                <div class="device-info-label">${t.deviceInfoRam || '内存'}</div>
                <div class="device-info-value">${ram || (t.deviceInfoNotSet || '未设置')}</div>
            </div>
        `;
        
        // 外部功放
        html += `
            <div class="device-info-item">
                <div class="device-info-label">${t.deviceInfoExtAmplifier || '外部功放'}</div>
                <div class="device-info-value">
                    ${useExtAmplifier === true ? 
                        `<span class="device-info-badge device-info-badge-yes">${t.deviceInfoYes || '是'}</span>` : 
                        useExtAmplifier === false ? 
                        `<span class="device-info-badge device-info-badge-no">${t.deviceInfoNo || '否'}</span>` : 
                        `<span class="device-info-badge device-info-badge-unknown">${t.deviceInfoUnknown || '未知'}</span>`}
                </div>
            </div>
        `;
        
        // Tips
        html += `
            <div class="device-info-item device-info-item-full">
                <div class="device-info-label">${t.deviceInfoTips || '提示'}</div>
                <div class="device-info-value device-info-tips">${tips || (t.deviceInfoNotSet || '未设置')}</div>
            </div>
        `;
        
        html += '</div>';
        body.innerHTML = html;
    }
    
    // 显示弹窗
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDeviceInfoModal() {
    const modal = document.getElementById('deviceInfoModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== 发送邮件功能 ====================
window.sendEmailRequest = function(systemName = 'ArkOS4Clone') {
    const t = translations[currentLanguage];
    if (!t) {
        console.error('Translations not loaded');
        return;
    }

    const canRunKey = systemName === 'Aurknix' ? 'canRunAurknixTitle' : 'canRunArkosTitle';
    const canRunDescKey = systemName === 'Aurknix' ? 'canRunAurknix' : 'canRunArkos';
    const emailCanRunKey = systemName === 'Aurknix' ? 'emailCanRunAurknix' : 'emailCanRunArkos';

    const savePhotoConfirmed = confirm(t.saveBoardPhotoTitle + '\n\n' + t.saveBoardPhoto);
    if (!savePhotoConfirmed) {
        return;
    }

    const canRunArkos = confirm(t[canRunKey] + '\n\n' + t[canRunDescKey]);

    const emailSubject = encodeURIComponent(systemName + ' DTB Adaptation Request');
    const emailBody = encodeURIComponent(`Hi,

I would like to request ${systemName} support for my device.

${t.emailDeviceInfo}
${t.emailDeviceName}___________
${t.emailDtbFile}(please attach the DTB file)
${t.emailDiscord}___________
${t[emailCanRunKey]}${canRunArkos ? t.emailYes : t.emailNo}
${t.emailBoardPhotos}${t.emailYes}

${t.emailRequiredFiles}

${t.emailNote}
${t.emailNoteContent}

Thanks!`);

    // 打开Gmail发送邮件
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=lcdyk0517@qq.com&su=${emailSubject}&body=${emailBody}`;
    window.open(gmailUrl, '_blank', 'noopener');
};

// 导出全局函数
window.initDtbTools = initApp;
