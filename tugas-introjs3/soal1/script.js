const cekHariKerja = day => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           const dateDay = ['senin','selasa','rabu','kamis','jumat']
           let cek = dateDay.find((item) => {
               return item === day
           }) 
           resolve(cek)
        //    if (cek) {
        //        resolve(cek)
        // //    } 
        //     else {
        //        reject(new Error('Hari ini bukan hari kerja'))
        //    }
        }, 3000);
    })
}


cekHariKerja('minggu')
    .then((res) => console.log('hasil', res))
    .catch((err) => console.log(err.message))
    // method then dieksekusi ketika operasi selesai atau fullfilled
    // method catch dieksekusi ketika operasi gagal atau rejected

// const tampil = async hari => {
//     try {
//         const cekHari = await cekHariKerja(hari)
//         console.log(cekHari)
//     } catch (e) {
//         console.log(e.message)
//     }
// }

// tampil('selasa')
    // blok try yaitu code javascript yang mungkin terjadi error
    // blok catch akan menangkap error yang terjadi pada blok try jika pada blok try errornya muncul
