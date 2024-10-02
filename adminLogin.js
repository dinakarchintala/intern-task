const adminController=require("../controllers/adminController.js");
const express=require("express");

const router=express.Router();

router.post("/register",adminController.vendorRegister);
router.post("/login",adminController.vendorLogin);
module.exports=router;