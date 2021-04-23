const express=require('express')
const Form = require('../models/form')
const router=express.Router()

router.get('/forms',(req,res,next)=>{
    res.send({type: "GET"})
})


router.post('/forms',(req,res,next)=>{
    var form=new Form(req.body)
    form.save().then((data)=>{
        
        res.send(data)
    }).catch(next)
})




module.exports=router