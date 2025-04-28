// var dia bisa diakses diluar scopes dan bisa diubah
// let dia hanya bisa diakses didalam scopes dan bisa diubah
// const dia hanya bisa diakses didalam scopes dan tidak bisa diubah

if(true){
    var nama = 'Wahyu';
}

console.log(nama); 

if(true){
    let nama = 'Wahyu';
    nama = 'Wahyu Pratama';
    console.log(nama); 
}

if(true){
    const nama = 'Wahyu';
    console.log(nama);
}


 