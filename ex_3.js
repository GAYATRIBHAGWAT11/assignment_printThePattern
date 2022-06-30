let count=1
for(let i=1; i<=5; i++){
    stars="   "
    for(let j=1; j<=i;j++){
        stars=stars+count++
    }
    console.log(`${stars}`)
}