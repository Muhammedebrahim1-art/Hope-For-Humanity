const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const form = document.querySelector('#contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const reason = document.querySelector('#reason').value;
  const message = document.querySelector('#message').value.trim();
  const subject = encodeURIComponent(`Hope for Humanity enquiry: ${reason}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nReason: ${reason}\n\n${message}`);
  window.location.href = `mailto:hopeforhumanity@mail.com?subject=${subject}&body=${body}`;
  document.querySelector('#formMessage').textContent = 'Opening your email app to send the enquiry…';
});
