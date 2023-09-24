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

// Функція для визначення інформації про операційну систему
function getOSInfo(userAgent) {
    const platformInfo = platform.parse(userAgent);
    const osName = platformInfo.os.family;
    const osVersion = platformInfo.os.version;
    return `${osName} ${osVersion}`;
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
            return `${browser} ${version ? version[1] : ''}`;
        }
    }
    return 'Невідомий браузер';
}

// Отримати елемент, де буде виведене повідомлення
const messageElement = document.getElementById('message');

// Вивести повідомлення
messageElement.innerHTML = `
  Ваш Браузер: <span style="color: blue;">${browserInfo}</span> на базі <span style="color: green">${osInfo}</span>.<br>
  Рекомендований браузер: <span style="color: blue;">Google Chrome 117.0.0</span> на базі ОС <span style="color: green;">Windows 10</span>.<br>
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

//PLATFORM JS
const platformInfo = platform.parse(navigator.userAgent);
const osName = platformInfo.os.family; // Назва операційної системи (Android, iOS, тощо)
const osVersion = platformInfo.os.version; // Версія операційної системи

if (osName === 'Android') {
    const androidModel = platformInfo.product; // Модель Android-пристрою
    console.log(`Ваш Android-пристрій: ${androidModel}, версія ${osVersion}`);
} else if (osName === 'iOS') {
    const iosModel = platformInfo.product; // Модель iOS-пристрою
    console.log(`Ваш iOS-пристрій: ${iosModel}, версія ${osVersion}`);
} else {
    console.log(`Ваша операційна система: ${osInfo}`);
}
