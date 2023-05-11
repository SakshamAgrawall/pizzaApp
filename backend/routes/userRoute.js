const express = require("express");
const router = express.Router();
const User = require('../models/userModel');

router.post("/signup",(req,res)=>{
    const {name,email,password} = req.body
    const newUser = new User({name,email,password})
    try {
        newUser.save()
        res.status(200).json({
            success:true,
            message: "signup success"
        })
    } catch (error) {
        res.status(400).json({
            message:error
        })
        
    }
})

module.exports = router;