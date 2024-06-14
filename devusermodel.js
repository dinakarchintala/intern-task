const mongoose=require("mongoose");

const devuser=new mongoose.Schema({
    fullname:{
        type:String,
        requried:true,
    },
    designation:{
        type:String,
        requried:true
    },
    discription:{
        type:String,
        requried:true,
        maxlength:200,
    },

})
module.exports = mongoose.model("devuser",devuser)