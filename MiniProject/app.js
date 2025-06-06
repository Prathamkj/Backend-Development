// creating a basic user post likh payengee
// here we are creating user 
// add login  and register functionality
// post like and post creation also the post deletion

const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { resolveInclude } = require('ejs');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/profile",isLoggedIn,(req,res)=>{
    console.log(req.user);
    res.render("profile")
})

// for the form register
app.post("/register", async (req, res) => {
    let {email, password, name, age, username} = req.body;
    let user = await userModel.findOne ({ email });
    if (user) {
        return res.status(500).send("User already exists");
    }
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(password,salt ,async (err,hash)=>{
            let user = await userModel.create({
                Username: username,
                name: name,
                age: age,
                email: email,
                password: hash
            })
            let token = jwt.sign({email: email, userid: user._id}, "shhhhh")
            res.cookie("token",token)
            res.send("Registered successfully");
        })
    })


})
// for login 
app.post("/login", async (req, res) => {
    let {email, password} = req.body;
    let user = await userModel.findOne ({ email });
    if (!user) {
        return res.status(500).send("Something Went Wrong");
    }
    // bcryypt
    bcrypt.compare(password, user.password, function(err, result){
        if (result){
            let token = jwt.sign({email: email, userid: user._id}, "shhhhh")
            res.cookie("token", token);
            res.status(200).send("you can login")
        }
        else {
            return res.redirect("/login")
        }
    })

})

// logout route functionality
app.post("/logout", async (req, res) => {
    res.cookie("token", "");
    res.redirect("/login");
})
// middleware to check if user is logged in
function isLoggedIn(req, res, next){
    if (req.cookies.token === "") res.send("You must be logged in");
    else {
        let data = jwt.verify(req.cookies.token, "shhhhh");
        req.user = data;
        
        next();
    }
}



app.listen(3000);