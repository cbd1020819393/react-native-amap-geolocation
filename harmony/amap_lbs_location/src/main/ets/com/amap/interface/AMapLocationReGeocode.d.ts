import ArrayList from '@ohos.util.ArrayList'; export interface AMapLocationReGeo { country: string; province: string; city: string; district: string; citycode: string; adcode: string; street: string; number: string; poiName: string; aoiName: string; desc: string; address: string; } export interface l45 { status: string; regeocode: m45; info: string; infocode: string; } export interface AMapLocationReGeoInfo { status?: string; regeo?: AMapLocationReGeo; info?: string; infocode?: string; } export interface m45 { addressComponent: AddressComponent; aois: ArrayList<AoiItem>; pois: ArrayList<PoiItem>; } export interface AddressComponent { country: string; province: string; city: string; district: string; citycode: string; adcode: string; streetNumber: StreetNumber; } export interface StreetNumber { street: string; number: string; } export interface AoiItem { name: string; } export interface PoiItem { name: string; } 