let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = Schema({
    id: Number,
    nom: String,
    email: String,
    password: String,
    role: String
});
module.exports = mongoose.model("User", UserSchema);