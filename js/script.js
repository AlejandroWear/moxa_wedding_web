// // Основная функция инициализации
// function initApp() {
//     initCountdown();
//     initMorphEffects();
//     initBackgroundSlider();
//     initLocationBackgroundSlider();
//     initGallery();
// }

// // Обратный отсчёт
// function initCountdown() {
//     function updateCountdown() {
//         const weddingDate = new Date('2025-09-14T16:00:00').getTime();
//         const now = Date.now();
//         const distance = weddingDate - now;

//         if (distance > 0) {
//             const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
//             const minutes = Math.floor((distance / (1000 * 60)) % 60);
//             const seconds = Math.floor((distance / 1000) % 60);

//             document.getElementById('days').textContent = days.toString().padStart(2, '0');
//             document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
//             document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
//             document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
//         } else {
//             // Если дата прошла
//             document.getElementById('days').textContent = '00';
//             document.getElementById('hours').textContent = '00';
//             document.getElementById('minutes').textContent = '00';
//             document.getElementById('seconds').textContent = '00';
//         }
//     }

//     setInterval(updateCountdown, 1000);
//     updateCountdown();
// }

// // Смена фоновых изображений для обратного отсчета
// // Смена фоновых изображений для обратного отсчета с плавным переходом
// function initBackgroundSlider() {
//     const countdownSection = document.querySelector('.countdown-section');
//     const backgrounds = [
//         'images/countdown-bg1.jpg',
//         'images/countdown-bg2.jpg',
//         'images/countdown-bg3.jpg',
//         'images/countdown-bg4.jpg',
//         'images/countdown-bg5.jpg'
//     ];

//     let currentBgIndex = 0;

//     // Создаём отдельный слой для плавной смены
//     const bgLayer = document.createElement('div');
//     bgLayer.className = 'bg-layer';
//     countdownSection.appendChild(bgLayer);

//     // Начальное изображение
//     bgLayer.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${backgrounds[currentBgIndex]}')`;

//     function changeBackground() {
//         currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
//         const nextBg = backgrounds[currentBgIndex];

//         // Добавляем плавный переход
//         bgLayer.style.opacity = 0;
//         setTimeout(() => {
//             bgLayer.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${nextBg}')`;
//             bgLayer.style.opacity = 1;
//         }, 500); // задержка под fade-out
//     }

//     setInterval(changeBackground, 7000);
// }
// // ----------------------------------------------------------------------
// // Смена фоновых изображений для секции локации
// function initLocationBackgroundSlider() {
//     const locationSection = document.querySelector('.location-section');
//     const backgrounds = [
//         'images/location-bg1.jpg',
//         'images/location-bg2.jpg',
//         'images/location-bg3.jpg',
//         'images/location-bg4.jpg',
//         'images/location-bg5.jpg'
//     ];
    
//     let currentLocationBgIndex = 0;
    
//     function changeLocationBackground() {
//         currentLocationBgIndex = (currentLocationBgIndex + 1) % backgrounds.length;
//         const nextBg = backgrounds[currentLocationBgIndex];
        
//         locationSection.style.backgroundImage = `linear-gradient(135deg, rgba(255,248,240,0.9) 0%, rgba(255,255,255,0.9) 100%), url('${nextBg}')`;
//         locationSection.style.backgroundSize = 'cover';
//         locationSection.style.backgroundPosition = 'center';
//     }
    
//     // Меняем фон каждые 5 секунд
//     setInterval(changeLocationBackground, 5000);
// }

// // Инициализация галереи
// function initGallery() {
//     const images = [
//         'images/venue-1.jpg',
//         'images/venue-2.jpg',
//         'images/venue-3.jpg',
//         'images/venue-4.jpg',
//         'images/venue-5.jpg',
//         'images/venue-6.jpg'
//     ];
    
//     window.galleryImages = images;
//     window.currentImageIndex = 0;
// }

