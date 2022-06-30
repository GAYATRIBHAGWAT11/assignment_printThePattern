let a=0;
let b=1;
// let c;
for(i=a;i<=5;i++){
    let stars=" "
    for(j=1;j<=i;j++){  
        let c=a+b 
        a=b;
        b=c
        stars=stars+c
    }
    console.log(`${stars}`)
}
