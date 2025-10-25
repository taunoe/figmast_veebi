// 25.10.2025
//console.log('---> Script loaded!');

const btn_hamburger = document.querySelector('.hamburger');
const menu_panel = document.querySelector('.menu-panel');
const menu_links = document.querySelectorAll('.menu-panel a');
const frame_image = document.querySelector('#frame');
const images = [
    '297826037_364284792540094_961934523723556307_n.jpg',
    '475968454_1312870226530873_7158259608819330029_n.jpeg'
];

let current_img_index = 0;

// Vaheta pilte
frame_image.addEventListener('click', ()=> {
    current_img_index++;
    if (current_img_index >= images.length) {
        current_img_index = 0;
    }
    frame_image.src = "img/" + images[current_img_index];
});

// Näita menüüd
btn_hamburger.addEventListener('click', ()=> {
    menu_panel.classList.toggle('active');
});

// Väljaspool menüüd klikkides
document.addEventListener('click', (event)=> {
    if(!menu_panel.contains(event.target) && !btn_hamburger.contains(event.target)) {
        menu_panel.classList.remove('active');
    }
});

// Menüü lingile klikides
menu_links.forEach((link)=> {
    link.addEventListener('click', ()=> {
        menu_panel.classList.remove('active');
    });
});



