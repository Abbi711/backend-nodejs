const express = require('express')
const path = require('path')
const rootDir = require('../utils/path')

const app = express()
const router = express.Router()

// '/' includes all paths starting with / (i.e. every request ever)=> therefore defined last, like default case
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "shop.html"));
    //path join -> detects the os and builds path accordingly
})

module.exports = router