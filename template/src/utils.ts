export const is = {
  number: (data: any) => (typeof data === 'number' && !Number.isNaN(data)),
  array: (data: any) => Array.isArray(data),
  object: (data: any) => Object.prototype.toString.call(data) === "[object Object]",
}
