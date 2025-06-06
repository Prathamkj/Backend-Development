// Session and Cookie
// 


const express = require('expres')
const app = express()

// Session and Cookie
// Middleware
app.use(express.json())
// yeh middleware json based data ko readable karne ke liye hai
// ye json based data ko readable karthi hai
// Middleware for parsing JSON data
// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }))
// Middleware for parsing cookies

// MiddleWare
app.use(function (req, res, next) {
    // request, response, next
    console.log('Middleware is running')

    next()
});


app.get('/', function (req, res) {
    
    res.send('Hello World from Express js!')
})

app.get('/profile', function (req, res, next) {
    res.send("This is the profile page")
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


