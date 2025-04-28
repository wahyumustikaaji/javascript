// if else statment

// sintaks if else
let age = 18
if (age >= 18){
    console.log("Anda boleh mengemudi")
} else{
    console.log("Anda tidak boleh mengemudi")
}

// sintaks if else if
let nilai = 80
if (nilai >= 90){
    console.log("Anda mendapatkan nilai A")
} else if (nilai >= 80){
    console.log("Anda mendapatkan nilai B")
} else if (nilai >= 70){
    console.log("Anda mendapatkan nilai C")
} else {
    console.log("Anda mendapatkan nilai D")
}

// nested if else
let num = 10;
if (num > 0){
    if (num % 2 === 0){
        console.log("Bilangan positif genap")
    } else {
        console.log("Bilangan positif ganjil")
    }
} else {
    console.log("Bilangan negatif")
}