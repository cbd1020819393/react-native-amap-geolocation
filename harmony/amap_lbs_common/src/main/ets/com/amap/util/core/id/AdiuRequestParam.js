import HashMap from '@ohos.util.HashMap'; import { TextUtils } from '../TextUtils'; import { Base64Util } from '../utils/Base64Util'; import { AdiuManager } from './AdiuManager'; import util from '@ohos.util'; import { n17 } from '../utils/XXTEA'; import { MD5 } from '../utils/MD5'; import { Utils } from '../utils/Utils'; import { SecurityUtil } from '../utils/SecurityUtil'; import { o17 } from '../utils/AMapRSA'; import { LogUtil } from '../utils/LogUtil'; import { Constants } from '../utils/Constants'; const p17 = Base64Util.k15("SRFZHZUVZT3BOa0ZiemZRQQ"); const q17 = Base64Util.k15("FbGJzX3Nkaw"); const r17 = Base64Util.k15("SWjJuYVh2eEMwSzVmNklFSmh0UXpVb2xtOVM4eU9Ua3E"); const s17 = Base64Util.k15("FQU5EU0RLMTA"); const t17 = Base64Util.k15("FMTAw"); const a10 = '[AdiuRequestParam]'; export class u17 { constructor() { this.w16 = ""; } t15(context, result) { try { let l19 = JSON.parse(result); let code = l19.code; if (code == 1) { let m19 = l19.data; let n19 = m19 === null || m19 === void 0 ? void 0 : m19.x16; if (n19 == undefined) { n19 = ""; } if (!TextUtils.isEmpty(n19)) { AdiuManager.getInstance(context).u15(context, n19); } return n19; } } catch (error) { LogUtil.e(a10, `catch error, ${error.code}, ${error.message}`, ''); } return ""; } async q15() { if (u17.y16) { return null; } u17.y16 = false; let params = new HashMap(); params.set(Base64Util.k15("FZW50"), Base64Util.k15("FMg")); let builder = Base64Util.k15("SY2hhbm5lbD0") + q17 + Base64Util.k15("SJmRpdj0") + s17; let e19 = q17 + s17 + Base64Util.k15("FQA") + r17; let f19 = await MD5.j15(e19); builder += Base64Util.k15("FJnNpZ249") + f19.toUpperCase() + Base64Util.k15("SJm91dHB1dD1qc29u"); let g19 = new util.TextEncoder(); let h19 = g19.encodeInto(builder); let version = 0; const i19 = new Uint8Array(1); const j19 = new DataView(i19.buffer); j19.setUint8(0, version); h19 = this.z16(i19, h19); let k19 = g19.encodeInto(p17); let result = n17.a17(h19, k19); params.set(Base64Util.k15("FaW4"), Base64Util.b17(result)); params.set(Base64Util.k15("Sa2V5dA"), t17); return params; } z16(c19, data) { const d19 = new Uint8Array(c19.byteLength + data.byteLength); d19.set(data); d19.set(c19, data.byteLength); return d19; } c17() { if (!TextUtils.isEmpty(this.w16)) { return this.w16; } let w18 = "TUpJaVFGNk5LXHtSX1ZwQlRiV1VVZmtYWU1haV1hYWHCiXJtZcKLdmp8wpFewo1/wphwwoFzZmR8aWp6X2k6XsKDwoF+WGbChGdAScKLwoVXfmNxYEvCjcKLSG7CjGNvwoZtVFZ7WMKXYMKfwo5dZcKHfzZXUG85X0hNOVJrb2U8ZlJGW8KCe8KOV8KQWllrcGrCjcKIT25lUHPCicKGVsKKeG5fwp56XsKbc8KJbUVYR0pqU09gfE5/WT5YeHNAwoDCh1Z4V8KQT3JQYmxQbcKYwpFxdG/Ci3rCmMKQwop+YVbCmWFxwpxBdW07Zjp/ODlAbcKEY1pQwoJowohbV1VmV1laWmtcYGbClXfCk2NvesKdwohdWFnCol/CjWTCmMKicG1ENnAvPFtpcXtfclhfXsKAwolgRWNbS29OwpFafV3CkMKLTcKCwolrU3DCmGnCmX9wdsKPcXDCg3LCnFpGcDVTeTxNWW07bXJePVRfQn3ChGNraFhbwpNcwpXChMKNaFVjeVF8wojChm9YbmvChGDCmHvChGVQWjo0Z3o9djleOztWcVxSfWE9woLChkZdcGTCgVzCjMKUVE12wpV5bcKVwprCnntZworCgsKfwpHCksKnwpHClURURW9YaDtwXU1bck5YX3hSVFZUYlxKWFlua1xeYm9jU8KDa3ZrwpZ5am9Za3jCknR3fA"; w18 = Base64Util.d17(w18); let x18 = []; for (let b19 = 0; b19 < w18.length; b19++) { let val = w18.charCodeAt(b19) - (b19 % 48); x18.push(String.fromCharCode(val)); } let y18 = x18.join(''); let z18 = []; for (let a19 = 0; a19 < y18.length / 2; a19++) { z18.push(String.fromCharCode((y18.charCodeAt(a19) + y18.charCodeAt(y18.length - 1 - a19)) / 2)); } this.w16 = z18.join(''); return this.w16; } r15(tid, d18, e18, f18) { let g18 = {}; try { g18[Base64Util.k15("LdGlk")] = tid; g18[Base64Util.k15("FZGl1")] = d18; g18[Base64Util.k15("AZGl1Mg")] = e18; g18[Base64Util.k15("EZGl1Mw")] = f18; } catch (e) { if (e !== undefined) { LogUtil.e(Constants.z9, 'getPostParam', `Failed. Code:${e.code}, message:${e.message}`); } else { LogUtil.e(Constants.z9, 'getPostParam', `Failed`); } } let info = JSON.stringify(g18); if (!info) { return new Promise((v18) => { v18(""); }); } return SecurityUtil.e17().then((i18) => { if (!TextUtils.isEmpty(i18)) { let data = Utils.f17(info); let l18 = new Uint8Array(data.length + 1); l18.set(data); let key = Utils.f17(i18); let m18 = n17.a17(l18, key); let n18 = ''; if (m18 !== undefined) { n18 = Base64Util.b17(m18); } if (n18) { try { let o18 = this.c17(); Base64Util.g17(); let p18 = Base64Util.h17(o18); let q18 = Utils.f17(i18); let r18 = new o17(p18); return r18.i17(p18).then(() => { return r18.j17(q18); }).then((data) => { let body = Base64Util.b17(data.data); return Base64Util.k15("Fa2V5PQ") + encodeURIComponent(body) + Base64Util.k15("SJmRhdGE9") + encodeURIComponent(n18); }); } catch (e) { if (e !== undefined) { LogUtil.e(Constants.z9, 'getSecretKey', `Failed Code:${e.code}, message:${e.message}`); } else { LogUtil.e(Constants.z9, 'getSecretKey', `Failed`); } } } } return new Promise((k18) => { k18(""); }); }); } f17(str) { let arr = []; for (let b18 = 0, c18 = str.length; b18 < c18; b18++) { arr.push(str.charCodeAt(b18)); } return new Uint8Array(arr); } k17() { return u17.l17; } } u17.y16 = false; u17.l17 = ""; let v17 = new u17(); export class y15 { constructor() { this.m17 = new u17(); } k17() { return this.m17.k17(); } t15(context, result) { return this.m17.t15(context, result); } async q15() { return this.m17.q15(); } s15(body, z17) { let a18 = new Map([ ["Content-Type", "application/x-www-form-urlencoded"], ["csid", "96c164145dff4095a81ac5e6c1254ba4"], ["User-Agent", "Dalvik/2.1.0 (Linux; U; Android 12; LIO-AN00 Build/HUAWEILIO-AN00)"], ["Host", "adiu.amap.com"], ["Accept-Encoding", "gzip"], ["Content-Length", "254"] ]); let request = { url: "https://adiu.amap.com/ws/device/adius", extraData: body.buffer, params: z17, header: a18, }; return request; } r15(tid, w17, x17, y17) { return this.m17.r15(tid, w17, x17, y17); } } 