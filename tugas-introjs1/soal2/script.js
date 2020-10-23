const mtk = 80;
const bahasaIndonesia = 80;
const bahasaInggris = 100;
const ipa = 80;

if (mtk <= 0 || mtk === null) {
    console.log('Nilai Matematika harus diisi')
} else if (bahasaIndonesia <= 0 || bahasaIndonesia === null) {   
    console.log('Nilai Bahasa Indonesia harus diisi')
} else if (bahasaInggris <= 0 || bahasaInggris === null) {   
    console.log('Nilai Bahasa Indonesia harus diisi')
} else if (ipa <= 0 || ipa === null) {
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