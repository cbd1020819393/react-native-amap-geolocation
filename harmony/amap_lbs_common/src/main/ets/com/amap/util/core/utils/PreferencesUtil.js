import s37 from '@ohos.data.preferences'; import { LogUtil } from './LogUtil'; import { Constants } from './Constants'; let preferences = undefined; let options = { name: 'open_common_pf' }; export class PreferencesUtil { static h35(context) { preferences = s37.getPreferencesSync(context, options); } static putSync(context, key, value, x37 = false) { try { if (preferences === undefined) { PreferencesUtil.h35(context); } if (preferences !== undefined) { preferences.putSync(key, value); if (x37) { PreferencesUtil.flush(context); } } } catch (err) { let code = err.code; let message = err.message; LogUtil.e(Constants.z9, 'putSync', `Failed to check the key 'startup'. Code:${code}, message:${message}`); } } static getSync(context, key, w37) { try { if (preferences === undefined) { PreferencesUtil.h35(context); } if (preferences !== undefined) { let val = preferences.getSync(key, w37); LogUtil.i(Constants.z9, 'getSync', `Succeeded in getting value of 'startup'. val: ${val}.`); return val; } } catch (err) { let code = err.code; let message = err.message; LogUtil.e(Constants.z9, 'getSync', `Failed to get value of 'startup'. Code:${code}, message:${message}`); } return undefined; } deleteSync(context, key) { try { if (preferences === undefined) { PreferencesUtil.h35(context); } if (preferences !== undefined) { preferences.deleteSync(key); } } catch (err) { let code = err.code; let message = err.message; LogUtil.e(Constants.z9, 'deleteSync', `Failed to delete the key 'startup'. Code:${code}, message:${message}`); } } static flush(context) { try { if (preferences === undefined) { PreferencesUtil.h35(context); } if (preferences !== undefined) { preferences.flush((err) => { if (err) { LogUtil.e(Constants.z9, 'flush', `Failed to flush. Code:${err.code}, message:${err.message}`); return; } LogUtil.i(Constants.z9, 'flush', 'Succeeded in flushing.'); }); } } catch (err) { let code = err.code; let message = err.message; LogUtil.e(Constants.z9, 'flush', `Failed to flush. Code:${code}, message:${message}`); } } observer(context, key) { if (preferences === undefined) { PreferencesUtil.h35(context); } if (preferences !== undefined) { preferences.on('change', (key) => { LogUtil.i(Constants.z9, 'observer', 'The key' + key + 'changed.'); }); } } deletePreferences(context) { try { s37.deletePreferences(context, options, (err) => { if (err) { LogUtil.e(Constants.z9, 'deletePreferences', `Failed to delete preferences. Code:${err.code}, message:${err.message}`); return; } LogUtil.i(Constants.z9, 'deletePreferences', 'Succeeded in deleting preferences.'); }); } catch (err) { let code = err.code; let message = err.message; LogUtil.e(Constants.z9, 'deletePreferences', `Failed to delete preferences. Code:${code}, message:${message}`); } } } 