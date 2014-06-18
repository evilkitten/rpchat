function sendMessage(event) {
  event.preventDefault();// Prevent screen refresh on submission
  var message    = document.getElementById('message');
  var messageLog = document.getElementById('message-log');
  messageLog.innerHTML += '<p>' + message.value + '</p>';//Append the message log with the new message in another paragraph
  message.value='';//Clear the entry box ready for next message
}

var socket = io();
var chatForm = document.getElementById('chat-form');
chatForm.addEventListener('submit', sendMessage);