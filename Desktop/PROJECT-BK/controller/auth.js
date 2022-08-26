// const mongoose=require('mongoose')
const usermodel=require('../models/user.js')
const registeruser=async(req,res)=>{
    const {username,email,password}=req.body
    try{
       const user=await usermodel.create({username,email,password})
       if(!user){
           res.send('error')
       }
       res.status(200).send(user)
       console.log(user);

}catch(err){
       res.send('error')
}

}

module.exports={
    registeruser
}