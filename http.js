const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('welcome to our homepage')
        return
    }
    if (req.url === '/about') {
        res.end('know more about us')
        return
    }
    res.end(`<h1>Error</h1>
        <p> this page doesnt exist</p>
        <a href='/'>homepage</a>
        `)

})

server.listen(5000)