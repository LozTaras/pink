!function(){for(var i=document.querySelector(".rates__list"),r=document.querySelectorAll(".rates .slider-controls__toggle"),c=1,t=0;t<r.length;t++)r[t].addEventListener("click",e);function e(){var t=this.dataset.slide;o(),r[t].classList.add("slider-controls__toggle--active"),i.style.marginLeft=t?-100*t+"%":"0"}function o(){for(var t=0;t<r.length;t++)r[t].classList.remove("slider-controls__toggle--active")}i.addEventListener("touchstart",function n(t){var s=t.changedTouches[0].clientX;i.addEventListener("touchend",function(t){var e=t.changedTouches[0].clientX;(e<s||50<s-e)&&function(){if(2<++c)return c=2;o(),r[c].classList.add("slider-controls__toggle--active"),i.style.marginLeft=-100*c+"%"}(),(s<e||50<e-s)&&function(){if(--c<0)return c=0;o(),r[c].classList.add("slider-controls__toggle--active"),i.style.marginLeft=-100*c+"%"}(),i.removeEventListener("touchstart",n)})}),window.addEventListener("resize",function(t){var e=document.documentElement.clientWidth;660<e&&(i.style="");e<660&&(i.style.marginLeft=-100*c+"%")})}();