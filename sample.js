// const express=require('express')
// const app=express()
// const http=require('http')

// app.get('/home',(req,res)=>{
//   res.end('hello')

// })
// app.get('/product',(req,res)=>{

//   const{a,b}=req.query
//   const sum=Number(a)+Number(b);
//   console.log(a,b,sum);
//   res.end(`from product Sum:${sum}`)

// })
// app.get('/service',(req,res)=>{
//   res.end('from service')
// })
// const PORT = 3002;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// })


// const express=require('express')
// const app=express()
// const fs=require('fs')
// const http=require('http')
// app.get('/home',(req,res)=>{
//   fs.readFile('example.txt','utf8',(err,data)=>{
//     if(err){
//      return
//     }else{
//      console.log(data)
//      res.end(data)
//     }
//  })
// })
// const PORT = 3002;
//  app.listen(PORT, () => {
//    console.log(`Server is running on http://localhost:${PORT}`);
//   })

// const express=require('express')
// const app=express()
// const fs=require('fs')
// const date=new Date()
// const data=   `hello i am vishnu created at${date} ` 
// fs.writeFile('vishnu.txt',data,'utf8',(err,data)=>{
//   if(err){
//     return
//   }else{
//     console.log('suceeful')
//   }
// })

