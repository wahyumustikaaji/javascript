// Higher Order Function
function selesaikanTugas(tugas, callback){
    console.log("Menyelesaikan tugas: " + tugas)
    callback()
}

// Callback function
function tugasSelesai(){
    console.log("Tugas sudah selesai")
}

// Memanggil Higher Order Function
selesaikanTugas("Javascript", tugasSelesai)