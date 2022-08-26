const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:20
    },
    profilePicture:{
        type:String,
        default:""

    },
    coverPicture:{
        type:String,
        default:""

    },
    follower:{
        type:Array,
        default:''

    },
    followings:{
        type:Array,
        default:''

    },
    isAdmin:{
        type:Boolean,
        default:false,
    }

},
{timestamps:true})

const usermodel=mongoose.model('users',userSchema)
module.exports=usermodel