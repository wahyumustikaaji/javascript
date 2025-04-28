// switch case
let hari = 3;
let namaHari;

switch (hari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    default:
        namaHari = "Hari tidak valid";
}
console.log(namaHari)

// switch case dengan kondisi boolean
let nilai = 80;
switch (true) {
    case nilai >= 90:
        console.log("Anda mendapatkan nilai A");
        break;
    case nilai >= 80:
        console.log("Anda mendapatkan nilai B");
        break;
    case nilai >= 70:
        console.log("Anda mendapatkan nilai C");
        break;
    default:
        console.log("Anda mendapatkan nilai D");
}