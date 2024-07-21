let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}




// //////////////////////////////////////////////////PAGE 2//////////////////////////////////////////////////


// var radius = 240;
// var autorotate = true;
// var rotatespeed = -60;
// var imgwidth = 120;
// var imgheight = 170;

// setTimeout(init, 1000);

// var odrag = document.getElementById('dragcontainer');
// var ospin = document.getElementById('spincontainer');

// var aimg = ospin.getElementsByTagName('img');
// var ele = [...aimg];

// ospin.style.width = imgwidth + "px";
// ospin.style.height = imgheight + "px";

// var ground = document.getElementById('ground');

// ground.style.width = radius * 3 + "px";
// ground.style.height = radius * 3 + "px";

// function init(delaytime) {
//     for(let i = 0; i < ele.length; ++i) {
//         ele[i].style.transform = "rotateY(" +
//         (i * (360 / ele.length)) + "deg) translateZ(" + radius + "px)";

//         ele[i].style.transition = "transform 1s";
//         ele[i].style.transitionDelay = (delaytime || (ele.length - i) / 4) + "s";
//     }     
// }



// function applytransform(obj) {
//     if(ty > 180) ty = 180;
//     if(ty < 0) ty = 0;

//     obj.style.transform = "rotateX(" + (-ty) + "deg)rotateY(" + (tx) + "deg)";
// }



// function playspin(yes) {
//     ospin.style.animationPlayState = (yes ?
//         'running': 'paused');
// }


// var sx, sy, nx, ny, desx = 0, desy = 0, tx = 0, ty = 10;

// if (autorotate) {
//     var animationname = (rotatespeed > 0 ? 'spin' : 'spinrevert');

//     ospin.style.animation = `${animationname} ${Math.abs(rotatespeed)}s infinite linear`;
// }



// document.onpointerdown = function(e) {
//     clearInterval(odrag.timer);

//     e = e || window.event;

//     var sx = e.clientX,
//     sy = e.clientY;

//     this.onpointermove = function(e) {
//         e = e || window.event;

//         var nx = e.clientX,
//         ny = e.clientY,
//         desx = nx - sx;
//         desy = ny - sy;

//         tx += desx * 0.1;
//         ty += desy *   0.1;

//         applytransform(odrag);
//         sx = nx;
//         sy = ny;
//     };

//     this.onpointerup = function(e) {
//         odrag.timer = setInterval(function() {
//             desx *= 0.95;
//             desy *= 0.95;
//             tx += desx * 0.1;
//             ty += desy * 0.1;

//             applytransform(odrag);
//             playspin(false);

//             if (Math.abs(desx) < 0.5 && Math.abs(desy) < 0.5) {
//                 clearInterval(odrag.timer);
//                 playspin(true);
//             }
//         }, 17);

//         this.onpointermove = this.onpointerup = null;
//     };

//     return false;
// }


// document.onmousewheel = function(e) {
//     e = e || window.event;
//     var d = e.wheelDelta / 20 || -e.detail;
//     radius += d;
//     init(1);
// }




















































































