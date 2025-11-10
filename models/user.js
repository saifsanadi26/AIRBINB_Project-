const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

//there is a special feature in passpostLocalMongoose that creates username, password, hashing and salting automatically and also some other features if we use this middleware, no need to define it in schema
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);