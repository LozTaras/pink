!function(){for(var n=document.querySelector(".rates__list"),i=document.querySelectorAll(".rates .slider-controls__toggle"),s=1,l=0,t=0;t<i.length;t++)i[t].addEventListener("click",e);function e(){var t=this.dataset.slide;c(),i[t].classList.add("slider-controls__toggle--active"),n.style.marginLeft=t?-100*t+"%":"0"}function c(){for(var t=0;t<i.length;t++)i[t].classList.remove("slider-controls__toggle--active")}n.addEventListener("touchstart",function(t){l=t.changedTouches[0].clientX}),n.addEventListener("touchend",function(t){var e=t.changedTouches[0].clientX;e<l&&50<l-e&&function(){if(2<++s)return s=2;c(),i[s].classList.add("slider-controls__toggle--active"),n.style.marginLeft=-100*s+"%"}();l<e&&50<e-l&&function(){if(--s<0)return s=0;c(),i[s].classList.add("slider-controls__toggle--active"),n.style.marginLeft=-100*s+"%"}();l=null}),window.addEventListener("resize",function(t){var e=document.documentElement.clientWidth;660<e&&(n.style="");e<660&&(n.style.marginLeft=-100*s+"%")})}();