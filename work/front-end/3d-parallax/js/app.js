const parallaxEl = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

let xValue = 0,
    yValue = 0;

let rotateDegree = 0;

function update(cursorPosition){
    parallaxEl.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `
        perspective(2300px) 
        translateZ(${zValue * speedz}px) 
        rotateY(${rotateDegree * rotateSpeed}deg) 
        translateX(calc(-50% + ${-xValue * speedx}px)) 
        translateY(calc(-50% + ${yValue * speedy}px))`;
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
    update(e.clientX);
});


if(window.innerWidth >= 725){
    main.style.maxHeight = `${window.innerWidth * 0.6}px`;
} else {
    main.style.maxHeight = `${window.innerWidth * 2.3}px`;
}

// GSAP Animation

//let timeline = gsap.timeline();

// work
/*
timeline.from(".bg-img", {
    top: `${+document.querySelector(".bg-img").offsetHeight / 2 - 200}px`,
    duration: 3.5,
});

// doesn't work
timeline.from(".fog-5", {
    top: `${+document.querySelector(".fog-5").offsetHeight / 2 + 100}px`,
    duration: 3.5,
});
timeline.from(".fog-4", {
    top: `${+document.querySelector(".fog-4").offsetHeight / 2 + 100}px`,
    duration: 3.5,
});
timeline.from(".mountain-9", {
    top: `${+document.querySelector(".mountain-9").offsetHeight / 2 + 400}px`,
    duration: 3.5,
});
*/


// doesn't work
/*
parallaxEl.forEach((el) => {
    timeline.from(
        el,
        {
            top:`${el.offsetHeight / 2 + el.dataset.distance}px`,
            duration: 3.5,
        }
    )
});
*/