let result = "5" + 10;
let result2 = "5" - 10;

// falsy value 0, null, undefined, "", NaN
let bool = !0;

console.log(bool, typeof bool);

// Eksplisit conversion
let num = 100;

let string = String(num);
let string2 = num.toString();

let string3 = "110.90";
let string4 = parseFloat(string3);

console.log(string4, typeof string4);