const number1 = 220
const number2 = 300

let total1 = 0
let total2 = 0

const isFriend = (s1,s2) => {
    for (let i = 0; i < s1; i++) {
        if (number1 % i === 0) {
            total1 += i
        }
    }
    for (let i = 0; i < s2; i++) {
        if (number2 % i === 0) {
            total2 += i
        }
    }

    return (total1 === s2 && total2 === s1) ? 'Arkadas sayilar' : 'Arkadas sayi degiller'
}

console.log(isFriend(number1, number2))