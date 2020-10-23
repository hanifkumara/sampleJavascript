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
data2 = { ...data }
data2.name = 'Hanif Kumara'
data2.email = 'hanifkumara00@gmail.com'
data2.hobby = 'olahraga'

const { name, email, hobby } = data2
console.log(`name: ${name}, email: ${email}, hobby: ${hobby}`)

// b.
const { street, city } = data.address

console.log(`street : ${street}, city: ${city}`)