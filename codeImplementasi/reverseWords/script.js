const inputKalimat = 'Saya Belajar Javascript'
const arr = []
const strToArr = inputKalimat.split(' ')

for (let i = strToArr.length -1; i >= 0; i--) {
    arr.push(strToArr[i])    
}

const result = arr.join(' ')
console.log(result)