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
const modal = document.querySelector('.modal');
const btn_open_modal = document.querySelector('#btn-open-form');
const btn_cancel = document.querySelector('#reset_email');
const input_name = document.querySelector('#name');
const input_email = document.querySelector('#email');
const input_message = document.querySelector('#message');
const email_form = document.querySelector('#email-form');

let current_img_index = 0;

// Vaheta pilte
frame_image.addEventListener('click', () => {
    current_img_index++;
    if (current_img_index >= images.length) {
        current_img_index = 0;
    }
    frame_image.src = "img/" + images[current_img_index];
});

// Näita menüüd
btn_hamburger.addEventListener('click', () => {
    menu_panel.classList.toggle('active');
});

// Väljaspool menüüd klikkides
document.addEventListener('click', (event) => {
    if (!menu_panel.contains(event.target) && !btn_hamburger.contains(event.target)) {
        menu_panel.classList.remove('active');
    }
});

// Menüü lingile klikides
menu_links.forEach((link) => {
    link.addEventListener('click', () => {
        menu_panel.classList.remove('active');
    });
});

// Mobiili kontakti form kuvamine
btn_open_modal.addEventListener('click', () => {
    modal.style.display = 'block';
    menu_panel.style.display = 'none'; // Muidu ei kuva õieti
})

// Mobiili formi sulgemine
window.onclick = (event) => {
    console.log(event.target)
    if (event.target == modal || event.target == btn_cancel) {
        modal.style.display = 'none';
        menu_panel.style.display = 'block'; // Menüü tagasi
    }
    
}

// Formi andmed salvestamine localstorage
email_form.addEventListener('submit', ()=> {
    const name = input_name.value;
    const email = input_email.value;
    const message = input_message.value;

    // object literal
    const form_data = {
        user_name: name,
        user_email: email,
        user_message: message
    };

    //localStorage.setItem("form_data", JSON.stringify(form_data));
    localStorage.setItem("name", JSON.stringify(form_data.user_name));
    localStorage.setItem("email", JSON.stringify(form_data.user_email));
    localStorage.setItem("message", JSON.stringify(form_data.user_message));
});
