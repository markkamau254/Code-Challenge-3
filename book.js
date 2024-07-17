const daysContainer = document.querySelector(".days"),
  nextBtn = document.querySelector(".next-btn"),
  prevBtn = document.querySelector(".prev-btn"),
  month = document.querySelector(".month"),
  todayBtn = document.querySelector(".today-btn");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


const date = new Date();


let currentMonth = date.getMonth();


let currentYear = date.getFullYear();


function renderCalendar() {
  
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  
  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  
  let days = "";


  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }


  for (let i = 1; i <= lastDayDate; i++) {
  
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      
      days += `<div class="day today">${i}</div>`;
    } else {
    
      days += `<div class="day ">${i}</div>`;
    }
  }

 
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
  }


  hideTodayBtn();
  daysContainer.innerHTML = days;
}

renderCalendar();

nextBtn.addEventListener("click", () => {

  currentMonth++;
  if (currentMonth > 11) {
    
    currentMonth = 0;
    currentYear++;
  }
 
  renderCalendar();
});


prevBtn.addEventListener("click", () => {
  
  currentMonth--;
  
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});


todayBtn.addEventListener("click", () => {
  
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();

  renderCalendar();
});



function hideTodayBtn() {
  if (
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}









// /////////////////////////////////////////SCRIPT2

let seats = document.querySelector(".all-seats");
for (var i = 0; i < 59; i++) {
  let randint = Math.floor(Math.random() * 2);
  let booked = randint === 1 ? "booked" : "";
  seats.insertAdjacentHTML(
    "beforeend",
    '<input type="checkbox" name="tickets" id="s' +
      (i + 2) +
      '" /><label for="s' +
      (i + 2) +
      '" class="seat ' +
      booked +
      '"></label>'
  );
}

let tickets = seats.querySelectorAll("input");
tickets.forEach((ticket) => {
  ticket.addEventListener("change", () => {
    let amount = document.querySelector(".amount").innerHTML;
    let count = document.querySelector(".count").innerHTML;
    amount = Number(amount);
    count = Number(count);

    if (ticket.checked) {
      count += 1;
      amount += 200;
    } else {
      count -= 1;
      amount -= 200;
    }
    document.querySelector(".amount").innerHTML = amount;
    document.querySelector(".count").innerHTML = count;
  });
});



/////////////////////////////////////////////BOLT//////////////////////////////

var radius = 240;
var autorotate = true;
var rotatespeed = -60;
var imgwidth = 120;
var imgheight = 170;

setTimeout(init, 1000);

var odrag = document.getElementById('dragcontainer');
var ospin = document.getElementById('spincontainer');

var aimg = ospin.getElementsByTagName('img');
var ele = [...aimg];

ospin.style.width = imgwidth + "px";
ospin.style.height = imgheight + "px";

var ground = document.getElementById('ground');

ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delaytime) {
    for(let i = 0; i < ele.length; ++i) {
        ele[i].style.transform = "rotateY(" +
        (i * (360 / ele.length)) + "deg) translateZ(" + radius + "px)";

        ele[i].style.transition = "transform 1s";
        ele[i].style.transitionDelay = (delaytime || (ele.length - i) / 4) + "s";
    }     
}



function applytransform(obj) {
    if(ty > 180) ty = 180;
    if(ty < 0) ty = 0;

    obj.style.transform = "rotateX(" + (-ty) + "deg)rotateY(" + (tx) + "deg)";
}



function playspin(yes) {
    ospin.style.animationPlayState = (yes ?
        'running': 'paused');
}


var sx, sy, nx, ny, desx = 0, desy = 0, tx = 0, ty = 10;

if (autorotate) {
    var animationname = (rotatespeed > 0 ? 'spin' : 'spinrevert');

    ospin.style.animation = `${animationname} ${Math.abs(rotatespeed)}s infinite linear`;
}



document.onpointerdown = function(e) {
    clearInterval(odrag.timer);

    e = e || window.event;

    var sx = e.clientX,
    sy = e.clientY;

    this.onpointermove = function(e) {
        e = e || window.event;

        var nx = e.clientX,
        ny = e.clientY,
        desx = nx - sx;
        desy = ny - sy;

        tx += desx * 0.1;
        ty += desy *   0.1;

        applytransform(odrag);
        sx = nx;
        sy = ny;
    };

    this.onpointerup = function(e) {
        odrag.timer = setInterval(function() {
            desx *= 0.95;
            desy *= 0.95;
            tx += desx * 0.1;
            ty += desy * 0.1;

            applytransform(odrag);
            playspin(false);

            if (Math.abs(desx) < 0.5 && Math.abs(desy) < 0.5) {
                clearInterval(odrag.timer);
                playspin(true);
            }
        }, 17);

        this.onpointermove = this.onpointerup = null;
    };

    return false;
}


document.onmousewheel = function(e) {
    e = e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
}
































































