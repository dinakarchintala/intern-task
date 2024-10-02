const Admin=require("../models/Admin.js");
const jwt=require("jsonwebtoken");
const dotEnv=require("dotenv");
dotEnv.config();

const secretkey=process.env.Whatisyourname;

const verifyToken=async(req,res,next)=>{

    const token=req.headers.token;
    if(!token)
    {
        return res.status(401).json({error:"token is requried"});
    }
    try{
            const decoded=jwt.verify(token,secretkey)
            const vendor=await Admin.findById(decoded.vendorId);
            if(!vendor)
            {
                return res.status(404).json({error:"vendor not found"})
            }
            req.vendorId=vendor._id

            next()
    }
    catch(error)
    {
        console.log(error);
      return  res.status(500).json({error:"invalid token"});
    }
}

module.exports = verifyToken