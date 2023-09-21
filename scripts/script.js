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


// Імпорт бібліотеки Waypoints (припустимо, що ви вже її підключили)

// Створюємо функцію для запуску анімації
function animateSection() {
    // Додаємо клас "visible" до секції
    const browseCategoriesSection = document.querySelector('.browse-categories');
    browseCategoriesSection.classList.add('visible');
  }
  
  // Відслідковуємо прокрутку до секції .browse-categories
  const waypoint = new Waypoint({
    element: document.querySelector('.browse-categories'),
    handler: animateSection, // Викликаємо функцію при досягненні секції
    offset: '80%', // Визначаємо відстань від верху екрану, коли анімація повинна запуститися (можете змінити за своїми потребами)
    context: window, // Вказуємо контекст (вікно прокрутки)
    continuous: false, // Запускати анімацію лише один раз
  });



  const section = document.querySelector('.section-animation');

window.addEventListener('scroll', () => {
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight / 2) {
    section.classList.add('active');
  }
});
