// Membuat array

// Menggunakan notasi array literal
let fruits = ["apple", "banana", "orange"];

// Menggunakan constructor Array
let numbers = new Array(1, 2, 3, 4, 5);

// Mengakses elemen array
console.log(fruits[0]); // Output: "apple"
console.log(numbers[2]); // Output: 3

// Menambahkan elemen ke array
fruits[3] = "grape";
fruits[0] = "kiwi";
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// Manipulasi array
let number = [1, 2, 3, 4, 5];
number.push(6);
number.pop();
number.shift();
number.unshift(0);
console.log(number); 

let number2 = [4,5]
let newNumber = number.concat(number2)
console.log(newNumber)
newNumber.splice(0,2,100)
console.log(newNumber)
console.log(newNumber.indexOf(100))
console.log(newNumber.includes(100))
// console.log(newNumber.slice(2,4))

// Multidimensi array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[1][2])