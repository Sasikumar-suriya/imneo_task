const mongoose=require("mongoose");
const movieSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    },
    language:{
        type:String,
        required:true
        },
    description:String
})
const movie=mongoose.model("movieModel",movieSchema);
module.exports=movie;