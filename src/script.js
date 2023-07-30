// Variables
const dom_strings = {
    menu_btn: document.getElementById('hamb_btn'),
    close_btn: document.getElementById('close_btn'),
    menu: document.getElementById('menu'),

}

// Functions
const toggleMenu = () => {
    dom_strings.menu.classList.toggle('disabled')
    dom_strings.menu_btn.classList.toggle('disabled')
    dom_strings.close_btn.classList.toggle('disabled')
}

// Event listeners
dom_strings.menu_btn.addEventListener('click', toggleMenu)
dom_strings.close_btn.addEventListener('click', toggleMenu)
