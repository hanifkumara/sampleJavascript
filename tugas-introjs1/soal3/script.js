let printSegitiga = 5

if (typeof printSegitiga !== "number") {
    console.log("Data harus number")
} else {
    let s = "";
    for (let i = printSegitiga; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            s += j
        }
        s += '\n'
    }
}