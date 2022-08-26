const mongoose=require('mongoose')

async function initDB(){
     await mongoose.connect(process.env.MONGO_URL,{dbName:"social"})
        console.log('connected succesfully');
}
module.exports={
    initDB
}