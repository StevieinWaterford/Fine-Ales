let current = document.querySelector('#current');
let imgs = document.querySelectorAll('.imgs img');
let opacity = 0.4;


imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    current.src = e.target.src;
}








