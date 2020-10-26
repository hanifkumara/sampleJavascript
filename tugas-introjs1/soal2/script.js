const mtk = 80;
const bahasaIndonesia = 80;
const bahasaInggris = 90;
const ipa = 90;

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

    if (nilaiRata < 0) {
        console.log('Inputan Salah')
    } else if (nilaiRata < 60) {
        console.log('Grade = E')
    } 
    else if (nilaiRata < 70) {
        console.log('Grade = D')
    } else if (nilaiRata < 80) {
        console.log('Grade = C')
    } else if (nilaiRata < 90) {
        console.log('Grade = B')
    } else if (nilaiRata <= 100){
        console.log('Grade = A')
    } else if (nilariRata > 100 ){
        console.log('Inputan Salah')
    }
}