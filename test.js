alert("Hello World!");
function summn(m,f){
    let sum=0;
    let i;
    for(i=0;i<f.length;i++){
        if(m[i]%f[i]==0){
            sum+=m[i];
        }
    }
    return sum

}
console.log(summn([3,5],[1,2,3,4,5,6,7,8,9]))