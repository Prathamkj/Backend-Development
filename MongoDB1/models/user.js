const { name } = require('ejs');
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/testapp1");
// Giving the Schema 
const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
});

module.exports = mongoose.model("User", userSchema); 