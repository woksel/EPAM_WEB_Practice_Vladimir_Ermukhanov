import "@styles/style.sass";

function main() {
    addListener('.menu', 'click', onMenuItemClick);
}

function onMenuItemClick(e) {
    const target = e.target;

    if (!target.classList.contains('menu__item')) return;

    const other = target.parentElement.children;
    const content = document.querySelector('.content__text');

    [].forEach.call(other, i => i.classList.remove('active'));

    target.classList.add('active');
    content.innerHTML = `Active: ${target.getAttribute('mode')}`;

}

function addListener(el, t, cb) {
    const current = typeof el === 'string' ? document.querySelector(el) : el

    current.addEventListener(t, cb);
}

window.onload = main;