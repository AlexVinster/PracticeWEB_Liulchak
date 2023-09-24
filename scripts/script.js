// Отримати посилання на бургер-меню, меню та кнопку "Закрити"
const burgerMenu = document.querySelector('.mobile-burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-button');

// Отримати посилання на основний контент
const mainContent = document.querySelector('.wrapper');

// Додайте обробники подій для відкриття та закриття меню
burgerMenu.addEventListener('click', () => {
  mobileMenu.style.right = '0px'; // Відкрити меню
  mainContent.style.filter = 'blur(5px)'; // Додайте блюр до основного контенту
  mainContent.style.pointerEvents = 'none'; // Заблокуйте взаємодію з основним контентом
  document.body.style.overflow = 'hidden'; // Забороніть скролінг сторінки
});

closeButton.addEventListener('click', () => {
  mobileMenu.style.right = '-300px'; // Закрити меню
  mainContent.style.filter = 'none'; // Зняти блюр з основного контенту
  mainContent.style.pointerEvents = 'auto'; // Дозволити взаємодію з основним контентом
  document.body.style.overflow = 'auto'; // Дозволити скролінг сторінки
});

// Анімація

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

// Функція для визначення інформації про операційну систему
function getOSInfo(userAgent) {
  const os = {
    Windows: /Windows NT (\d+\.\d+)/i,
    macOS: /Mac OS X (\d+[_\.\d]+)/i,
    Linux: /Linux/i,
    Android: /Android (\d+\.\d+)/i,
    iOS: /OS (\d+[._\d+]*) like Mac OS X/i,
  };

  for (const platform in os) {
    if (os[platform].test(userAgent)) {
      let osVersion = '';
      if (platform === 'Windows') {
        osVersion = userAgent.match(/Windows NT (\d+\.\d+)/i)[1];
      } else if (platform === 'macOS') {
        osVersion = userAgent.match(/Mac OS X (\d+[_\.\d]+)/i)[1].replace(/_/g, '.');
      } else if (platform === 'Android') {
        // Визначення Android
        osVersion = `Android ${userAgent.match(/Android (\d+\.\d+)/i)[1]}`;
        return `<span style="color: ${osVersion === 'Android 11.0' ? 'red' : 'green'}">${platform} ${osVersion}</span>`;
      } else if (platform === 'iOS') {
        osVersion = `iOS ${userAgent.match(/OS (\d+[._\d+]*) like Mac OS X/i)[1]}`;
      }
      return `<span style="color: ${osVersion === 'Windows 10' ? 'red' : 'green'}">${platform} ${osVersion}</span>`;
    }
  }
  return 'Невідома ОС';
}

// Отримати інформацію про браузер та операційну систему користувача
const userAgent = navigator.userAgent;
const browserInfo = getBrowserInfo(userAgent);
const osInfo = getOSInfo(userAgent);

// Функція для визначення інформації про браузер
function getBrowserInfo(userAgent) {
  const browsers = {
    Chrome: /Chrome/i,
    Firefox: /Firefox/i,
    Edge: /Edg/i,
    Safari: /Safari/i,
    Opera: /Opera|OPR/i,
    IE: /Trident|MSIE/i,
  };

  for (const browser in browsers) {
    if (browsers[browser].test(userAgent)) {
      const version = userAgent.match(/(?:Chrome|Firefox|Edge|Safari|Opera|IE)\/([\d.]+)/i);
      return `<span style="color: ${browser === 'Chrome' && version && version[1] === '117.0.0.0' ? 'green' : 'red'}">${browser} ${version ? version[1] : ''}</span>`;
    }
  }
  return 'Невідомий браузер';
}

// Отримати елемент, де буде виведене повідомлення
const messageElement = document.getElementById('message');

// Вивести повідомлення
messageElement.innerHTML = `
  Ваш Браузер: ${browserInfo} на базі ${osInfo}.<br>
  Рекомендований браузер: <span style="color: ${browserInfo.includes('red') && osInfo.includes('red') ? 'red' : 'green'}">Chrome 117.0.0.0</span> на базі ОС <span style="color: ${browserInfo.includes('red') && osInfo.includes('red') ? 'red' : 'green'}>"Windows 10/Android</span>.<br>
  Тестування на інших платформах не проводилось і розробник не несе відповідальності за коректне відображення вмісту на інших конфігураціях. Сайт знаходиться в бета-версії та в подальшій оптимізації. Дякую!
`;

// Показати вікно при завантаженні сторінки
const overlay = document.getElementById('overlay');
overlay.style.display = 'flex';

// Закриття вікна при натисканні на кнопку "Закрити"
const close = document.getElementById('close');
close.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Закриття вікна при кліку на зовнішній overlay
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});
