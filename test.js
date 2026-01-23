alert("Hello World!");
function summn(m,f){
    let sum=0;
    let i;
    for(i=0;i<f.length;i++){
        for(j=0:j<m.length;j++){
            if(m[i]%f[j]==0){
                sum+=m[i];}

        }
        
        }
    }
    return sum

}
console.log(summn([3,5],[1,2,3,4,5,6,7,8,9]))