// // Открытие галереи
// function openGallery(index) {
//     const modal = document.getElementById('galleryModal');
//     const modalImage = document.getElementById('modalImage');
//     const currentImageSpan = document.getElementById('currentImage');
//     const totalImagesSpan = document.getElementById('totalImages');
    
//     window.currentImageIndex = index;
//     modalImage.src = window.galleryImages[index];
//     currentImageSpan.textContent = index + 1;
//     totalImagesSpan.textContent = window.galleryImages.length;
    
//     modal.classList.add('active');
//     document.body.style.overflow = 'hidden';
// }

// // Закрытие галереи
// function closeGallery() {
//     const modal = document.getElementById('galleryModal');
//     modal.classList.remove('active');
//     document.body.style.overflow = 'auto';
// }

// // Смена изображения в галерее
// function changeImage(direction) {
//     window.currentImageIndex += direction;
    
//     if (window.currentImageIndex < 0) {
//         window.currentImageIndex = window.galleryImages.length - 1;
//     } else if (window.currentImageIndex >= window.galleryImages.length) {
//         window.currentImageIndex = 0;
//     }
    
//     const modalImage = document.getElementById('modalImage');
//     const currentImageSpan = document.getElementById('currentImage');
    
//     modalImage.src = window.galleryImages[window.currentImageIndex];
//     currentImageSpan.textContent = window.currentImageIndex + 1;
// }

// // Открыть направления (карта)
// function openDirections() {
//     const address = encodeURIComponent('Krokus Park Resort, Ташкентская область, Бостандыкский район, п. Юсуфхона');
    
//     // Проверяем, мобильное ли это устройство
//     const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
//     if (isMobile) {
//         // Для мобильных устройств предлагаем разные варианты карт
//         const userChoice = confirm('Открыть в Google Maps?\n\nНажмите "OK" для Google Maps или "Отмена" для Яндекс.Карт');
        
//         if (userChoice) {
//             window.open(`https://maps.google.com/maps?q=${address}`, '_blank');
//         } else {
//             window.open(`https://yandex.ru/maps/?text=${address}`, '_blank');
//         }
//     } else {
//         // Для десктопа открываем Google Maps
//         window.open(`https://maps.google.com/maps?q=${address}`, '_blank');
//     }
    
//     showNotification('Открываем карту...');
// }

// // Morph эффекты для контактов
// function initMorphEffects() {
//     const morphCards = document.querySelectorAll('.contact-card, .action-btn');
    
//     morphCards.forEach((card, index) => {
//         // Задержка для последовательной анимации
//         setTimeout(() => {
//             card.style.opacity = '1';
//             card.style.transform = 'translateY(0)';
//         }, index * 200);
        
//         // Анимация при наведении
//         card.addEventListener('mouseenter', () => {
//             if (card.classList.contains('contact-card')) {
//                 card.style.transform = 'translateY(-8px) scale(1.02)';
//             }
//         });
        
//         card.addEventListener('mouseleave', () => {
//             if (card.classList.contains('contact-card')) {
//                 card.style.transform = 'translateY(0) scale(1)';
//             }
//         });
//     });
// }

// // Добавить в календарь
// function addToCalendar() {
//     const start = '20250914T160000';
//     const end = '20250914T220000';
//     const ics = `BEGIN:VCALENDAR
// VERSION:2.0
// BEGIN:VEVENT
// DTSTART:${start}
// DTEND:${end}
// SUMMARY:Свадьба Отабека и Мохигуль
// DESCRIPTION:Свадебная церемония и банкет
// LOCATION:Krokus Park Resort, Ташкентская область, Бостандыкский район, п. Юсуфхона
// END:VEVENT
// END:VCALENDAR`;

//     const blob = new Blob([ics], { type: 'text/calendar' });
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'wedding.ics';
//     link.click();
//     URL.revokeObjectURL(link.href);
    
//     showNotification('Добавлено в календарь!');
// }

