//  Strings

// Membuat string
let singleQuote = 'Hello';
let doubleQuote = "World";
let backtick = `!`;

// Mengakses karakter dalam string
let str = "Hello";
console.log(str[0]); // Output: "H"

// Properties dan Methods
let str2 = "Hello World";
console.log(str2.length); // Output: 11
console.log(str2.toUpperCase()); // Output: "HELLO WORLD"
console.log(str2.toLowerCase()); // Output: "hello world"

// Trim
let trim = "        JavaScript TRIM"
console.log(trim.trim())

// Concat
let first = "Hello"
let last = "World"
let result = first + " " + last
console.log(result)

// Template Literals
let firstName = "Hello"
let lastName = "World"
let resultName = `${firstName} ${lastName}`
console.log(resultName)

// Mengambil bagian dari string
let str3 = "Hello World";
console.log(str3.slice(6, 11)); // Output: "World"
console.log(str3.substring(5)); // Output: "World"

// Replace
let str4 = "Hello World";
console.log(str4.replace("World", "JavaScript")); // Output: "Hello JavaScript"

// array
const arr = ["Hello", "World", "JavaScript"]
console.log(arr.join("-"))

const testString = "test-array-split"
console.log(testString.split("-", 2))

// Indexof 
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
let index = lorem.indexOf('dolor')
console.log(index)
let lastIndex = lorem.lastIndexOf('dolor')
console.log(lastIndex)

let exist = lorem.includes('dolor');
console.log(exist)