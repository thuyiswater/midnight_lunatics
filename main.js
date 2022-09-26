const pre_trasaction = require("./BitCoin_PreTransaction");

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

function successCallback(pos) {
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;
    alert("Latitude : " + lat + " Longitude: " + lng);
}
 
const POST = process.env.PORT || 5000;

server.listen(PORT, ()=>console.log(`erver running on port ${PORT}`))
