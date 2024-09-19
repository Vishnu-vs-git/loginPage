const checksession=(req,res,next)=>{
  if(req.session.admin){
      next()
  }else{
    res.redirect('/admin/login')
  }
}


const isLogin=(req,res,next)=>{
  if(req.session.admin){
    console.log(req.session.admin + " admin session");
      res.redirect('/admin/dash')  
  }else{
    next()
  }
}
module.exports={checksession,isLogin} 