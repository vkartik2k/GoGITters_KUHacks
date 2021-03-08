const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const jwt_secret=process.env.JWT_SECRET;

router.post("/route/login",async (req,res)=>{
  console.log(req.body)
  const {password,email} = req.body
  if(!password || !email){
      res.status(422).json({error:"Password or Email is missing",done:false})
  }else{
      try {
          const savedUser = await User.findOne({email})
          if(!savedUser){
            res.status(422).json({error:"Password or Email is incorrect",done:false}) 
          }else{
              const passwordMatched = bcrypt.compare(password,savedUser.password)
              if(passwordMatched){
                const token = jwt.sign({_id:savedUser._id},jwt_secret) 
                const {email,_id,firstName,lastName,role}=savedUser;
                if(role==='STUDENT'){
                        // see if any logic
                        res.json({message:"Signed IN",token,user:{email,_id,firstName,lastName,role},done:true})
                }else if(role==='TEACHER'){
                    // see if any logic 
                     }     res.json({message:"Signed IN",token,user:{email,_id,firstName,lastName,role},done:true})   
              }else{
                res.status(422).json({error:"Password or Email is incorrect",done:false}) 
              }
          }
      } catch (error) {
          console.log(error)   
      } 
  }
})


router.post("/route/signup",async (req,res)=>{
    const {email,password,role,firstName,lastName}=req.body;
    if(!email || !password || !firstName || !lastName || !role){
        res.status(422).json({error:"Please add all the details",done:false})
    }else{ 
        try {
            const savedUser=await User.findOne({email})
            if(savedUser){
                res.status(422).json({error:"User already exists",done:false})
            }else{
                try {
                    const hashedPassword = await bcrypt.hash(password,12)
                        const newUser = await User.create({email,password:hashedPassword,role,firstName,lastName})
                        res.json({message:"User created",user:newUser,done:true})
                } catch (err) {
                    console.log(err)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
})

module.exports=router