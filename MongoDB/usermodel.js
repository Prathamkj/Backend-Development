// requiring the mongoose module
const mongoose = require('mongoose');
// connecting to the database
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);
// last me database ka naam likhna hai
// 27017 is the default port for MongoDB

// creating a schema
// it is the method that accepts the object structure
const userSchema = new mongoose.Schema({
    // Har user ke 
    name: String,
    email: String,
    username: String,
    age: Number
});
// creating a model
// model ke basis pe hi hum create, read, update and delete operations karte hain

// model export ho rha hai isse hum Crud operations kar sakte hain
module.exports = mongoose.model("user", userSchema);
