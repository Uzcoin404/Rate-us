const slider = document.querySelector('.slider input');
const thumb = document.querySelector('.slider .thumb');
const progres = document.querySelector('.slider .progres-bar');
const slideIcon = document.querySelector('#slideIcon');
const rate = document.querySelector('.rate__blog');
const sendBtn = document.querySelector('.send__button');

slider.oninput = ()=>{

    let value = slider.value
    thumb.style.left = value + '%';
    progres.style.width = value + '%';

    if (value < 20) {
        slideIcon.style.marginLeft = '0px';
    }
    if (value >= 20) {
        slideIcon.style.marginLeft = '-20%';
    }
    if (value >= 40) {
        slideIcon.style.marginLeft = '-40%';
    }
    if (value >= 60) {
        slideIcon.style.marginLeft = '-60%';
    }
    if (value >= 80) {
        slideIcon.style.marginLeft = '-80%';
    }
}

sendBtn.addEventListener('click', () => location.reload());