let sayi = 1234567987
let adet = 0

while (sayi != 0) {
    sayi = Math.floor(sayi / 10)
    adet ++
}

console.log("basamak sayısı", adet)