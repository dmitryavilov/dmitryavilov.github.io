import 'jquery'
import 'popper.js'
import '../babel'
import '../sass/style.sass'
import Swiper from 'swiper/bundle'
import WOW from 'wowjs'
const jqueryvalidation = require('jquery-validation');
const jqueryparallax = require('jquery-parallax.js');
// Картинки
import Sprite from '../img/sprite.svg'
import hLogo from '../img/header/logo.svg'
import Search from '../img/header/search.svg'
import gSearch from '../img/header/gsearch.svg'
import MainBg from '../img/main/bg.jpg'
import MainAvatar from '../img/main/mainAvatar.png'
import Ch1 from '../img/chips/ch1.jpg'
import Ch2 from '../img/chips/ch2.jpg'
import Ch3 from '../img/chips/ch3.jpg'
import Ch4 from '../img/chips/ch4.jpg'
import Car from '../img/posts/car.png'
import postAvatar from '../img/posts/postAvatar.png'
import realProject from '../img/posts/popular.jpg'
import computer from '../img/posts/computer.jpg'
import fileIcon from '../img/posts/file.svg'
import salaryBg from '../img/salary/salaryBg.jpg'
import R1 from '../img/rubrics/r1.jpg'
import R2 from '../img/rubrics/r2.jpg'
import R3 from '../img/rubrics/r3.jpg'
import R4 from '../img/rubrics/r4.jpg'
import R5 from '../img/rubrics/r5.jpg'
import R6 from '../img/rubrics/r6.jpg'
import Rm1 from '../img/rubrics/rm1.jpg'
import Rm2 from '../img/rubrics/rm2.jpg'
import Rm3 from '../img/rubrics/rm3.jpg'
import Rm4 from '../img/rubrics/rm4.jpg'
import Rm5 from '../img/rubrics/rm5.jpg'
import Rm6 from '../img/rubrics/rm6.jpg'
import Rm7 from '../img/rubrics/rm7.jpg'
import qustionsBg from '../img/slider/qbg.jpg'
import sliderAvatar from '../img/slider/sliderAvatar.png'
import slide1 from '../img/slider/slide1.jpg'
import aBg from '../img/article-main/arbg.jpg'
import m from '../img/m.svg'
import textAva from '../img/text/textAva.jpg'
import textSlide from '../img/text/textSlide.jpg'
import posSlideAva from '../img/text/sliderAva.jpg'
import Jiraf from '../img/text/jiraf.jpg'
import rev1 from '../img/reviews/rev1.jpg'
import rev2 from '../img/reviews/rev2.jpg'
import rev3 from '../img/reviews/rev3.jpg'
import rev4 from '../img/reviews/rev4.jpg'
import cav1 from '../img/comments/cav1.jpg'
import cav2 from '../img/comments/cav2.jpg'
import cav3 from '../img/comments/cav3.jpg'
import cav4 from '../img/comments/cav4.jpg'
import Shape from '../img/comments/shape.svg'
// Шрифт
import Lato3 from '../fonts/Lato-Regular.woff2'
import Lato4 from '../fonts/Lato-Black.woff2'
import Lato5 from '../fonts/Lato-Semibold.woff2'
import { ready } from 'jquery'


const mobileBtn = document.querySelector('.mobile-button'),
      mobileMenu = document.querySelector('.navigation--mobile'),
      tiles = document.querySelectorAll('.main-information__sidebar-tile'),
      mainContent = document.querySelectorAll('.main-information__info'),
      sidebarBtn = document.querySelector('.main-information__sm-btn'),
      mainSidebar = document.querySelector('.main-information__sidebar'),
      sideClose = document.querySelector('.main-information__mobile-icon'),
      flags = document.querySelectorAll('.rubric__flag-icon'),
      mobileBtnLine = document.querySelectorAll('.mobile-button__line'),
      comments = document.querySelectorAll('.comments-wrapper')[1],
      showBtn = document.querySelector('.comments-load'),
      articleFlag = document.querySelector('.article-main__flag-icon'),
      modalLink = document.querySelectorAll('[data-toggle=modal]'),
      modal = document.querySelector('.modal'),
      modalBg = document.querySelector('.modal__bg'),
      modalClose = document.querySelector('.modal-form__close-btn'),
      topBtn = document.querySelector('.to-top-button');
