const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const body = document.body;
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-links');

const bgList = {
  home: 'var(--bg1)',
  about: 'var(--bg2)',
  skills: 'var(--bg3)',
  contact: 'var(--bg4)'
};

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.target;
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(target).classList.add('active');
    body.style.background = bgList[target];
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();

  // Just show alert and reset form on submit here (you can later replace with AJAX/form submission)
  alert('Thank you for reaching out! Your message has been received.');
  contactForm.reset();
});
const form = document.getElementById('contact-form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    alert('Thank you for reaching out! Your message has been received.');
    form.reset();
  } else {
    alert('Oops! There was a problem submitting your form.');
  }
});

