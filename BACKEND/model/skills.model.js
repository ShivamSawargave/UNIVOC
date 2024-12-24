import mongoose from 'mongoose';

const userSchema= mongoose.Schema({
    SelectTechskills:{
        type:String,
        required:true
    },
    SelectFunctionalskills:{
        type:String,
        required:true
    },
    SelectBehaviouralskills:{
        type:String,
        required:true
    },
    }
   
)
const Skills=mongoose.model("Skills",userSchema);
export default Skills;