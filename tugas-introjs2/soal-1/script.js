//1. isNan() merupakan sebuah function yang menguji apakah nilai dari parameter expression itu adalah bukan angka. Kalau nilai expression tersebut adalah bukan angka maka fungsi ini akan mengembalikan nilai true. Jika nilai nilai tersebut adalah angka maka fungsi ini akan akan mengembalikan nilai false.
const namaLengkap = 'Hanif Kumara'
let umur = 19
console.log(isNaN(namaLengkap))

// 2.Fungsi parseInt merupakan fungsi dari javascript untuk mengubah kebilangan bulat. Maksudnya jika bilangan didalamnya mengandung desimal maka akan dikonversikan ke bilangan bulat.
const pembagian = (bilPertama, bilKedua) => {
    let bagi = parseInt(bilPertama/bilKedua)
    let hasil = `${bilPertama} dibagi ${bilKedua} adalah ${bagi}`
    return hasil
}
console.log(pembagian(23,7))

// 3. Method toLowerCase mengembalikan nilai string yang diubah menjadi huruf kecil.
let quote = "BUILD SOMETHING AMAZING"
console.log(quote.toLowerCase())

// 4. Metode toUpperCase mengembalikan nilai string yang diubah menjadi huruf besar.
let sekolah = "smk muhammadiyah 1 sukoharjo"
console.log(sekolah.toUpperCase())

// 5. Metode ini membagi objek String menjadi array string dengan memisahkan string menjadi beberapa substring.
let makanan = "Soto Rawon Sate Pecel Tahu Tempe Coca-cola"
// split mempunyai dua parameter, separator dan limit
let result = makanan.split(" ", 4)
console.log(result)


// 6.  Metode join mengembalikan array sebagai string
let minuman = ["Nama", "saya", "Hanif", "Kumara"]
console.log(minuman.join(" "))

//  7. Metode replace menemukan kecocokan antara ekspresi reguler dan string, dan mengganti substring yang cocok dengan substring baru.
let kopi = "Kopi toraja bland sangat nikmat"
const resultKopi = kopi.replace("Kopi toraja bland", "Kopi kapal api")
console.log(resultKopi)

//  8. Method slice mengembalikan sebuah salinan dangkal dari sebagian array menjadi sebuah objek array baru yang dimulai dari start sampai end (end tidak termasuk) dimana start dan end merupakan index dari  item yang ada di  array tersebut. Tidak merubah array asli.
let  hewan = ["Buku", "Kancil", "Jerapah" ,"Kucing", "Tomat", "Laptop"]
let resultHewan = hewan.slice(1,4)
console.log(resultHewan)
console.log(hewan)

//  9. Method pop() menghapus elemen terakhir dari array dan mengembalikan elemen tersebut.
let Hobby = ["Olahraga", "Mendengarkan Musik", "Game", "Rebahan"]
let popped = Hobby.pop()
console.log(Hobby)
console.log(popped)

//  10. Metode reverse membalik urutan elemen dalam larik.
let Keseharian = ["Siap Belajar", "Sarapan", "Mandi", "Bangun Tidur"]
console.log(Keseharian.reverse())