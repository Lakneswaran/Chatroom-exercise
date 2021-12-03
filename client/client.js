

var username = prompt("What is your name");


let socket = io.connect();

var bSendToMe = document.getElementById("btnSendToMe");

var bSendToAll = document.getElementById("btnSendToAll");

var target = document.getElementById("target");
bSendToMe.addEventListener('click', sendToMe);
bSendToAll.addEventListener('click', sendToAll);

// bSendToMe.addEventListener('click', () => {

// });

// var message = document.querySelector('#message');


function sendToMe(){

    // const message = document.querySelector('#message').value;
    socket.emit('sendToMe', {message: message.value, name: username});

 }

function sendToAll(){



    socket.emit('sendToAll', {message: message.value, name: username});

    userList.innerHTML += '<br>'+username;
    
}





socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>'+message.name+ " : "+message.message;
    
    
});


