const divideAndSort = num => {
    // Statement jika tipe data param num bukan number
    if (typeof num !== 'number') {
        console.log('Tipe data harus number')
        return;
    }

    // Merubah tipe data num menjadi array dan memisah angka 0 menggunakan split
    const numToArr = num.toString().split(0)

    // Looping numToArr menggunakan map dan ditampung variabel proccessSort 
    const proccessSort = numToArr.map(value => {

        //Memisah setiap index numToArr menggunakan split(), mengurutkan menggunakan sort(), menggabungkan lagi angka yang sudah urut menjadi string menggunakan join() 
        const result = value.split('').sort().join('')

        // Mengembalikan nilai result
        return result
    })

    // Menampilkan hasil proccessSort dan digabungkan menjadi string menggunakan join()
    console.log(proccessSort.join(''))
}

// eksekusi function dan mengisi parameternya
divideAndSort(124124023)