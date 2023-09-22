// Отримайте посилання на бургер-меню, меню та кнопку "Закрити"
const burgerMenu = document.querySelector('.mobile-burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-button');

// Додайте обробники подій для відкриття та закриття меню
burgerMenu.addEventListener('click', () => {
    mobileMenu.style.right = '0px'; // Відкрити меню
});

closeButton.addEventListener('click', () => {
    mobileMenu.style.right = '-300px'; // Закрити меню
});


// anim section

// JavaScript
const up = document.querySelectorAll('.animation-up');
const left = document.querySelectorAll('.animation-left');

function checkUp() {
  up.forEach((element) => {
    const sectionTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight / 2) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

function checkLeft() {
  left.forEach((element) => {
    const sectionTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight / 2) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkUp);
window.addEventListener('scroll', checkLeft);

checkUp();
checkLeft();
