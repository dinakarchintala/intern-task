// adminController.js
const Admin = require("../models/Admin.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotEnv = require("dotenv");
dotEnv.config();
const secretkey = process.env.Whatisyourname;

const vendorRegister = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }
  try {
    const vendorEmail = await Admin.findOne({ email });
    if (vendorEmail) {
      return res.status(400).json({ error: "Email already taken" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newVendor = new Admin({
      username,
      email,
      password: hashPassword,
    });
    await newVendor.save();
    res.status(201).json({ message: "Vendor registered successfully" });
    console.log("registered");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const vendorLogin=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const vendor = await Admin.findOne({email});
        if(!vendor||!(await bcrypt.compare(password,vendor.password)))
        {
            return res.status(401).json({error:"invalid username or password"})
        }

        const token = jwt.sign({vendorId:vendor._id},secretkey,{expiresIn:"1h"})

        res.status(200).json({success:"login successfull",token})
        console.log(email,"this is token",token);
    }
    catch(error)
    {
        console.log(error);
    }
}
module.exports ={vendorRegister,vendorLogin }