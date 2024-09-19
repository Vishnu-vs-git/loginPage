const express= require('express');
const app=express()
const userRoutes=require('./route/user')
const adminRoutes=require('./route/admin')
const path=require('path');
const connectDB = require('./db/connectDB');
const session=require('express-session');
const nocache=require('nocache');
app.use(nocache()) 
app.use(session({   
  secret:'mysecretkey', 
  resave:false, 
  saveUninitialized:true, 
cookie:{secure : false}
}))
  
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))   
app.use(express.json()) 
app.use('/user',userRoutes)
app.use('/admin',adminRoutes)
// // app.get('/user/forgot',(req,res)=>{
//   res.render('./user/forgot')

// })
connectDB();
app.listen(5000, ()=>{
  console.log('server is running:http://localhost:5000/user/login');
    
    
  });         
     