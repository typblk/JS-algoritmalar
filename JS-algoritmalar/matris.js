const data = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let solCarpim = 1
let sagCarpim = 1
let total = 0

for (let i = 0; i < data.length; i++) {
    solCarpim *= data[i][i]
    sagCarpim *= data[i][data.length - (i + 1)]
}

total = solCarpim + sagCarpim
console.log('Matris carpiminin toplami = ' + total)