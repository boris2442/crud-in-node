const mongoose = require('mongoose');
const postSchema=mongoose.Schema(
    {
        message:{
            type:String,
            required:true
        },
        author:{
            type:Strinng,
            required:true
        },
        likers:{
            type:Array,
            default:[]
        }
    }
)