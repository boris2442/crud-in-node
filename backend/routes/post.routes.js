const express= require('express');
const router=express.Router();


router.get("/", (req, res)=>{
    res.json({
        message: 'This is the post endpoint'
    })
})
router.post("/", (req, res)=>{
    res.json({
       message: req.body.message
    })
})


router.put("/:id", (req, res)=>{
    res.json({
       message: `Updating post with id ${req.params.id}`
    })
})
router.delete("/:id", (req, res)=>{
    res.json({
      message:"message supprime est "+ req.params.id
    })
})

//les likes 

router.patch("/like-post/:id", (req, res)=>{
    res.json({
       message: `J'aime le post avec id ${req.params.id}`
    })
})

router.patch("/dislike-post/:id", (req, res)=>{
    res.json({
       message: `J'ai disliker le post avec id ${req.params.id}`
    })
})






module.exports=router;