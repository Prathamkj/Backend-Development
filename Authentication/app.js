const expresss = require('express');
const app = expresss();
// To set the cookie 
// require cookie parser
const cookieParser = require('cookie-parser');
// use cookie parser

// bctyptt
const bcrypt = require('bcrypt');


app.use(cookieParser());


app.get("/", (req, res)=>{
    res.cookie("name", "Pratham")
    res.send("Cookie has been set");
})

app.get("/read",function(req,res){
    // cookie bhi jayegi different route pe 
    console.log(req.cookies)
    res.send("Read the Page")
})
// Now for Bcrypting 

// 1. Encrypting the password
app.get("/", function(req,res){
    bcrypt.genSalt(10,saltRounds, function(err, salt) {
        bcrypt.hash("Prtham25", salt, function(err, hash) {
            console.log(hash);
        });
    });
})

// 2. Decrypting the password
// isme hash ka password pass karna hai
app.get("/", function(req,res){
    bcrypt.compare("Pratham25", "$2b$10$eImiTMZG4T5x0l9jZ1z5uO8Q3m6f7F1k5y5z5uO8Q3m6f7F1k5y5uO", function(err, result) {
        console.log(result); // true or false
        // agar true hai to password match ho gaya hai
        // agar false hai to password match nahi hua hai
    });
})


// Jwt
const jwt = require('jsonwebtoken');
app.get("/", (req , res)=> {
    let token = jwt.sign({email: "pratham@gmail.com"}, "secretkey",)
    // secretkey ke basis pe data encrypt hoga

    // string ko browser me bhej di
    req.cookie("token", token);
    console.log(token);
})

app.listen(3000)