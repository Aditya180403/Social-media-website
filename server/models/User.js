import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    firstname:{
       type :String,
       required :true,
       minimum:2,
       maximum:50,

    },
    lastname:{
        type:String,
        required :true,
        minimum:2,
        maximum:50,
        
     },
     email:{
        type:String,
        unique :true,
        minimum:2,
        maximum:50,
        required:true,
        
     },
     password:{
        type:String,
        required :true,
        min:5,
        
     },

     picturePath:{
        type:String,
       default:" "
        
     },
     friends:{
        type:Array,
        default:[]
     },

     location:String,
     occupation:String,
     viewedProfile: Number,
     impressions:Number,


   
        
    
} , {timestamps:true})

const User = mongoose.model('User',UserSchema);

export default User;