// // Поделиться в соцсетях
// function shareOnSocial(platform) {
//     const url = encodeURIComponent(window.location.href);
//     const text = encodeURIComponent('Приглашение на свадьбу Отабека и Мохигуль - 14 сентября 2025');
    
//     const links = {
//         telegram: `https://t.me/share/url?url=${url}&text=${text}`,
//         whatsapp: `https://wa.me/?text=${text}%20${url}`,
//         facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
//         vk: `https://vk.com/share.php?url=${url}&title=${text}`
//     };
    
//     if (links[platform]) {
//         window.open(links[platform], '_blank', 'width=600,height=400');
//         showNotification('Делимся приглашением...');
//     }
// }

// // Позвонить
// function callPhone(phone) {
//     window.location.href = `tel:${phone}`;
//     showNotification('Открываем телефон...');
// }

// // Уведомления
// function showNotification(message) {
//     const notification = document.createElement('div');
//     notification.className = 'notification';
//     notification.innerHTML = `
//         <div class="notification-content">
//             <span>${message}</span>
//         </div>
//     `;
    
//     document.body.appendChild(notification);
    
//     setTimeout(() => {
//         notification.classList.add('show');
//     }, 100);
    
//     setTimeout(() => {
//         notification.classList.remove('show');
//         setTimeout(() => {
//             notification.remove();
//         }, 300);
//     }, 3000);
// }

// // Обработка клавиш для галереи
// document.addEventListener('keydown', function(e) {
//     const modal = document.getElementById('galleryModal');
//     if (modal && modal.classList.contains('active')) {
//         if (e.key === 'Escape') {
//             closeGallery();
//         } else if (e.key === 'ArrowLeft') {
//             changeImage(-1);
//         } else if (e.key === 'ArrowRight') {
//             changeImage(1);
//         }
//     }
// });

// // Закрытие галереи при клике вне изображения
// document.addEventListener('click', function(e) {
//     const modal = document.getElementById('galleryModal');
//     if (e.target === modal) {
//         closeGallery();
//     }
// });

// // Стили для уведомлений и анимаций (добавить в CSS)
// const notificationStyles = document.createElement('style');
// notificationStyles.textContent = `
// .notification {
//     position: fixed;
//     top: 20px;
//     right: 20px;
//     z-index: 1001;
//     opacity: 0;
//     transform: translateX(100%);
//     transition: all 0.3s ease;
// }

// .notification.show {
//     opacity: 1;
//     transform: translateX(0);
// }

// .notification-content {
//     background: rgba(255, 255, 255, 0.95);
//     color: #333;
//     padding: 15px 25px;
//     border-radius: 10px;
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//     font-weight: 600;
//     border-left: 4px solid #ff6b6b;
// }

// /* Начальные стили для анимации появления */
// .contact-card, .action-btn {
//     opacity: 0;
//     transform: translateY(30px);
//     transition: all 0.6s ease;
// }

// /* Дополнительные стили для мобильных уведомлений */
// @media (max-width: 768px) {
//     .notification {
//         top: 10px;
//         right: 10px;
//         left: 10px;
//         transform: translateY(-100%);
//     }
    
//     .notification.show {
//         transform: translateY(0);
//     }
    
//     .notification-content {
//         padding: 12px 20px;
//         font-size: 0.95rem;
//         text-align: center;
//     }
// }

// /* Улучшенная анимация для галереи */
// .gallery-modal {
//     backdrop-filter: blur(5px);
// }

// .modal-image {
//     transition: opacity 0.3s ease;
// }

// /* Индикаторы загрузки */
// .loading {
//     opacity: 0.7;
// }

// /* Плавные переходы для фоновых изображений */
// .countdown-section, .location-section {
//     background-attachment: fixed;
// }

// @media (max-width: 768px) {
//     .countdown-section, .location-section {
//         background-attachment: scroll;
//     }
// }
// `;
// document.head.appendChild(notificationStyles);

// // Запуск приложения
// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', initApp);
// } else {
//     initApp();
// }

