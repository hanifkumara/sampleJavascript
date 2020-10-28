const cekHariKerja = day => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           const dateDay = ['senin','selasa','rabu','kamis','jumat']
           let cek = dateDay.find((item) => {
               return item === day
           }) 
           if (cek) {
               resolve(cek)
           } else {
               reject(new Error('Hari ini bukan hari kerja'))
           }
        }, 3000);
    })
}


cekHariKerja('minggu')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err.message)
    })


    
// const tampil = async(hari) => {
//     try {
//         const cekHari = await cekHariKerja(hari)
//         console.log(cekHari)
//     } catch (e) {
//         console.log(e.message)
//     }
// }

// tampil('sabtu')