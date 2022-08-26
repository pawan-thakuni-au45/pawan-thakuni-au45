const express=require('express')
const {registeruser}=require('../controller/auth.js')
const authRouter=express.Router()


//REGISTER
authRouter.post('/register',registeruser)
    

module.exports=authRouter