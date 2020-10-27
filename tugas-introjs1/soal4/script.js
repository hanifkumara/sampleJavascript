let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// a.
const data2 = {
     ...data ,
    name : 'Hanif Kumara',
    email : 'hanifkumara00@gmail.com',
    hobby : 'olahraga'
}

console.log(data2)

// b.
const { street, city } = data.address

console.log(`street : ${street}, city: ${city}`)