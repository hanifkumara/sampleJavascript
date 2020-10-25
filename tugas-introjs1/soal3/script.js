let printSegitiga = 5

if (typeof printSegitiga !== "number") {
    console.log("Data harus number")
} else {
    let str = "";
    for (let i = printSegitiga; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            str += j
        }
        str += '\n'
    }
    console.log(str)
}