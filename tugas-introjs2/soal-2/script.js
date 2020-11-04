// const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

// const searchName = (keyword, limit, callback) => {
//     const names = name;
//     const lowerKeyword = keyword.toLowerCase();
//     let cariNama = [];
//     names.map(value => {
//     const lowerName = value.toLowerCase();
//     const result = lowerName.search(lowerKeyword)
//     if(result > -1 && cariNama.length < limit) {
//       cariNama = [...cariNama, value];
//     }
//   })
//   return callback(cariNama);
// }
// const printName = (value) => {
//   console.log(value)
// } 

// searchName('zz', 3, printName)

const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (key, limit, cb) => {
    const names = name
    const nameLoop = names.filter(value => {
        return value.toLowerCase().includes(key.toLowerCase())
    })
    const hasilAkhir = nameLoop.slice(0, limit)
    return cb(hasilAkhir)
}

searchName('sd', 4, (res => {
    console.log(res)
}))