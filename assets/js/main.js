const swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    const userMessages = document.getElementById('userMessages');

    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message');
    userMessage.innerHTML = `<p><strong>Você:</strong> ${userInput}</p>`;
    userMessages.appendChild(userMessage);

    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('chat-message');
        botMessage.innerHTML = `<p><strong>Chatbot:</strong> Obrigado por sua mensagem. Estamos verificando e responderemos em breve.</p>`;
        userMessages.appendChild(botMessage);
    }, 1000);

    document.getElementById('userInput').value = '';
}
