let current = document.querySelector('#current');
let imgs = document.querySelectorAll('.imgs img');
let opacity = 0.5;

imgs.forEach(img => img.addEventListener('click', imgClick));


function imgClick(e) {
//Change clicked image current image
    current.src = e.target.src;

//Change the opacity 
    e.target.style.opacity = opacity;

}





 
 