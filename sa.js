
// let arr=[]
// function primenumber(n){
// for(let i=2;i<=n;i++){
//   let flag=0;
  
//   for(let k=2;k<=i/2;k++){
//     if(i%k===0){
//       flag=1;
//       break;

//     }
   
//   }
//   if(flag===0){
//     arr.push(i)
//   }
// }
// return  arr.filter((num=>{
//    if(num>5) return num;

// }))

// }
// console.log(primenumber(10))
// const num=[2,3,4,5,6,2,3,8,5,7,9]
// //unique odd numbers
// const result=num.filter((num)=>{
//   if(num%2===1){
//     return num

//   }
// })
// const arr2=[]
// for(let i=0;i<result.length;i++){
//       let flag=0
//   for(let k=i+1;k<result.length;k++){
//       if(result[i]===result[k]){
//         flag=1
//       }
//   }
//   if(flag===0){
//     arr2.push(result[i])
//   }
// }
// console.log(arr2)

// function agecalc(year){
//  const  current = new Date().getFullYear()
//     console.log(current)
//  return current-year;

// }
// console.log(agecalc(1995))
// //const fs = require('fs');
// const express = require('express');
// const app = express();
// const data = 'hello i am vishnu i studiying beo caMP  6H WEEEK';

// app.get('/home', (req, res) => {
//   fs.writeFile('vishnu.txt', data, 'utf8', (err) => {
//     if (err) {
//       console.log('Error occurred:', err); // Log the specific error
//       res.status(500).send('An error occurred while writing the file');
//     } else {
//       console.log('Write successful');
//       res.send('File written successfully');
//     }
//   });
// });

// app.listen(2008, () => {
//   console.log('Server is running successfullyhttp://localhost:2008/home');
// });
const express=require('express');
const app=express()
app.get('/login',(req,res)=>{
  res.send('home page')
})
app.get('/product',(req,res,next)=>{
  const error= new Error('error occured')
  next(error)
})
app.use((error,req,res,next)=>{
  
  res.status(500).send({message:error.message})

})
app.get('/service',(req,res)=>{
  res.send('ffrom service page')
})
app.listen(3003,()=>{
  console.log('server is running http://localhost:3003 ')
})