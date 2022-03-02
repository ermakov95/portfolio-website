const sliderInner = document.querySelector('.slider-inner');
const sliderLine = document.querySelector('.slider-line');
const slide = document.querySelector('.slide')

const sliderInnerWeight = () => {
    return sliderInner.offsetWidth
}
const slideWeight = () => {
    return slide.offsetWidth
}
const countSlide = sliderLine.querySelectorAll('.slide').length;
let index = 1;

document.querySelector('.slider-next').addEventListener('click', function(){
    index++
    if (slideWeight() > sliderInnerWeight() / 2) {
        if (index > countSlide) {index = 1} 
    } else {
        if (index > countSlide - 1) {index = 1} 
    }
    sliderLine.style.left = -((index-1)*slideWeight()) + 'px';
});

document.querySelector('.slider-back').addEventListener('click', function(){
    index--
    if (slideWeight() > sliderInnerWeight() / 2) {
        if (index <= 0) {index = countSlide} 
    } else {
        if (index <= 0) {index = countSlide - 1} 
    }
    sliderLine.style.left = -((index-1)*slideWeight()) + 'px';
});

document.querySelector('.slider-line').addEventListener('click', (event) => {
    event.path[0].classList.toggle('slide-opened')
})