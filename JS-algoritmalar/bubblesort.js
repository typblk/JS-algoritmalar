const bubbleSort = (arr) => {
    let length = arr.length
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
               let temp = arr[j]
               arr[j] = arr[j + 1]
               arr[j + 1] = temp 
            }
        }
    }
    return arr
}

const myArray = [16,46,815,1,309,0,4,75934,36701,22]

console.log('Sirali array', bubbleSort(myArray))