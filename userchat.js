// Toggle chat visibility

const liveChatBtn = document.getElementById('liveChatBtn');

const liveChatSection = document.getElementById('liveChatSection');

const userMessages = document.getElementById('userMessages');

const sendChatBtn = document.getElementById('sendChatBtn');

const chatInput = document.getElementById('chatInput');

// Show/Hide Chatbox

liveChatBtn.addEventListener('click', () => {

    liveChatSection.classList.toggle('hidden');

});

// Handle sending messages

sendChatBtn.addEventListener('click', () => {

    const message = chatInput.value.trim();

    if (message) {

        displayMessage('User', message);

        saveMessage('User', message);

        chatInput.value = '';

    }

});

// Display the message in the chatbox

function displayMessage(sender, message) {

    const messageElement = document.createElement('p');

    messageElement.textContent = `${sender}: ${message}`;

    userMessages.appendChild(messageElement);

}

// Save messages to localStorage

function saveMessage(sender, message) {

    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    messages.push({ sender, message });

    localStorage.setItem('chatMessages', JSON.stringify(messages));

}

// Load saved messages on page load

window.addEventListener('load', () => {

    const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    savedMessages.forEach(msg => {

        displayMessage(msg.sender, msg.message);

    });

});