const pending = document.getElementById('screenPending');
const confirmed = document.getElementById('screenConfirmed');
const counter = document.getElementById('stepCounter');
const progress = document.getElementById('progressFill');

function showScreen(number) {
  pending.hidden = number !== 2;
  confirmed.hidden = number !== 3;
  counter.textContent = `${number}/3`;
  progress.style.width = number === 2 ? '67%' : '100%';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('followButton').addEventListener('click', () => showScreen(3));
document.getElementById('backButton').addEventListener('click', () => showScreen(2));

document.querySelectorAll('.explain-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const explanation = button.nextElementSibling;
    explanation.hidden = !explanation.hidden;
    button.setAttribute('aria-expanded', String(!explanation.hidden));
  });
});
showScreen(2);
