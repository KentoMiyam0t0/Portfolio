//fixed-nav animation & stop scrolling
let stopTrigger = document.querySelector('#header-nav-btn');
let stopTarget = document.body;
let fixedNav = document.querySelector('.fixed-nav');
let fixedNavInner = document.querySelector('.fixed-nav-inner');
stopTrigger.addEventListener('click', function() {
  fixedNav.classList.toggle('display');
  fixedNavInner.classList.toggle('display');
  stopTarget.classList.toggle('no-scroll');
});

//fixed-nav current location
window.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('main#home') !== null) {
    document.querySelector('.fixed-nav .btn-link a.link-home').classList.add('active');
  }else if(document.querySelector('main#work') !== null) {
    document.querySelector('.fixed-nav .btn-link a.link-work').classList.add('active');
  }else if(document.querySelector('main#about') !== null) {
    document.querySelector('.fixed-nav .btn-link a.link-about').classList.add('active');
  }else if(document.querySelector('main#contact') !== null) {
    document.querySelector('.fixed-nav .btn-link a.link-contact').classList.add('active');
  }
});


//Nav-btn hide&show
let target = document.getElementById('header-nav').clientHeight;

window.addEventListener('scroll', function() {
  if (window.scrollY > target) {
    // beyond the point
    document.querySelector('#header-nav-btn').classList.add('fadeRight');
    document.querySelector('#header-nav-btn').classList.remove('fadeLeft');
    document.querySelector('#header-nav-btn').style.display = "block";
  } else {
    // unbeyond the point;
    document.querySelector('#header-nav-btn').classList.remove('fadeRight');
    document.querySelector('#header-nav-btn').classList.add('fadeLeft');
  }
});

// Nav-btn animation
let btn = document.querySelector('#header-nav-btn');
btn.addEventListener('click', function() {
  this.classList.toggle('active');
});

// StickeyBtn
let elemData;
let targets = document.querySelectorAll('/*.fixed-nav .btn-link,*/#header-nav-btn,#header-nav .btn-link,#home-about,#footer-contact-btn,#footer .btn-link');

targets.forEach(target =>{
  // mouse hover
  target.addEventListener("mouseenter", e => {
  target.style.transition = "0s transform, 0.6s background-color";
  elemData = target.getBoundingClientRect();
  })
  // mouse move
  target.addEventListener("mousemove", e => {
    
    // X value = mouse's X position - half width of target - X position of target
    let transX = ((e.clientX - (elemData.width / 2)) - elemData.left) * 0.4;
    
    // Y value = mouse's Y position - half height of target - Y position of target
    let transY = ((e.clientY - (elemData.height / 2)) - elemData.top) * 0.4;
    
    // ボタンのtransformのtranslateにそれぞれの値を入れる
    target.style.transform = "translate(" + transX + "px, " + transY + "px)";
    
  })

  // mouse leave from target
  target.addEventListener("mouseleave", e => {
    
    // When mouse leave from target, reset the velue of transform
    target.style.transition = "0.2s transform 0.1s background-color";
    target.style.transform = "translate(0px, 0px)";
  })
})
