const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

// middlewares -> executed for every incoming request
// app.use (general, for all http methods), more specific -> (app.get/post/patch/put/delete)

// parses the incoming request's body
app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin', adminRoutes); //routes that start with '/admin/
app.use(shopRoutes);


app.use('/', (req, res, next) => {
    // res.status(404).send('<html><h1> page not found </h1> </html>')
    res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"))
})
// const server = http.createServer(app);
// server.listen(3000)

app.listen(3000)

//./node_modules/nodemon/bin/nodemon.js app.js