// first express
const express = require('express');
const app = express();

// MONGODB
// Requiring mongoose
const userModel = require('./usermodel');
// file ka nname

// import routes
app.get('/',function(req,res){
    res.send('Hello MongoDB');
});
// here we are giving async to the function because mongoose operations are asynchronous
app.get('/create',async function(req,res){
    // Mongoose ka code hamesha Asynchronous hota hai so to fix that we are usning here async-await
    let createduser = await userModel.create({
        // create karte samay ye chize paas kare
        name: "Pratham",
        email: "prathamjaulkar25@gmail.com",
        username: "pratham25",
        age: 21
    })
    // send kardiya data ko
    res.send(createduser);
});

// Update
app.get('/update',async function(req,res){
    
    // userModel.findOneAndUpdate()   
    // syntax 
    // userModel.findOneAndUpdate(findone , update, {new: true})
    let updateduser = await userModel.findOneAndUpdate(
        {username: "pratham25"}, // find one
        {age: 22},// update
        {new: true} // new is used to return the updated document
    );
    res.send(updateduser);
});

// Read
app.get("/read", async function(req,res){
    let users = await userModel.find()
    res.send(users);
})
// if we want to find a single user
// find({username: "pratham25"})

// Delete
app.get('/delete',async function(req,res){      
    // syntax 
    // userModel.findOneAndDelete(findone)
    let deleteduser = await userModel.findOneAndDelete({username: "pratham25"});
    res.send(deleteduser);
});


// finally the route -- port
app.listen(3000);