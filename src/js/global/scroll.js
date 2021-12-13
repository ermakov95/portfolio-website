let oldScroll = (document.scrollingElement || document.documentElement).scrollTop;
let bool = true;

const boolTime = (time) => {
    bool = false
    setTimeout(() => bool = true, time)
}

const smoothScroll = (to, speed) => {
    const element = document.scrollingElement || document.documentElement,
        start = element.scrollTop
        change = to - start,
        startDate = +new Date();
    const easeInOutQuad = (t, b, c, d) => {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };
    const animateScroll = _ => {
        document.body.style.overflow = "hidden"
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, speed));
        if(currentTime < speed) {
            requestAnimationFrame(animateScroll);
        }
        else {
            element.scrollTop = to;
        }
        setTimeout(() => oldScroll = (document.scrollingElement || document.documentElement).scrollTop, speed)
        setTimeout(() => document.body.style.overflow = "", speed)    
    };
    animateScroll();
};

window.addEventListener('scroll', () => {
    if (bool) {
        boolTime(350)
        const newScroll = (document.scrollingElement || document.documentElement).scrollTop;
        const pageHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          ) / 3;
        if (newScroll > oldScroll) {
            if (newScroll <= pageHeight) {
                smoothScroll(document.querySelector('.portfolio').offsetTop, 300)
            } else {
                smoothScroll(document.querySelector('footer').offsetTop, 300)
            }
        } else {
            if (newScroll < pageHeight) {
                smoothScroll(document.querySelector('header').offsetTop, 300)
            } else {
                smoothScroll(document.querySelector('.portfolio').offsetTop, 300)
            }
        }
    }
  });

document.querySelector('#button1').addEventListener('click', () => {
    boolTime(450)
    smoothScroll(document.querySelector('.portfolio').offsetTop, 400)
})
document.querySelector('#button2').addEventListener('click', () => {
    boolTime(450)
    smoothScroll(document.querySelector('header').offsetTop, 400)
})
document.querySelector('#button3').addEventListener('click', () => {
    boolTime(450)
    smoothScroll(document.querySelector('footer').offsetTop, 400)
})
document.querySelector('#button4').addEventListener('click', () => {
    boolTime(450)
    smoothScroll(document.querySelector('.portfolio').offsetTop, 400)
})