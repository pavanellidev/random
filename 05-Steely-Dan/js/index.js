import { SlideNav } from './slide.js';

const slide = new SlideNav('.slide', '.wrapper')
slide.init()
slide.addArrow('.prev', '.next')

slide.addControl('.custom-controls')

function showButton() {
  if(window.scrollY <= 150) {
     document.querySelector('.back-top img').style.display = 'none';
  } else {
     document.querySelector('.back-top img').style.display = 'block';
  }
}

window.addEventListener('scroll', showButton);
document.querySelector('.back-top img').addEventListener('click', slide.subirTela)
