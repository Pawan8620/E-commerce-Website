const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',()=>{
        event.preventDefault();
        nav.classList.add('active');
    })
}  

if (close) {
    close.addEventListener('click',()=>{
        event.preventDefault();
        nav.classList.remove('active');
    })
}  