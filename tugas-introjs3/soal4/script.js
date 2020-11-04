const api = fetch('https://jsonplaceholder.typicode.com/users')
  
const printUser = async() => {
    try {
        const req = await api
        const result = await req.json()
        if (req.status === 200) {
            result.map(value => {
                console.log(value.name)
            })
        } else {
            throw new Error('Something went wrong!')
        }
    } catch (e) {
        console.log(e.message)
    }
}

printUser()