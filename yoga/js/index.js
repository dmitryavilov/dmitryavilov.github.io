const slBlocks=document.querySelectorAll(".stock-slider-block");var swiper=new Swiper(".stock-slider-block",{slidesPerView:"auto",slideActiveClass:"stock-slide-active",slideVisibleClass:"stock-slide-duplicate-active",slidesToScroll:1,loop:!0,centeredSlides:!0,initialSlide:1,slideClass:"stock-slide",spaceBetween:30,breakpoints:{710:{spaceBetween:30},400:{spaceBetween:15},320:{spaceBetween:12}}});swiper=new Swiper(".instructors-slider-block",{slidesPerView:"auto",slideActiveClass:"instructors-slide-active",slidesToScroll:1,spaceBetween:5,slideClass:"instructors-slide",pagination:{el:".instructors-pagination",type:"bullets",clickable:!0,bulletClass:"instructors-pagination__bullet",bulletActiveClass:"instructors-pagination__bullet-active",bulletElement:"div"}});function onload(){for(i=0;i<slBlocks.length;i++)slBlocks[i].classList.add("slider-block_optimize")}