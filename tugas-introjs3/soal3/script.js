// 1
const cekLapor = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mtk = 75
            const bin = 20
            const big = 10
            const ipa = 30
            const jumlahNilai = mtk + bin + big + ipa
            const rataNilai = jumlahNilai/4
            console.log(rataNilai)
            if (rataNilai >= 75) {
                resolve('Selamat, Anda LULUS!!')
            } else if (rataNilai < 75) {
                resolve('Anda Tidak Lulus, Tingaktkan belajarnya!!')
            }
             else if (rataNilai > 100 || rataNilai < 0) {
                reject( new Error('Inputan salah!!'))
            }
        }, 3000);
    })    

}
const printLapor = async() => {
    try {
        let result = await cekLapor()
        console.log(result)
    } catch (e) {
        console.log(e.message)
    }
}
printLapor()

// 2

const absen = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const siswa = ['', '']
        }, 3000);
    })
}