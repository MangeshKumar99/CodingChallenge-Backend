const express=require('express')

const bodyParser=require('body-parser')

const routes=require('./routes/api')

const cors=require('cors')

const mongoose=require('mongoose')

const app=express()

const mongoURL=`mongodb+srv://root:root@cluster0.s8acx.mongodb.net/Cluster0?retryWrites=true&w=majority`

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})

app.use(bodyParser.json())

app.use(cors())

app.use('/api',routes)


app.use((err,req,res,next)=>{
 //console.log(err)
 res.status(422).send({error: err.message})

})

app.listen(process.env.port||7700,()=>{
    console.log("Listening for requests...")
})
