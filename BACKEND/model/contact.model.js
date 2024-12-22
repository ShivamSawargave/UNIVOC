import mongoose from 'mongoose';
import { type } from 'os';

const userSchema= mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    collegename:{
        type:String,
        required:true
    },
   
    
    message:{
        type:String,
        required:true
    }
    
    }
   
)
const Contactus=mongoose.model("Contactus",userSchema);
export default Contactus;