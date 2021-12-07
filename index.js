const fs = require('fs')
const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(req)
    res.end('good Night')
})
server.listen(4000,'127.0.0.1',()=>{
    console.log("Good morning at port 4000")
})