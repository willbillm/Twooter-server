import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    user: String,
    title: String,
    entry: String
   

});

const post = mongoose.model('post', postSchema)

export default post;