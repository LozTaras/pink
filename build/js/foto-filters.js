!function(){function e(c){var s=document.querySelector(c.handle),n=f(s),d=s.parentNode,r=f(d),i=document.querySelector(c.reset),u=d.offsetWidth-s.offsetWidth,m=parseFloat(getComputedStyle(s).left)/(u/100),l=document.querySelector(c.image);function f(e){var t=e.getBoundingClientRect();return{top:t.top+(document.documentElement.scrollTop||pageYOffset),left:t.left+(document.documentElement.scrollLeft||pageXOffset),bottom:t.bottom+(document.documentElement.scrollTop||pageYOffset),right:t.right+(document.documentElement.scrollLeft||pageXOffset)}}function a(e){u=d.offsetWidth-s.offsetWidth,m=parseFloat(getComputedStyle(s).left)/(u/100);var t=getComputedStyle(l).filter,o=1.4/100*m+.5,n=1;/contrast/.test(t)&&(n=t.match(/contrast\((\d+(?:\.\d+)?)\)/)[1]),l.style.filter="brightness("+o+")contrast("+n+")"}function p(e){u=d.offsetWidth-s.offsetWidth,m=parseFloat(getComputedStyle(s).left)/(u/100);var t=getComputedStyle(l).filter,o=1.4/100*m+.5,n=1;/brightness/.test(t)&&(n=t.match(/brightness\((\d+(?:\.\d+)?)\)/)[1]),l.style.filter="brightness("+n+")contrast("+o+")"}function v(e){u=d.offsetWidth-s.offsetWidth;var t=1.4/100*(m=parseFloat(getComputedStyle(s).left)/(u/100))+.5;l.style.transform="scale("+t+")"}s.addEventListener("mousedown",function(e){if(1==e.which){e.preventDefault(),n=f(s),r=f(d);var o=e.pageX-n.left;u=d.offsetWidth-s.offsetWidth,s.style.backgroundColor="#d22856",document.body.style.cursor="pointer",document.addEventListener("mousemove",t),document.addEventListener("mouseup",function e(){s.style.backgroundColor="";document.body.style.cursor="";document.removeEventListener("mousemove",t);document.removeEventListener("mousemove",a);document.removeEventListener("mousemove",p);document.removeEventListener("mousemove",v);document.removeEventListener("mouseup",e)}),"crop"==c.type&&document.addEventListener("mousemove",v),"fill"==c.type&&document.addEventListener("mousemove",a),"сontr"==c.type&&document.addEventListener("mousemove",p)}function t(e){e.preventDefault();var t=e.pageX-r.left-o;i.disabled&&(i.disabled=!1),t<=0&&(t=0),u<t&&(t=u),s.style.left=t+"px"}}),window.addEventListener("resize",function(e){for(var t=d.offsetWidth-s.offsetWidth,o=l.parentNode;o&&!o.classList.contains("post__image-overflow");)o=o.parentNode;var n=f(l);containerCoords=f(o);var r=n.right-n.left-(containerCoords.right-containerCoords.left);n.bottom,n.top,containerCoords.bottom,containerCoords.top;t!=u&&(s.style.left=t/100*m+"px",u=t),r<0&&document.documentElement.clientWidth<960&&(l.style.left=0)}),i.addEventListener("click",function(){l.style.cssText="",i.disabled=!0,s.style.left="",m=parseFloat(getComputedStyle(s).left)/(u/100)}),l.addEventListener("mouseover",function(){"crop"==c.type&&(m<=50||(this.style.cursor="grab"))}),l.addEventListener("dragstart",function(e){e.preventDefault()}),l.addEventListener("mousedown",function(e){if(1==e.which&&(e.preventDefault(),"crop"==c.type&&!(m<=50))){document.body.style.cursor="grabbing",l.style.cursor="grabbing";for(var n=l.parentNode;n&&!n.classList.contains("post__image-overflow");)n=n.parentNode;var r=f(l);containerCoords=f(n);var s={width:r.right-r.left-(containerCoords.right-containerCoords.left),height:r.bottom-r.top-(containerCoords.bottom-containerCoords.top)},d=e.pageX,i=e.pageY,u=parseFloat(getComputedStyle(l).left)||0,a=parseFloat(getComputedStyle(l).top)||0;document.addEventListener("mousemove",t),document.addEventListener("mouseup",function e(){document.body.style.cursor="";l.style.cursor="grab";document.removeEventListener("mousemove",t);document.removeEventListener("mouseup",e);l.addEventListener("mouseout",function(){l.style.cursor=""})})}function t(e){"grabbing"!=getComputedStyle(l).cursor&&(l.style.cursor="grabbing"),containerCoords=f(n),r=f(l);var t=u+(e.pageX-d);t>s.width/2&&0<s.width&&(t=s.width/2),t<-s.width/2&&0<s.width&&(t=-s.width/2),s.width<0&&(t=0);var o=a+(e.pageY-i);o>s.height/2&&(o=s.height/2),o<-s.height/2&&(o=-s.height/2),l.style.left=t+"px",l.style.top=o+"px"}}),s.addEventListener("touchstart",function(e){n=f(s),r=f(d);var o=e.changedTouches[0].pageX-n.left;function t(e){e.preventDefault();var t=e.changedTouches[0].pageX-r.left-o;i.disabled&&(i.disabled=!1),t<=0&&(t=0),u<t&&(t=u),s.style.left=t+"px"}u=d.offsetWidth-s.offsetWidth,s.style.backgroundColor="#d22856",document.addEventListener("touchmove",t),document.addEventListener("touchend",function e(){s.style.backgroundColor="";document.body.style.cursor="";document.removeEventListener("mousemove",t);document.removeEventListener("mousemove",a);document.removeEventListener("mousemove",p);document.removeEventListener("mousemove",v);document.removeEventListener("mouseup",e)}),"crop"==c.type&&document.addEventListener("touchmove",v),"fill"==c.type&&document.addEventListener("touchmove",a),"сontr"==c.type&&document.addEventListener("touchmove",p)})}new e({handle:".post__toggle--crop",image:".post__image",type:"crop",reset:".post__btn--reset"}),new e({handle:".post__toggle--fill",image:".post__image",type:"fill",reset:".post__btn--reset"}),new e({handle:".post__toggle--сontr",image:".post__image",type:"сontr",reset:".post__btn--reset"})}();