import ArrayList from '@ohos.util.ArrayList'; export declare class q12 { private static readonly u24; version: number; l24: number; n24: number; o24: number; p24: Uint8Array; q24: Uint8Array; r24: Uint8Array; encryptedData: Uint8Array; s24: Uint8Array; constructor(); t24(): void; h12(g47: ArrayList<Uint8Array>): void; v24(d47: Uint8Array, e47: Uint8Array, length: number, f47: boolean): Uint8Array; i12(data: Uint8Array): Promise<void>; y24(data: Uint8Array): Promise<void>; b25(data: Uint8Array, length: number, c47: boolean): Uint8Array; x24(num: number, length: number): Uint8Array; z16(b47: Uint8Array, data: Uint8Array): Uint8Array; c25(num: number, length: number, data: Uint8Array): Uint8Array; j12(): Uint8Array; w24(value: number): number; } 