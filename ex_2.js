for(i=1;i<=5;i++){
    let stars=" "
    for(j=1;j<=5;j++){
        if(i==1&& j==3 || i==2 && j==2 || i==2 && j==4 || i==3 && j==1 || i==3 && j==5 || i==4 && j==4 ||  i==4 && j==2  || i==5 && j==3){
            stars=stars+'*    '
        }else{
            stars=stars+'     '
        }
    }
    console.log(stars)
}