const mongoose=require('mongoose')

const Schema=mongoose.Schema

const FormSchema=new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true

    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type:Number,
        required:true

    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zip:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },

    comment:{
        type:String,
        required:true
    }





})

const Form=mongoose.model('form',FormSchema)
module.exports=Form


