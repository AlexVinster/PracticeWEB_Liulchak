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

const up = document.querySelectorAll('.animation-up');
const left = document.querySelectorAll('.animation-left');

function checkUp() {
  up.forEach((up) => {
    const sectionTop = up.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight / 2) {
      up.classList.add('active');
    } else {
      up.classList.remove('active');
    }
  });
}

function checkLeft() {
    left.forEach((left) => {
      const sectionTop = left.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight / 2) {
        left.classList.add('active');
      } else {
        left.classList.remove('active');
      }
    });
  }

// Додайте обробник події прокрутки
window.addEventListener('scroll', checkUp);
window.addEventListener('scroll', checkLeft);

// Викликати функцію при завантаженні сторінки
checkUp();
checkLeft();
