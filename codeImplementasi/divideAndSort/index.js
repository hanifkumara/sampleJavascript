const divideAndSort = num => {
    if (typeof num !== 'number') {
        console.log('Tipe data harus Number!!!')
        return;
    } else if (num.length <= 1) {
        return num
    }

    // Menjadikan deret angka ke array
    const numToArr = num.toString().split('')

    let numberZero = []
    numToArr.map((value, index) => {
        if (value == '0') {
            numberZero.push(index)
        }
    })

    // Mendapatkan numberZero
    const spaceOne = numberZero[0]
    const spaceTwo = numberZero[1] - 1

    console.log(spaceTwo)

    // Menghilangkan 0
    numToArr.splice(spaceOne, 1)
    numToArr.splice(spaceTwo, 1)

    const numberOne = numToArr.slice(0, spaceOne)
    const numberTwo = numToArr.slice(spaceOne, spaceTwo)
    const numberThree = numToArr.slice(spaceTwo, numToArr.length)
    
    numberOne.sort((a, b) => a - b)
    numberTwo.sort((a, b) => a - b) 
    numberThree.sort((a, b) => a - b)

    const gabung = numberOne.concat(numberTwo).concat(numberThree)
    const result = gabung.join('')
    console.log(result)
}
divideAndSort(10203)