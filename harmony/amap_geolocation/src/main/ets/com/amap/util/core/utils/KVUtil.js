import distributedKVStore from '@ohos.data.distributedKVStore'; import { Constants } from './Constants'; import { LogUtil } from './LogUtil'; let f35 = undefined; let kvStore = undefined; const g35 = "utilsLibrary"; export class KVUtil { constructor(context) { this.options = { createIfMissing: true, encrypt: false, backup: false, autoSync: false, kvStoreType: distributedKVStore.KVStoreType.DEVICE_COLLABORATION, securityLevel: distributedKVStore.SecurityLevel.S3 }; this.i15 = context; let k35 = { context: context, bundleName: 'com.amap.utilsLibrary' }; f35 = distributedKVStore.createKVManager(k35); f35.getKVStore(g35, this.options, (err, m35) => { kvStore = m35; }); } k32(key, value) { kvStore === null || kvStore === void 0 ? void 0 : kvStore.put(key, value, (err) => { if (err !== undefined) { LogUtil.e(Constants.z9, 'putValue', `Failed to put data. Code:${err.code},message:${err.message}`); return; } LogUtil.i(Constants.z9, 'putValue', 'Succeeded in putting data.'); }); } getValue(key) { let data = undefined; kvStore === null || kvStore === void 0 ? void 0 : kvStore.get(key, (err, data) => { if (err != undefined) { LogUtil.e(Constants.z9, 'getValue', `Failed to get data. Code:${err.code},message:${err.message}`); return; } LogUtil.i(Constants.z9, 'getValue', `Succeeded in getting data. Data:${data}`); data = data; }); return data; } l32(key) { kvStore === null || kvStore === void 0 ? void 0 : kvStore.delete(key, (err) => { if (err !== undefined) { LogUtil.e(Constants.z9, 'deleteValue', `Failed to delete data. Code:${err.code},message:${err.message}`); return; } LogUtil.i(Constants.z9, 'deleteValue', 'Succeeded in deleting data.'); }); } } 