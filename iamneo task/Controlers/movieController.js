const Movie=require("../Models/movieModel");
exports.addMovie=async(req,res)=>{
    try{
        const newMovie=await Movie.create(req.body);
        return res.status(200).json({Message:"Movie added successfully"}) 
    }catch(err){
       console.log(err);
       return res.status(500).json({Message:"Something went wrong"}) 
    }

}
exports.getAllMovies=async(req,res)=>{
    try{
      const movie=await Movie.find();
      if(!movie){
        return  res.status(404).json({Message:"Movie not found"}) ;
      }
      return res.status(200).json({data:movie});
    }catch(err){
       console.log(err);
       return res.status(500).json({Message:"Something went wrong"}) 
    }
}