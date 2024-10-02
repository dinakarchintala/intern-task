const Register=require("../models/Register.js");

const addRegister=async(req,res)=>{
    try{
    const{employeename,employeeCompany,employeeID,username,emailID,password,department,phoneNumber,designation,joiningDate}=req.body;
    const regis=new Register({
        employeename,employeeCompany,employeeID,username,emailID,password,department,phoneNumber,designation,joiningDate
    })

    await regis.save();

    }
    catch(error)
    {
        console.log("Register failed")
    }


}
module.exports = {addRegister}