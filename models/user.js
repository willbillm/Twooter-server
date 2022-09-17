import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    userName: String,
    passWord: String,
    favAnimal: String

});

const user = mongoose.model('user', userSchema)

export default user;