let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const countSlide = 1
const slideWeight = () => {
     return document.querySelector('.slide').offsetWidth
}

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + slideWeight();
    if (offset > slideWeight() * countSlide) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-back').addEventListener('click', function () {
    offset = offset - slideWeight();
    if (offset < 0) {
        offset = slideWeight() * countSlide;
    }
    sliderLine.style.left = -offset + 'px';
});