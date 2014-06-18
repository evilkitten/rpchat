function sendMessage(event) {
  event.preventDefault();
  var message    = document.getElementById('message');
  var messageLog = document.getElementById('message-log');
  messageLog.innerHTML += '<p>' + message.value + '</p>';
}

var chatForm = document.getElementById('chat-form');
chatForm.addEventListener('submit', sendMessage);
