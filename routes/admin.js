const express = require('express')
const path = require('path')
const rootDir = require('../utils/path');

const app = express()
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    // res.send(`<html><h1>Add products</h1> 
    //             <form action="/admin/add-product" method="POST"> <input type="text" name="name">
    //                 <button type="submit"> Send </button></form></html>`)

    res.sendFile(path.join(rootDir, "views", "add-product.html"))
})  

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router