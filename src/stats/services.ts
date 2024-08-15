import { HwInfo } from './model.ts';

const hwInfo = new HwInfo();

export async function getStats() {
   await hwInfo.sync();

   return hwInfo.format();
}