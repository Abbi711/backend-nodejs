const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

// middlewares -> executed for every incoming request
// app.use (general, for all http methods), more specific -> (app.get/post/patch/put/delete)

// parses the incoming request's body
app.use(bodyParser.urlencoded({extended:false}));
app.use(adminRoutes);
app.use(shopRoutes);


app.use('/', (req, res, next) => {
    res.status(404).send('<html><h1> page not found </h1> </html>')
    // res.send('<html><h1> page not found </h1> </html>')
})
// const server = http.createServer(app);
// server.listen(3000)

app.listen(3000)

//./node_modules/nodemon/bin/nodemon.js app.js