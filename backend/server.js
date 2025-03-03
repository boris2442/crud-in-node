const express=require("express");
const port=5001;
const app=express();
const connectDB=require("./config/db.js");
const dotenv=require(".env")

// app.get('/post', (req, res)=>{
//     res.json({
//         message:"voici  les donnees!",
//         texte:"recevez les message venant de la base de donnee"
//     })
// } ) 
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended:false}))
app.use("/post", require("./routes/post.routes.js"))

//ici, nous lansons le serveur
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})