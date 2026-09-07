document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nome = data.get('nome');
  const email = data.get('email');
  const mensagem = data.get('mensagem');
  const subject = encodeURIComponent(`Contato pelo site - ${nome}`);
  const body = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`);
  window.location.href = `mailto:tecbmtecnologia@gmail.com?subject=${subject}&body=${body}`;
  formNote.textContent = 'Abrindo seu aplicativo de e-mail para enviar a mensagem...';
});
