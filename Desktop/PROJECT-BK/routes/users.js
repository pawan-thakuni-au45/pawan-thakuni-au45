const express=require('express')

const userRouter=express.Router()

userRouter.get('/',(req,res)=>{
    res.send('this is user routes')
})

module.exports=userRouter