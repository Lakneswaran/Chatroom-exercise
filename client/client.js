let socket = io.connect();

var bSendToMe = document.getElementById("btnSendToMe");

var bSendToAll = document.getElementById("btnSendToAll");

var target = document.getElementById("target");
bSendToMe.addEventListener('click', sendToMe);
bSendToAll.addEventListener('click', sendToAll);

// bSendToMe.addEventListener('click', () => {

// });

var message = document.querySelector('#message');


function sendToMe(){

    // const message = document.querySelector('#message').value;
    socket.emit('sendToMe', (message.value));

 }

function sendToAll(){
    socket.emit('sendToAll', (message.value));
    console.log(message);
    
}



socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>'+message;
    console.log(message);
});


