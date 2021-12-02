const express = require('express');
const http = require('http');

const app = express();
const clientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));
const server = http.createServer(app);

server.listen(8080, () =>{
    console.log("server running on "+8080);
 });

 const io = require('socket.io')(server);

var counter = 1;
 io.on('connection', (socket) => {
     
    console.log(counter+' someone connected');
    counter += 1 ;
});

