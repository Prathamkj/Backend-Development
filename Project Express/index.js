const express = require('express');
const app = express();
// Initiall stepss
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Ejs
// Seting up the ejs
app.set('view engine', 'ejs');
// Now according to the ejs we will create a folder named views
// and inside that we will create a file named index.ejs
// for that we we res.render("index") in the route



const path = require('path');
// Path module is used to join the path
// Now we want to setup the public static files
// Means we want to setup the css and js files


// settinh up the public static files
app.use(express.static(path.join(__dirname, 'public')));
// Now we will create a folder named public



app.get("/",function(req,res){
    res.render("index.ejs");
    // here we will write the file name that we want to render
    // and we will create a file named index.ejs in the views folder
})
// Url route
app.get("/profile/:username",function(req,res){
    // req.params.pratham
    // res.send("Dynamic Allocatin of the Routes By colon");
    res.send(`welcome, ${req.params.username}`);
})
app.get("/author/:username/:age",function(req,res){
    res.send("Chal rha hai bhai.......")
})
// we want to dynamically change the name of the profile so we add the coln in front of the name


// // setup the first route
// app.get("/",function(req,res)
// {
//     res.send("Chal raha hai Bhai....");
// });

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})