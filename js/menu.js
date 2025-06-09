function menuOpen() {
    let icon = document.getElementById('menu-icon') // icon-menu
    let menu = document.getElementById('itens') // nav

    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        icon.className = 'fa-solid fa-bars'
    } else {
        menu.style.display = 'block'
        icon.className = 'fa-solid fa-angle-down'
    }
}

function High() {
    let menu = document.getElementById('itens')

    if (window.innerWidth >= 760) {
        menu.style.display = 'inline'
    } else {
        menu.style.display = 'none'
    }
    if (menu.style.display == 'none') {
        menu.style.display = 'inline'
    }
}