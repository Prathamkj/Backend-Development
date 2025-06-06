const express = require('express');
const app = express();
// cookie parser
const cookieParser = require('cookie-parser');
const path = require('path');
// requuire the mongoose connection
const userModel = require('./models/user');
// bcrypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.use(express.static(path.join(__dirname, 'public')));
// cookie parser
app.use(cookieParser());


app.get('/', (req, res) => {
    res.render('index');
});

// For password encryption we will use bcrypt

// /create route
// method is post so we write the method post here and /create
app.post('/create', (req, res) => {
    // data nikale
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
            username,
            email,
            password: hash, // here we are storing the encrypted password
            age
            })
            // setting the screte by jwt
            let token = jwt.sign({email}, "shhhhhhhh");
            res.cookie('token', token)
            res.send(createdUser);
        });
    });
});
// Now hume password ko encrypt karna hai
// We will use bcrypt for that


// logout route
app.post('/logout', (req, res) => {
    // server me change karne ke liyee we use the post
    res.cookie("token", "");
    res.redirect('/');
});


// login route
app.get("/login", (req,res) => {
    res.render('login');
})
app.listen(3000);