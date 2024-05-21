const express=require("express");
const route=express.Router();
const movieControler=require("../Controlers/movieController");
 
route.post("/addmovie",movieControler.addMovie);
route.get("/allmovies",movieControler.getAllMovies);

module.exports=route;