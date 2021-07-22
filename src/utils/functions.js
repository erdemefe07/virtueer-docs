export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function toPlainObject(o) {
  return JSON.parse(JSON.stringify(o))
}