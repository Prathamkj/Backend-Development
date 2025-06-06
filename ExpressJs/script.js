// Code for Express js in Begining
//---------- import express from 'express'
// import ki gahaj hum require kar sakte hai
const express = require('expres')
// require kiya express ko 
const app = express()
// express ki sari functionality ko hum app variable me store kara


// MiddleWare
app.use(function (req, res, next) {
    // request, response, next
    console.log('Middleware is running')
    // request ko aage bhi forward kar hai nai toh next() ko call karenge
    next()
});



// app.get (route, request handler or functtion(req, res))
app.get('/', function (req, res) {
    // jaise hi slash route pe koi request aati hai woh response return karega
    // yaha par hum request aur response ko handle karte hai
    res.send('Hello World from Express js!')
})

app.get('/profile', function (req, res, next) {
    res.send("This is the profile page")

    // if assume hume yaha pe error nikalna hai
    // return next(new Error('This is an error'))
    // // next for the error handling
    // and function me next bhi lagana hai
})

// Error Handling
app.use(function (err, req, res, next) {
    console.log(err.stack)
    res.status(500).send('Something broke!')
})
// yeh function tab call hoga jab koi error aata hai


// yaha par hum server ko start karte hai
// 3000 is the po rt number
app.listen(3000)


