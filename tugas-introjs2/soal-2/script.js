const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (keyword, limit, callback) => {
    const names = name;
    const lowerKeyword = keyword.toLowerCase();
    let findName = [];
    names.map(name => {
    const lowerName = name.toLowerCase();
    const result = lowerName.search(lowerKeyword)
    if(result > -1 && findName.length < limit) {
      findName = [...findName, name];
    }
  })
  return callback(findName);
}
const printName = (value) => {
  console.log(value)
} 

searchName('ro', 3, printName)