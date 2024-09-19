const checksession=(req,res,next)=>{
  if(req.session.user){
      next()
  }else{
    res.redirect('/user/login')
  }
}
const isLogin=(req,res,next)=>{
  
  if(req.session.user){
    console.log("inside home")
      res.redirect('/user/home');
  }else{
    next()
  }
}
module.exports={checksession,isLogin}