const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal >= nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if(dataArray.length < 5) {
        console.log("Jumlah angka dalam dataArray tidak ada")
    } else {
        let coba = dataArray.filter(value => {
            return value > nilaiAwal && value < nilaiAkhir
        })
        if (coba.length <= 0) {
            console.log('Data tidak ditemukan')
        } else {
            coba.sort((a, b) => a - b)
            console.log(coba)
        }
    }
}

seleksiNilai(10,30,[3,25,4,14,17])