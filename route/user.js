const express=require('express');
const router=express.Router();
const userController=require('../controller/userController')
const auth=require('../middleware/auth')



 

router.get('/login',auth.isLogin,userController.loadLogin
 
)
router.post("/login",auth.isLogin,userController.login) 
 router.get('/register',userController.loadRegister)

router.post('/register',auth.isLogin,userController.registerUser) 
router.get('/home',auth.checksession,userController.loadHome)
router.get('/logout',userController.logout)
 
                   
module.exports=router;