const express=require('express')
const app=express();
const mongoose=require('mongoose')
require('dotenv').config()
const {initDB}=require('./dbconfig')

const helmet=require('helmet')
const morgan=require('morgan')
const userRouter=require('./routes/users.js')
const authRouter=require('./routes/auth.js')

initDB()
//middlewear
app.use(express.json());
app.use(helmet());
app.use(morgan('common'))
app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)


app.get('/users',(req,res)=>{
    res.send('welcome')
})
app.listen(8000,()=>{
    console.log("Server is Running");
})