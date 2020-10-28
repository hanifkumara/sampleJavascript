const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal >= nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if(dataArray.length < 5) {
        console.log("Jumlah angka dalam dataArray tidak ada")
    } else {
        let coba = dataArray.filter(value => {
            if (value > nilaiAwal && value < nilaiAkhir) {
                return value
            }
        })
        coba.sort((a, b) => a - b)
        console.log(coba)
    }
}

seleksiNilai(10,20,[2,25,4,14,17,30,8])