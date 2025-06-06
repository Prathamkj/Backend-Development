const express = require('express');
const app = express();
const path = require('path');
// bringing the fs module
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// for static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req, res) {
    // fs for read the directory or file
    fs.readdir(`./files`,function(err,files){
        // jab fs callback ho tab responce render hoo
        res.render("index",{files: files});
        // console.log(files);
    })

});

// <form action="/create" method="post"></form>
// Now from this
app.post('/create',function(req, res) {
    // Now from here we want to create a file
    // fs for create a file
    // for the title and the data
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect('/');
    });

});

// Route for the Read More...
app.get('/file/:filename',function(req,res){
    // Now to read the file
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err, data){
        // console.log(data);
        res.render('show',{filename: req.params.filename, data: data});
        // filename ko show karna hai  
        // data ko show karna hai
        // show name k ejs file ko render karna hai\

    });
})

// To edit the Name of the file
app.get('/edit/:filename',function(req,res){
    res.render('edit',{filename: req.params.filename});
    // previous name bhej diya humnee
})

// Now to finally edit the file
app.post('/edit',function(req,res){
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`,function(err){

        // console.log(err);
        res.redirect('/');
    });
    
})
app.listen(3000);