// contoh penggunaan numbers

let bilanganBulat = 26;
let bilanganPecahan = 3.20;
let bilanganNegatif = -5;
let infinityValue = Infinity;
let notANumber = NaN;
console.log(infinityValue);

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NaN)

let num = 732.9
let str = num.toString()
console.log(str, typeof str)

let floating = 3.124824
console.log(floating.toFixed(3))

let float = 3.1428790
console.log(float.toPrecision(5))

let str2 = "123.7"
console.log(parseFloat(str2))