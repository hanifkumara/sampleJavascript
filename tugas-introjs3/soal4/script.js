const api = fetch('https://jsonplaceholder.typicode.com/users')

const printUser = async() => {
    try {
        const req = await api
        const result = await req.json()
        result.map(value => {
            console.log(value.name)
        })
    } catch (e) {
        console.log(e.message)
    }
}

printUser()