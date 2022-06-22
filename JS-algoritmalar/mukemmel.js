let sayi = 7
let total = 0

for (let i = 1; i < sayi; i++) {
    if (sayi % i === 0) {
        total += i
    }   
}


console.log(total === sayi ? 'Mukemmel sayi': 'Mukemmel sayi degil')