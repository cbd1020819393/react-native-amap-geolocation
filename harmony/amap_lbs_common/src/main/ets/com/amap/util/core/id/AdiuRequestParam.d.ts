import HashMap from '@ohos.util.HashMap'; import { k45 } from './ADIURunner'; import { IRequest } from '../net/IRequest'; export declare class u17 { private static y16; private static l17; t15(context: Context, result: string): string; q15(): Promise<HashMap<string, string> | null>; z16(y47: Uint8Array, data: Uint8Array): Uint8Array; private w16; private c17; r15(tid: string, v47: string, w47: string, x47: string): Promise<string>; f17(str: string): Uint8Array; k17(): string; } export declare class y15 implements k45 { m17: u17; k17(): string; t15(context: Context, result: string | Object | ArrayBuffer | undefined): string; q15(): Promise<HashMap<string, string> | null>; s15(body: Uint8Array, u47: HashMap<string, string>): IRequest; r15(tid: string, r47: string, s47: string, t47: string): Promise<string>; } 