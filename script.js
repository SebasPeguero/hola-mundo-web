let count = 0;
const counterBtn = document.getElementById('counterBtn');
const clickCount = document.getElementById('clickCount');
const feedbackText = document.getElementById('feedbackText');
const themeToggle = document.getElementById('themeToggle');
const liveClock = document.getElementById('liveClock');

const greetings = [
  "¡Bienvenido al despliegue continuo!",
  "¡El servidor en la nube respondió al instante!",
  "¡Integración exitosa con GitHub Pages!",
  "¡Excelente trabajo en Electiva II!",
  "¡Despliegue automático sin esfuerzo!"
];

counterBtn.addEventListener('click', () => {
  count++;
  clickCount.textContent = count;
  const randomGreeting = greetings[count % greetings.length];
  feedbackText.textContent = randomGreeting;
  
  counterBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    counterBtn.style.transform = '';
  }, 100);
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

function updateClock() {
  const now = new Date();
  liveClock.textContent = "Hora local del cliente: " + now.toLocaleTimeString() + " (" + now.toLocaleDateString() + ")";
}
setInterval(updateClock, 1000);
updateClock();