const articleSlider = new Swiper('.post-slider__container', {
  direction: 'horizontal',
  speed: 450,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: ".post-slider__button--next",
    prevEl: ".post-slider__button--prev",
  }
})
mobileBtn.addEventListener('click', function(){
  this.classList.toggle('mobile-button--active');
  for(let i=0; i<mobileBtnLine.length; i++){
    mobileBtnLine[i].classList.toggle('mobile-button__line--active');
  }
  if(mobileBtn.classList.contains('mobile-button--active')){
    mobileMenu.style.top="64px";
  } else {
    mobileMenu.style.top="-1200px";
  }
});
showBtn.addEventListener('click', function() {
  comments.classList.remove('comments-wrapper--hidden');
  this.style.display="none";
});

articleFlag.addEventListener('click', function() {
  this.classList.toggle('article-main__flag-icon--active');
});


for (let g=0; g<modalLink.length; g++) {
  modalLink[g].addEventListener('click', function(){
    modal.classList.add('modal--active');
    document.querySelector('body').style.overflowY="hidden";
  });
}

modalBg.addEventListener('click', function(){
  modal.classList.remove('modal--active');
  document.querySelector('body').style.overflowY="scroll";
});

modalClose.addEventListener('click', function(){
  modal.classList.remove('modal--active');
  document.querySelector('body').style.overflowY="scroll";
});

function keyPress(event) {
  if (event.keyCode == 27){
    modal.classList.remove('modal--active');
    document.querySelector('body').style.overflowY="scroll";
  }
}

document.addEventListener('keydown', keyPress);

function flagActive(event) {
  let t = event.target;
  t.closest('.rubric__flag-icon').classList.toggle('rubric__flag-icon--active');
}

function toggleSide(){
  mainSidebar.classList.toggle('main-information__sidebar--active');
}

function tabSelected(event){
    tiles.forEach(function(el){
      el.classList.remove('main-information__sidebar-tile--active');
    });
    let t = event.target;
    t.closest('.main-information__sidebar-tile').classList.add('main-information__sidebar-tile--active');
    for (let i=0; i<6; i++) {
      if (tiles[0].classList.contains('main-information__sidebar-tile--active')) {
        mainContent[i].classList.remove('main-information__info--active');
        mainContent[1].classList.add('main-information__info--active');
      }
      else if (tiles[1].classList.contains('main-information__sidebar-tile--active')) {
        mainContent[i].classList.remove('main-information__info--active');
        mainContent[2].classList.add('main-information__info--active');
      }
      else if (tiles[2].classList.contains('main-information__sidebar-tile--active')) {
        mainContent[i].classList.remove('main-information__info--active');
        mainContent[3].classList.add('main-information__info--active');
      }
      else if (tiles[3].classList.contains('main-information__sidebar-tile--active')) {
        mainContent[i].classList.remove('main-information__info--active');
        mainContent[4].classList.add('main-information__info--active');
      }
      else {
        mainContent[i].classList.remove('main-information__info--active');
        mainContent[5].classList.add('main-information__info--active');
      }
    }
};

$(window).scroll(function (event) {
     if($(window).scrollTop() >= 80){
      topBtn.style.right="40px"
     } else {
      topBtn.style.right="-400px"
     }
});
sidebarBtn.addEventListener('click', toggleSide);
sideClose.addEventListener('click', toggleSide);

for (let i=0; i<tiles.length; i++) {
  tiles[i].addEventListener('click', tabSelected);
}

for (let i=0; i<flags.length; i++) {
  flags[i].addEventListener('click', flagActive);
}
var wow = new WOW.WOW({
  live: false
}).init();

const mainSlider = new Swiper('.slider-wrapper', {
  direction: 'horizontal',
  speed: 750,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoScrollOffset: 1,
  pagination: {
    el: '.slider-wrapper__pagination',
    type: 'bullets',
    bulletClass: 'slider-wrapper__pagination-bullet',
    bulletActiveClass: 'slider-wrapper__pagination-bullet--active',
    clickable: true,
    bulletElement: 'div'
  },

})



$('.form').each(function(){
$(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Пожалуйста, введите своё имя",
      minlength: "Минимальное число символов - 2"
    },
    message: {
      required: "Пожалуйста, введите сообщение",
      minlength: "Минимальное число символов - 100"
    },
    email: {
      required: "Пожалуйста, введите свой e-mail",
      email: "Е-mail адрес должнен быть в формате name@domain.com"
    },
    phone:{
      required: 'Please specify your phone number'
    }
  }
  });
});
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate( {
      'scrollTop': $target.offset().top
    }, 400, 'swing', function () {
      window.location.hash = target;
    });
});
$('.mailing-form').validate();