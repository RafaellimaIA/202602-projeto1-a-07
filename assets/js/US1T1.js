const responseBox = document.querySelector('#chatResponse');
const messageInput = document.querySelector('#messageInput');
document.querySelectorAll('.faq-button').forEach((button) => {
  button.addEventListener('click', () => {
    responseBox.textContent = button.dataset.answer;
    responseBox.hidden = false;
  });
});
document.querySelector('#messageForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value.trim();
  if (!message) {
    responseBox.textContent = 'Digite uma mensagem antes de enviar.';
    responseBox.hidden = false;
    messageInput.focus();
    return;
  }
  responseBox.textContent = `Mensagem demonstrativa: "${message}". O envio real precisa ser conectado ao atendimento da Bulbe.`;
  responseBox.hidden = false;
  messageInput.value = '';
});
document.querySelector('#closeChat').addEventListener('click', () => {
  const chat = document.querySelector('.chat');
  const closed = chat.hidden;
  chat.hidden = !closed;
  document.querySelector('#closeChat').textContent = closed ? '×' : '+';
  document.querySelector('#closeChat').setAttribute('aria-label', closed ? 'Fechar assistente' : 'Abrir assistente');
});
