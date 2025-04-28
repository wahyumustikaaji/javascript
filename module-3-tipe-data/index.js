// Tipe data primitive

// String
const nama =  'Wahyu';
const domisili = `${nama} Bandung`;

// Number
const umur = 20.5;

// Boolean
const isTrue = false;

// undifined
let x;

// null
let y = null;

// Symbol
const symbol = Symbol("description 1");

// BigInt
const bigint = 21020182018201820810280182012801n;


// Tipe data reference

// Object
const orang = {
    nama: 'Wahyu',
    umur: 20,
    alamat: 'Bandung',
    isMarried: false
}

// Array
const hobby = ['membaca', 'menulis', 'menonton film'];

// Function
function sayHello(){
    return 'Hello World';
}

const output = sayHello();

console.log(output, typeof output)

// Tipe data primitive
let a = 10;
let b = a; // B akan tetap 10 karena menyimpan nilai dari a
b = 20;

console.log(a, b);

// Tipe data reference
let person = {
    nama: 'Wahyu',
}

let person2 = person;  // person2 akan meyimpan referensi dari person
person.nama = 'budi';

console.log(person, person2)