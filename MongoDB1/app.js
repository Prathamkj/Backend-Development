// Here we are seeing the crud operations on Ejs 
// require the express module
const express = require('express');
const app = express();
// setup the view enging
app.set('view engine', 'ejs');
// require the path module
const path = require('path');
// 
// 
const userModel = require('./models/user');
const user = require('./models/user');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 
app.use(express.static(path.join(__dirname, 'public')));



app.get("/",(req,res) => {
    res.render("index.ejs");
})
// Another Route to render
// read route
app.get("/read", async (req,res)=>{
    let allusers = await userModel.find();
    res.render("read.ejs",{users: allusers});
})

app.post("/create", async (req,res)=>{
    let {name, email, image} = req.body;
    let Createuser = await userModel.create({
        name: name,
        email: email,
        image: image
    })
    res.send(Createuser);
})
app.listen(3000);