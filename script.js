const bar = document.getElementById('bar');
console.log(bar)
const close = document.getElementById('close');
console.log(close)
const nav = document.getElementById('navbar');
console.log(nav)

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('open');
        console.log(nav)
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('open');
        console.log(nav)
    })
}


// const burgerMenuButton = document.querySelector('.burger-menu-button')
// const burgerMenuButtonIcon = document.querySelector('.burger-menu-button i')
// const burgerMenu = document.querySelector('.burger-menu')
// console.log(burgerMenu)

// burgerMenuButton.onclick = function(){
//     burgerMenu.classList.toggle('open') 
//     const isOpen = burgerMenu.classList.contains('open')
//     burgerMenuButtonIcon.classList = isOpen ? 'far fa-times' : 'fas fa-outdent'
// }