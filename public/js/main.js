function sendMessage(event) {
  event.preventDefault();// Prevent screen refresh on submission
  var message = document.getElementById('message');
  socket.emit(message.value);  
  message.value = '';//Clear the entry box ready for next message
}

function receiveMessage(messageText) {
  var messageLog = document.getElementById('message-log');
  messageLog.innerHTML += '<p>' + messageText + '</p>';//Append the message log with the incoming message in another paragraph
}

var socket = io();
socket.on('message', receiveMessage);

var chatForm = document.getElementById('chat-form');
chatForm.addEventListener('submit', sendMessage);