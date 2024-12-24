
import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';
import Contactus from '../model/contact.model.js';
import Skills from '../model/skills.model.js';
export const resister=async(req,res)=>{
    try{
        const {fullname,email,password,mobilenumber}=req.body;
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }

        const hashPassword =await bcryptjs.hash(password,10)
        const createdUser= new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
            mobilenumber:mobilenumber
        })
        await createdUser.save()
        res.status(201).json({message:"User created successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email
        }});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};




export const signin=async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user= await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username and password"});
        }
        else{
            res.status(200).json({message:"Sign In successfully",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
        }});
        }
    } catch (error) {
        console.log("error: "+ error.message)
        res.status(500).json({message:"User are not found"});
    }
}



export const contact=async(req,res)=>{
    try{
        const {fullname,collegename,email,mobilenumber,message,city,state}=req.body;
        const contactus=await Contactus.findOne({})
        if(contactus){
            return res.status(400).json({message:"Your message already submited, I'll contact you as soon as"})
        }

        
        const createdUser= new Contactus({
            fullname:fullname,
            mobilenumber:mobilenumber,
            email:email,
            state:state,
            city:city,
            collegename:collegename,
            message:message
        })
        await createdUser.save()
        res.status(201).json({message:"contact you soon",contactus:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email
        }});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};





export const skill=async(req,res)=>{
    try{
        const {SelectTechskills, SelectFunctionalskills, SelectBehaviouralskills}=req.body;
        const skills=await Skills.findOne({})
        if(skills){
            return res.status(400).json({message:"Your request is in process, I'll contact you as soon as"})
        }
        

        
        const createdUser= new Skills({
            SelectTechskills:SelectTechskills,
            SelectFunctionalskills: SelectFunctionalskills,
            SelectBehaviouralskills: SelectBehaviouralskills
        })
       
        res.status(200).json({message:"Thank you for showing interest, our relationship executive will get in touch with you shortly."});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};

