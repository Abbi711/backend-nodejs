const express = require('express')
const app = express()
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`<html><h1>Add products</h1> 
                <form action="/products" method="POST"> <input type="text" name="name">
                    <button type="submit"> Send </button></form></html>`)
})  

router.post('/products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router