const mongoose=require("mongoose");

const registerDetails=mongoose.Schema({

    employeename:{
        type:String,
        requried:true
    },
    
    employeeCompany:{
        type:String,
        requried:true
    },
    
    employeeID:{
        type:String,
        requried:true
    },
    
    username:{
        type:String,
        requried:true
    },
    
    emailID:{
        type:String,
        requried:true
    },
    
    password:{
        type:String,
        requried:true
    },
    phoneNumber:{
        type:String,
        requried:true
    },
    
    designation:{
        type:String,
            
        enum:["wesite Design","App Development","Backend Development"],
            
        
        requried:true
    },
    
    department:{
        type:String,
            
        enum:["web development","IT deparment","Marketing"],
            
        
        requried:true
    },
    joiningDate: {
        type: Date,
        required: true,
        default: Date.now
      },
      admin:[
          {
              type:mongoose.Schema.ObjectId,
                ref:'Admin'
          }
      ]

})

const Register=mongoose.model('Register',registerDetails);

module.exports = Register;