const mobile = document.getElementById('mobile');
const close = document.getElementById('close');
const nav = document.querySelector('.nav');

mobile.addEventListener('click', () => {
nav.classList.toggle('active');
});

close.addEventListener('click', () => {
nav.classList.remove('active');
});