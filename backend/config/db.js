const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
     mongoose.set('strictQuery', false);
    //  mongoose.connect("un lien est mit ici a l'interieur")
    mongoose.connect("process.env,MONGP_URI", ()=>{
        console.log("mongodb est connecte")
    })


    }catch(error){
      process.exit()
    }
}

module.exports=connectDB;