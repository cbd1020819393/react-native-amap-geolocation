import { Base64Util } from './Base64Util'; import { r22 } from './AMapAES'; export class SecurityUtil { static e17() { let s41 = new r22("AES128"); let t41 = s41.i22(); return t41.then(() => { if (s41.j22 === undefined) { const v41 = `SecurityUtil getSecretKey aMapAES.aesSymKey === undefined`; throw new Error(v41); } else { let key = s41.j22.getEncoded(); return Base64Util.b17(key.data); } }); } } 