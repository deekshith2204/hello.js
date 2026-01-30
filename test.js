alert("Hello World!");
function summn(m, f) {
    let sum = 0;
    for (let i of m) {
        for (let j !=0 &&  j of f) {
            if (m[i] % f[j] == 0) {
                sum += m[i];
                break;
            }
        }
    }
}
return sum

}
console.log(summn([3, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9]))