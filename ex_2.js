//  let row=5;
// for(i=1;i<=row;i++){
//     let stars=``
//     for(j=1;j<=row;j++){
//        if(i==1&& j==3 || i==2 && j==2 || i==2 && j==4 || i==3 && j==1 || i==3 && j==5 || i==4 && j==4 ||  i==4 && j==2  || i==5 && j==3){ 
   
//             stars=stars+' * '
//         }else{
//             stars=stars+'   '
//         }
//     }
//     console.log(stars)
// }



for(let i=1; i<=5; i++)
{
    let stars=" "
   for(let j=i; j<=5; j++)
   {
     stars=stars+" "
   }
   for(let k=1; k<=2*i-1; k++)
   {
     if(k==1 || k==(2*i-1)){
         stars=stars+'*'
     }
     else{
         stars=stars+" "
     }
   }
  console.log(stars)
}

for(let i=5-1; i>=5; i--)
{
    let stars=" "
   for(let j=i; j<=5; j++)
   {
     stars=stars+" "
   }
   for(let k=1; k<=2*i-1; k++)
   {
     if(k==1 || k==(2*i-1)){
         stars=stars+'*'
     }
     else{
         stars=stars+" "
     }
   }
  console.log(stars)
}