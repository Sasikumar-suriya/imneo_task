const express=require("express");
const app=express();
const db=require("./config/config");
const bodyParser=require("body-parser");
const moviesRoute=require("./Routers/movieRoute");

db.once("open",()=>{
    console.log("Database connection opened");
});
db.on("error",(err)=>{
    console.log("Error while open database",err)
})

app.use(bodyParser.json());
app.use("/movies",moviesRoute);

app.listen(3030,()=>{
    console.log("Server is listening to Port 3030...")
})