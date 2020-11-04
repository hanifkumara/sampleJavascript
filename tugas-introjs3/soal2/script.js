const getmonth = callback => {
    setTimeout(() => {
        let error = true 
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust', 'October', 'November', 'December']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    },4000 );
}

getmonth((error, bulan) => {
    if (error) {
        console.log(error.message)
        return;
    }
    bulan.map(value => {
        console.log(value)
    })
})