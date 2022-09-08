const express = require('express')
const app = express()
const router = express.Router()

// '/' includes all paths starting with / (i.e. every request ever)=> therefore defined last, like default case
router.get('/', (req, res, next) => {
    res.send('<html><h1> Heyyy </h1> </html>')
})

module.exports = router