// Membuat date object
let now = new Date()
console.log(now)

// Menggunakan string
let specificDate = new Date("August 19, 2025")
console.log(specificDate)

// Menggunakan parameter
let customDate = new Date(2024, 7, 20, 10, 30)
console.log(customDate)

// Mengambil komponen tanggal
let today = new Date()
console.log(today.getTime())
console.log(today.getDate())
console.log(today.getHours())

// Mengatur tanggal dan waktu
let date = new Date()
date.setFullYear(2024)
console.log(date)

date.setMonth(11)
console.log(date)

date.setDate(25)
console.log(date)

// Perhitungan waktu dengan Date object
let start = new Date(2024, 7, 20, 10, 30)
let end = new Date(2024, 8, 3, 10, 30)

let diff = end - start
console.log(diff)

let diffIndays = diff / (1000 * 60 * 60 * 24)
console.log(diffIndays)