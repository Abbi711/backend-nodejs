const fs = require('fs');

const requestHandler = (req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head> <title> Form page </title> </head>');
        res.write(`<body><form action="/message" method = "POST"> <input type = "text" name="message"> 
        <button type="submit"> Submit </button> </input> </form></body>`);
        return res.end()
    }

    if(req.url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        });

        return req.on('end', () => {
            let parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            let message = parsedBody.split('=')[1];
            // fs.writeFileSync('message.txt', message);
            fs.writeFile('message.text', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end()
            })
        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head> <title> My first page </title> </head>');
    res.write('<body> heyy </body>')
    res.write('</html>');
    res.end();
    // process.exit();
}

module.exports = {
    handler: requestHandler,
    someRandomText: 'demotext'
};

// exports.handler = requestHandler;
// exports.someRandomText = 'demotext'