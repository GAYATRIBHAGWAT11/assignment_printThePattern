// for(let i=0;i<=5;i++){
//     let stars=" "
//     for(j=0;j<=5;j++){
//         //  if(i==j || i==0 &&  j==5 || i==1 && j==4 ||i==1 && j==4 && i==4 && j==1 || i==4 && j==1 || i==5 && j==0){
//              if(i==j || i+j==5){    
//             stars=stars+"   *    "
//         }else{
//              stars=stars+"       "
//         }  
//     }
//     console.log(stars)
// }


for(let i = 1; i<=5; i++){
  let stars = ``
  for(let j = 1; j<=5; j++){
  if(i==j||(i+j==6)){
     stars=stars+ "   *    "
  }
  else{
    stars=stars+"       "
  }
  
  
  }console.log(stars)
}