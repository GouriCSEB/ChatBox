const startPage = document.getElementById('startPage');
const chatContainer = document.querySelector('.chatroom-container');
const startButton = document.getElementById('startButton');
const chatArea = document.getElementById('chatArea');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Track whose turn it is to type
let currentUser = 'You'; // Could be 'You' and 'Friend'

// Start chat button functionality
startButton.addEventListener('click', () => {
    startPage.style.display = 'none';
    chatContainer.style.display = 'flex';
    messageInput.focus();
    
   
});

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    
    if (sender === 'You') {
        messageElement.classList.add('user-message');
        messageElement.textContent = text;
    } else {
        messageElement.textContent = `${sender}: ${text}`;
    }
    
    chatArea.appendChild(messageElement);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        addMessage('You', message);
        messageInput.value = '';
        
        // In a real app, here you would send the message to your friend
        // For now, it just waits for the friend to type something
        messageInput.placeholder = "Friend is typing...";
        messageInput.disabled = true;
        
        // Simulate waiting for friend to respond
        setTimeout(() => {
            messageInput.placeholder = "Type your message...";
            messageInput.disabled = false;
            messageInput.focus();
        }, 2000);
    }
}

// Event listeners for sending messages
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});