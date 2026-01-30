function summn(f,m) {
    let sum = 0;
    for (let i of m) {
        for (let j of f) {
            if (i % j == 0) {
                sum += i;
                break;
            }
        }
    }
    return sum
}
console.log(summn([2,3], [4, 5, 6, 7, 8, 9]))