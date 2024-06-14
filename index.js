const express=require("express");
const mongoose=require("mongoose");
const devuser=require("./devusermodel");
const cors=require("cors");
const app=express();
mongoose.connect("mongodb+srv://task1:task1@cluster0.yhylbf9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=> console.log("Db is connected")
)
app.use(express.json());
app.use(cors({origin:'*'}));
app.get("/",(req,res)=>{
    return res.send("hello world")
})
app.post("/register",async(req,res)=>{
    try{
            const{fullname,designation,discription}=req.body;

            const newUser=new devuser({fullname,designation,discription});
            await newUser.save();
            return res.status(200).send("data is added");
    }
    catch(err)
    {
        console.log(err);
        return res.status(400).send("servise error");
    }
})
app.get("/members",async(req,res)=>{
    try{
            let allprofiles=await devuser.find();
            return res.json(allprofiles);
    }
    catch(err){
        console.log(err);
        return res.status(400).send("servise error");
    }
})

app.listen(5000,()=>console.log("servere is running"))