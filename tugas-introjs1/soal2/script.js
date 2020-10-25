const mtk = 60;
const bahasaIndonesia = 55;
const bahasaInggris = 59;
const ipa = 50;

if (typeof(mtk) !== 'number') {
    console.log('Nilai Matematika harus diisi')
} else if (typeof (bahasaIndonesia) !== 'number') {   
    console.log('Nilai Bahasa Indonesia harus diisi')
} else if (typeof (bahasaInggris) !== 'number') {   
    console.log('Nilai Bahasa Indonesia harus diisi')
} else if (typeof (ipa) !== 'number') {
    console.log('Nilai Bahasa Indonesia harus diisi')
} else {
    const jumlahNilai = mtk + bahasaIndonesia + bahasaInggris + ipa
    const nilaiRata = jumlahNilai / 4

    console.log(`Rata-rata = ${nilaiRata}`)

    if (nilaiRata < 60) {
        console.log('Grade = E')
    } else if (nilaiRata < 70) {
        console.log('Grade = D')
    } else if (nilaiRata < 80) {
        console.log('Grade = C')
    } else if (nilaiRata < 90) {
        console.log('Grade = B')
    } else if (nilaiRata <= 100) {
        console.log('Grade = A')
    }
}