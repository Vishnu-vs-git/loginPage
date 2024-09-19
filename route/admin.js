const express=require('express')
const router=express.Router();
const adminController=require('../controller/adminController')
const adminAuth=require('../middleware/adminAuth')
 
 
 


router.get('/login',adminAuth.isLogin,adminController.loadLogin)

router.post('/login',adminAuth.isLogin, adminController.login)

router.get('/dash',adminAuth.checksession,adminController.loadDashboard);

router.post('/editUser',adminController.editUser)
router.get('/deleteUser/:id',adminAuth.checksession,adminController.deleteUser)
router.post('/addUser',adminAuth.checksession,adminController.addUser)
router.get('/logout',adminAuth.checksession,adminController.logout)



 


module.exports=router;  