var overlayCl=document.getElementById("overlay1").classList,overlay=document.getElementById("overlay1"),feedback=document.getElementById("fb").classList,body=document.getElementById("header"),fbtn=document.getElementById("f_btn"),var1=document.getElementById("var1").classList,var2=document.getElementById("var2").classList,var3=document.getElementById("var3").classList,vardef1=document.getElementById("var1"),vardef2=document.getElementById("var2"),vardef3=document.getElementById("var3");function overlayOn(){overlayCl.add("overlay1_active"),feedback.add("feedback-form_active")}function overlayClick(){overlayCl.remove("overlay1_active"),feedback.remove("feedback-form_active")}fbtn.addEventListener("click",overlayOn),overlay.addEventListener("click",overlayClick);var swiper=new Swiper(".slider-block",{slidesPerView:3,slidesPerGroup:3,spaceBetween:30,pagination:{el:".projects-pagination",bulletClass:"projects-bullet",bulletActiveClass:"projects-bullet-active",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".projects-prev"},breakpoints:{1200:{slidesPerView:3,slidesPerGroup:3,spaceBetween:30},640:{slidesPerView:2,slidesPerGroup:2},320:{slidesPerView:1,slidesPerGroup:1}}});function selectVar1(){var1.add("projects-variants-block_variant_selected"),var2.remove("projects-variants-block_variant_selected"),var3.remove("projects-variants-block_variant_selected")}function selectVar2(){var1.remove("projects-variants-block_variant_selected"),var2.add("projects-variants-block_variant_selected"),var3.remove("projects-variants-block_variant_selected")}function selectVar3(){var1.remove("projects-variants-block_variant_selected"),var2.remove("projects-variants-block_variant_selected"),var3.add("projects-variants-block_variant_selected")}vardef1.addEventListener("click",selectVar1),vardef2.addEventListener("click",selectVar2),vardef3.addEventListener("click",selectVar3);