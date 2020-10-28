const getmonth = callback => {
    setTimeout(() => {
        let error = false 
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust', 'October', 'November', 'December']
        if (!error) {
            callback( month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    },4000 );
}

getmonth((bulan) => {
    bulan.map(value => {
        console.log(value)
    })
})