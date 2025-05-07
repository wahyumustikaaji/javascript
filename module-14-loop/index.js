// Inisiasi = nilai awal (let i = 0)
// Kondisi = kondisi yang harus dipenuhi (i < 10)
// Increment = nilai yang akan ditambahkan (i++)
// for (inisiasi; kondisi; increment)
// for (let i = 0; i < 10; i++)

// for loop: ketika jumlah iterasi sudah diketahui
for (let i = 1; i <= 5; i++){
    console.log(`nilai i: ${i}`)
}

// while loop: ketika jumlah iterasi belum diketahui
let i = 1;
while (i <= 10){
    console.log(`Iterasi ke-${i}`)
    i++
}

// do while loop: ketika jumlah iterasi belum diketahui, tapi minimal akan dieksekusi sekali
do {
    console.log(`Do ke-${i}`)
    i++
} while (i <= 10)

// for in loop: untuk mengakses properti dari object
const object = {
    nama: "Budi",
    umur: 20,
}
 
for (let properti in object){
    console.log(`${properti}: ${object[properti]}`)
}

// for of loop: untuk mengakses elemen dari array
const array = [1, 2, 3, 4, 5]
for (let elemen of array){
    console.log(elemen)
}