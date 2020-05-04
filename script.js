var wow = new WOW(
  {
    boxClass:'wow',   // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:0,       // distance to the element when triggering the animation (default is 0)
    mobile:true,    // trigger animations on mobile devices (default is true)
    live: true,     // act on asynchronously loaded content (default is true)
    callback:function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();



// ScrollReveal().reveal('.section-title',
//                       {
//                         delay:500,
//                         duration:700,
//                         distance:'50px',
//                         easing:'ease-out',
//                         origin:'bottom',
//                         afterReveal:function(el){
//                           let featureTitle = document.getElementById('app-feature-title');featureTitle.innerHTML ="BBB";
//                         }
//                       }); 
// ScrollReveal的動畫
// JS加上https://unpkg.com/scrollreveal


// const countUp = new CountUp('first-value', 241);
// if (!countUp.error) {
//   countUp.start();
// } else {
//   console.error(countUp.error);
// }



lightGallery(document.getElementById('aniimated-thumbnials'), {
    thumbnail:true
}); 
// 點圖片放大


// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);
// parallaxInstance.friction(0.1, 0.1);
// parallaxInstance.relativeInput = true;
// // 滑鼠移動會位移


let scrollUpBtn = document.getElementById("scrollUp");
let menuBtn = document.getElementById("menu-icon");
let mobileHeader = document.getElementById("mobile-header");

menuBtn.onclick = function() {
  if (mobileHeader.classList.contains('open')) {
    menuBtn.classList.remove('close-icon');
    mobileHeader.classList.remove('open');
  } else {
    menuBtn.classList.add('close-icon');
    mobileHeader.classList.add('open');
  }
}

scrollUpBtn.onclick = function() {
  // console.log("點擊");
  window.scrollTo({top:0,behavior:'smooth'})
}
 


window.onscroll = function(e){
  console.log(window.pageYOffset);
  let scrollUpBtn = document.getElementById("scrollUp")
  if (window.pageYOffset >=300){
    scrollUpBtn.classList.add("show");    
  } else{
    scrollUpBtn.classList.remove("show");
  }
}