const express = require('express');
const http = require('http');

const app = express();
const clientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));
const server = http.createServer(app);

let user =[];

server.listen(8080, () =>{
    console.log("server running on "+8080);
 });

 const io = require('socket.io')(server);

var counter = 1;
 io.on('connection', (socket) => {
   console.log(Array.from(io.sockets.sockets.keys()));
    console.log(counter+' someone connected');
    counter += 1 ;

    socket.on('sendToAll', (message) =>{
        io.emit("displayMessage", (message));
    });

    socket.on('sendToMe', (message) =>{
        socket.emit("displayMessage", (message)); 
    });
    
});


