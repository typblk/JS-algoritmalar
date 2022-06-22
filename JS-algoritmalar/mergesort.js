const merge = (left, right) => {
    let result = []

    while (left.length > 0 && right.length > 0) {
        result.push(left[0] < right[0] ? left.shift() : right.shift())
    }
    result = result.concat(left).concat(right)
    return result
}

const divide = (arr) => {
    if (arr.length < 2) return arr
    const mid = Math.floor(arr.length / 2)
    const left = divide(arr.slice(0, mid))
    const right = divide(arr.slice(mid))

    return merge(left, right)
}

const arr = [15, 6, 9, 7, 38, 490, 44, 6, 1, 69, 978, 4, 200, 203, 24]

console.log('Siralanan array', divide(arr))