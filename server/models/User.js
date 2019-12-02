const mongoose = require("mongoose");
//const Schema = mongoose.Schema; == const {Schema} = mongoose;  2015 destructuring
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
//every thing that uses mongoose model classes, we do not need to require statements 39
