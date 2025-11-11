const express= require("express");


const app = express();



app.get("/",(req,res)=>{
    res.send("server is working fine");

})


app.listen(4000,()=>{
    console.log("server is running fine ....");
})