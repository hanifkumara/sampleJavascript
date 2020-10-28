// 1
// const cekLapor = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const mtk = 90
//             const bin = 100
//             const big = 75
//             const ipa = 50
//             const jumlahNilai = mtk + bin + big + ipa
//             const rataNilai = -200/4
//             console.log(rataNilai)
//             if (rataNilai >= 75 && rataNilai < 101) {
//                 resolve('Selamat, Anda LULUS!!')
//             } else if (rataNilai < 75 && rataNilai > 0) {
//                 resolve('Anda Tidak Lulus, Tingaktkan belajarnya!!')
//             }
//              else if (rataNilai > 100 || rataNilai < 0) {
//                 reject( new Error('Inputan salah!!'))
//             }
//         }, 3000);
//     })    

// }
// const printLapor = async() => {
//     try {
//         let result = await cekLapor()
//         console.log(result)
//     } catch (e) {
//         console.log(e.message)
//     }
// }
// printLapor()

// 2

const absen = (cek) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const siswa = ['Hanif','Nanda', 'Ardhian', 'Raihan', 'Kurniawan', 'Irfan', 'Fathoni']
            let namaLowerCase = cek.toLowerCase()
            let cekSiswa = siswa.find(item => {
                cekLowerCase = item.toLocaleLowerCase()
                return namaLowerCase === cekLowerCase
            })
            if (cekSiswa) {
                resolve(`${cek} adalah siswa Arkademy Web 5`)
            } else {
                reject(new Error(`${cek} bukan siswa Arkademy Web 5`))
            }
        }, 3000);
    })
}

const printAbsen = async(absenSiswa) => {
    try {
        const result = await absen(absenSiswa)
        console.log(result)
    } catch (e) {
        console.log(e.message)
    }
}

printAbsen('kodok')