const fs = require('fs')
const http = require('http');
const routes = require('./junkroutes.js')

fs.writeFileSync('hello.txt', `Hyy there !`)

const server = http.createServer(routes.handler)
server.listen(3000);
