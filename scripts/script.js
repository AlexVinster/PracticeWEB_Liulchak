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
