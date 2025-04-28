// Menggunakan notasi object literal
let mahasiswa = {
    nama: "Budi",
    umur: 20,
    nilai: 100,
    fakultas: {
        jurusan: "Teknik Informatika",
        fakultas: "Fakultas Teknik"
    }
}

mahasiswa.alamat = "Jakarta"
mahasiswa.nilai = 90

delete mahasiswa.alamat

console.log(mahasiswa)
console.log(mahasiswa.nama)
console.log(mahasiswa['umur'])
console.log(mahasiswa.fakultas.jurusan)

// Menggunakan constructor Object
let buku = new Object()
buku.judul = "Belajar Javascript"
buku.penulis = "Budi"
buku.tahun = 2020

console.log(buku)

// Mengakses properti object
console.log(buku.judul)
console.log(buku['penulis'])

// Destrukturasi object
let {judul} = buku
console.log(judul)