// // Дополнительные обработчики для улучшения UX
// window.addEventListener('load', function() {
//     // Предзагрузка изображений для плавной смены фона
//     const countdownBgs = [
//         'images/countdown-bg1.jpg',
//         'images/countdown-bg2.jpg',
//         'images/countdown-bg3.jpg',
//         'images/countdown-bg4.jpg',
//         'images/countdown-bg5.jpg'
//     ];
    
//     const locationBgs = [
//         'images/location-bg1.jpg',
//         'images/location-bg2.jpg',
//         'images/location-bg3.jpg',
//         'images/location-bg4.jpg',
//         'images/location-bg5.jpg'
//     ];
    
//     // Предзагружаем изображения
//     [...countdownBgs, ...locationBgs].forEach(src => {
//         const img = new Image();
//         img.src = src;
//     });
    
//     showNotification('✨ Добро пожаловать на нашу свадьбу!');
// });

// console.log('✨ Свадебный сайт загружен и готов к работе!');













// Основная функция инициализации
function initApp() {
    initCountdown();
    initMorphEffects();
    // initBackgroundSlider();         // ❌ отключено
    // initLocationBackgroundSlider(); // ❌ отключено
    initGallery();
}

// Обратный отсчёт
function initCountdown() {
    function updateCountdown() {
        const weddingDate = new Date('2025-09-14T16:00:00').getTime();
        const now = Date.now();
        const distance = weddingDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

/* ---------------------------------------------------------
   ❌ Убрали слайдер фоновых картинок (просто белый фон)
--------------------------------------------------------- */

// function initBackgroundSlider() { ... }   // закомментировано
// function initLocationBackgroundSlider() { ... } // закомментировано

// Инициализация галереи
function initGallery() {
    const images = [
        'images/venue-1.jpg',
        'images/venue-2.jpg',
        'images/venue-3.jpg',
        'images/venue-4.jpg',
        'images/venue-5.jpg',
        'images/venue-6.jpg'
    ];
    
    window.galleryImages = images;
    window.currentImageIndex = 0;
}

// Остальной код (галерея, уведомления, кнопки, эффекты и т.д.) оставляем как есть
// ------------------------------------------------------------
// ... (твоя логика галереи, addToCalendar, shareOnSocial, showNotification и т.п.)
// ------------------------------------------------------------

// Запуск приложения
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Дополнительные обработчики для UX
window.addEventListener('load', function() {
    // ❌ отключаем предзагрузку картинок для фона
    // const countdownBgs = [...];
    // const locationBgs = [...];
    // [...countdownBgs, ...locationBgs].forEach(src => {
    //     const img = new Image();
    //     img.src = src;
    // });

    showNotification('✨ Добро пожаловать на нашу свадьбу!');
});

console.log('✨ Свадебный сайт загружен и готов к работе!');




// Функция для открытия карт с направлениями к месту проведения свадьбы
function openDirections() {
    // Координаты и адрес Krokus Park Resort
    const venue = {
        name: "Krokus Park Resort",
        address: "Ташкентская область, Бостандыкский район, п. Юсуфхона",
        lat: 41.616862,
        lng: 70.038791
    };
    
    // Определяем устройство пользователя
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Для iOS устройств
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Apple Maps для iOS
        const appleMapsUrl = `https://maps.apple.com/?address=${encodeURIComponent(venue.address)}&ll=${venue.lat},${venue.lng}&q=${encodeURIComponent(venue.name)}&t=m`;
        window.open(appleMapsUrl, '_blank');
    }
    // Для Android устройств
    else if (/android/i.test(userAgent)) {
        // Google Maps для Android
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${venue.lat},${venue.lng}&travelmode=driving`;
        window.open(googleMapsUrl, '_blank');
    }
    // Для десктопа и других устройств
    else {
        // Универсальная Google Maps ссылка
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venue.name)},${encodeURIComponent(venue.address)}&travelmode=driving`;
        window.open(googleMapsUrl, '_blank');
    }
}