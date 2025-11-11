const express= require("express");


const app = express();
const nodemailer=require('nodemailer');
require("dotenv").config();
app.use(express.json());

const transporter= nodemailer.createTransport({
    secure:true,
    host:'smtp.gmail.com',
    port:465,
    auth:{
        user:'pantpriyanshu707@gmail.com',
        pass:process.env.password,
    }

});




app.post('/sendEmail',async (req,res)=>{
    const {to,subj,msg}=req.body;

    const info= await transporter.sendMail({
        to,
        subject:subj,
        html:msg
    })

    if(!info){
        return res.status(404).json({
            message:"failed to send the email"
        })
    }
    res.status(200).json({
        message:"mail send successfully",
        data:info
    })
})





app.get("/",(req,res)=>{
    res.send("server is working fine");

})


app.listen(4000,()=>{
    console.log("server is running fine ....");
})