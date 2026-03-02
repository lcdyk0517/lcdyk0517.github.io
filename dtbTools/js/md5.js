/**
 * MD5 Implementation for DTB Tools
 * Pure JavaScript MD5 algorithm
 */
class MD5 {
    static md5(input) {
        if (input instanceof ArrayBuffer) { return this.md5FromArrayBuffer(input); }
        throw new Error('MD5: 只支持 ArrayBuffer 输入');
    }
    
    static md5FromArrayBuffer(buf) {
        const bytes = new Uint8Array(buf); 
        return this.calculateMD5(bytes);
    }
    
    static calculateMD5(inputBytes) {
        const S = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21];
        const K = [0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501, 0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be, 0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821, 0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8, 0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed, 0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a, 0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c, 0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70, 0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665, 0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039, 0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1, 0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1, 0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391];
        let a = 0x67452301 >>> 0, b = 0xEFCDAB89 >>> 0, c = 0x98BADCFE >>> 0, d = 0x10325476 >>> 0;
        const originalLength = inputBytes.length;
        const bitLength = (originalLength * 8) >>> 0;
        const bitLengthHigh = Math.floor((originalLength * 8) / 0x100000000) >>> 0;
        const padLen = (56 - ((originalLength + 1) % 64) + 64) % 64;
        const totalLength = originalLength + 1 + padLen + 8;
        const padded = new Uint8Array(totalLength);
        padded.set(inputBytes, 0);
        padded[originalLength] = 0x80;
        padded[totalLength - 8] = (bitLength & 0xff);
        padded[totalLength - 7] = (bitLength >>> 8) & 0xff;
        padded[totalLength - 6] = (bitLength >>> 16) & 0xff;
        padded[totalLength - 5] = (bitLength >>> 24) & 0xff;
        padded[totalLength - 4] = (bitLengthHigh & 0xff);
        padded[totalLength - 3] = (bitLengthHigh >>> 8) & 0xff;
        padded[totalLength - 2] = (bitLengthHigh >>> 16) & 0xff;
        padded[totalLength - 1] = (bitLengthHigh >>> 24) & 0xff;

        for (let chunkStart = 0; chunkStart < totalLength; chunkStart += 64) {
            const M = new Array(16);
            for (let i = 0; i < 16; i++) {
                const offset = chunkStart + i * 4;
                M[i] = (padded[offset] | (padded[offset + 1] << 8) | (padded[offset + 2] << 16) | (padded[offset + 3] << 24)) >>> 0;
            }
            let A = a, B = b, C = c, D = d;
            for (let i = 0; i < 64; i++) {
                let F, g;
                if (i < 16) { F = (B & C) | ((~B) & D); g = i; }
                else if (i < 32) { F = (D & B) | ((~D) & C); g = (5 * i + 1) % 16; }
                else if (i < 48) { F = B ^ C ^ D; g = (3 * i + 5) % 16; }
                else { F = C ^ (B | (~D)); g = (7 * i) % 16; }
                let temp = (A + F + K[i] + M[g]) >>> 0;
                temp = this.rotateLeft(temp, S[i]);
                temp = (B + temp) >>> 0;
                A = D; D = C; C = B; B = temp;
            }
            a = (a + A) >>> 0; b = (b + B) >>> 0; c = (c + C) >>> 0; d = (d + D) >>> 0;
        }
        return this.toHex(a) + this.toHex(b) + this.toHex(c) + this.toHex(d);
    }
    
    static rotateLeft(v, s) { return (((v << s) | (v >>> (32 - s))) >>> 0) }
    
    static toHex(v) { 
        v = v >>> 0; 
        let str = ''; 
        for (let i = 0; i < 4; i++) { 
            const byte = (v >>> (i * 8)) & 0xff; 
            str += byte.toString(16).padStart(2, '0'); 
        } 
        return str; 
    }
}

// Export for use in other modules
window.MD5 = MD5;
