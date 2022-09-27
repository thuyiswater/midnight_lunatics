
const pre_trasaction = require("./backend/BitCoin_PreTransaction");

const http = require("http")
const path = require("path")
const fs = require("fs")
//create server object 
const server = http.createServer((req, res)=> {
    if(req.url === '/api/gps'){
        if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition()
    }
    else{
        
    }
});

const POST = process.env.PORT || 5000;

server.listen(PORT, ()=>console.log(`erver running on port ${PORT}`))