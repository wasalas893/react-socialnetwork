const mongoose=require('mongoose')
const Schema=mongoose.Schema

const UserSchema=new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }

})

module.exports=User=mongoose.model('users',UserSchema);