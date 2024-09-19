const userSchema=require('../model/usermodel')
const registerUser=async(req,res)=>{
  try{
    const {email,password}=req.body
    const user=await userSchema.findOne({email})
    if(user)return res.render('user/register',{message:'user already exists'})
      const newUser=new userSchema({
    email,
  password})
  await newUser.save()
  res.render('user/login',{message:'user created suceessfully'})
  }catch (error){

  } 
}
const logout=(req,res)=>{
  req.session.user=null
  console.log("button clicked")
  res.redirect('/user/login')
}
const login=async (req,res)=>{
  try{
    const {email,password}=req.body
    const user=await userSchema.findOne({email})
    if(!user) return res.render('user/login',{message:'user does not exist'})
      if(user.password!==password)return res.render('user/login',{message:'incorrect password'})
         req.session.user=true;
        res.render('user/userHome',{message:'login successfully'})
  }catch(error){

  }
}
const loadRegister=(req,res)=>{
  res.render('user/register')
}
const loadLogin=(req,res)=>{
  res.render('user/login')
}
const loadHome=(req,res)=>{
  res.render('user/userHome')
}
module.exports={registerUser,loadLogin,loadRegister,loadHome,login,logout} 