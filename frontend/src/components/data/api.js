import { cryptoAssets, cryptoData } from "./cryptoData";

export function  fakeCrypto() {
  return new Promise((resolve) => {
setTimeout(() => {
  resolve(cryptoData)
}, 1000);
  })
}
export function  fetchAssets() {
  return new Promise((resolve) => {
setTimeout(() => {
  resolve(cryptoAssets)
}, 1000);
  })
}
