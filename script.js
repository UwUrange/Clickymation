var addv = 1;
var index = 0;
var clicky = 0;
var bunnycost = 30;
var ruter = 250;
var ssi = 200;
var boomling = 1000;
var night= "OFF";
var science= "OFF";
var upga= "0";
var upgb= "0";
var upgc= "0";
var imageList = [
  "cube1.png",
  "cube2.png",
  "cube3.png",
  "cube4.png",
  "cube5.png",
  "cube6.png",
  "cube7.png",
  "cube8.png",
  "cube9.png",
  "cube10.png",
  "cube11.png",
  "cube12.png",
  "cube13.png"
];
function changeImage() {
  index = index + 1;
  if (index == imageList.length) {
    index = 0;
  }
  var image1 = document.getElementById("myImage");
  image1.src = imageList[index];
}

function onClick() {
  clicky += addv;
  document.getElementById("clicky").innerHTML = clicky;
  localStorage.setItem("clicky", clicky);
}

function Bunnygrade() {
  if (clicky >= bunnycost) {
    clicky = clicky - bunnycost;
    addv = addv + 1;
    bunnycost = bunnycost * 2;
    document.getElementById("bunnycost").innerHTML = bunnycost;
    upga++;
    document.getElementById("upga").innerHTML = upga;
  } else {
    alert("Not enough points!");
    localStorage.setItem("addv", addv);
    localStorage.setItem("bunnycost", bunnycost);
  }
}
window.onbeforeunload = function () {
  localStorage.setItem("clicky", clicky);
  localStorage.setItem("addv", addv);
  localStorage.setItem("bunnycost", bunnycost);
  localStorage.setItem("ruter", ruter);
  localStorage.setItem("boomling", boomling);
  localStorage.setItem("ssi", ssi);
  localStorage.setItem("upga", upga);
  localStorage.setItem("upgb", upgb);
  localStorage.setItem("upgc", upgc);
};
window.onload = function () {
  if (localStorage.getItem("clicky") >= 1) {
    clicky = parseInt(localStorage.getItem("clicky"));
    addv = parseInt(localStorage.getItem("addv"));
    bunnycost = parseInt(localStorage.getItem("bunnycost"));
    upga = parseInt(localStorage.getItem("upga"));
    upgb = parseInt(localStorage.getItem("upgb"));
    upgc = parseInt(localStorage.getItem("upgc"));
    if (localStorage.getItem("ruter") >= 251) {
      ruter = parseInt(localStorage.getItem("ruter"));
    }
    if (localStorage.getItem("boomling") >= 1001) {
      boomling = parseInt(localStorage.getItem("boomling"));
      ssi = parseInt(localStorage.getItem("ssi"));
    }
  }
  document.getElementById("clicky").innerHTML = clicky;
  document.getElementById("bunnycost").innerHTML = bunnycost;
  document.getElementById("ruter").innerHTML = ruter;
  document.getElementById("boomling").innerHTML = boomling;
  document.getElementById("upga").innerHTML = upga;
  document.getElementById("upgb").innerHTML = upgb;
  document.getElementById("upgc").innerHTML = upgc;
};
function ChangeColor() {
  document.body.style.backgroundImage = "url('rainbow.png')";
  $(".contact").animate().css({
    backgroundColor: "#FF67E8"
  }, 2500);
}
function Blau() {
  document.body.style.backgroundImage = "url('blue.png')";
  $(".contact").animate().css({
    backgroundColor: "#8952FF"
  }, 2500);
}
function Blackish() {
  document.body.style.backgroundImage = "url('dark.png')";
  $(".contact").animate().css({
    backgroundColor: "#2B2529"
  }, 2500);
}

function Pastelka() {
  document.body.style.backgroundImage = "url('pastel.png')";
  $(".contact").animate().css({
    backgroundColor: "#A5FFD3"
  }, 2500);
}
function Ruter() {
  if (clicky >= ruter) {
    clicky = clicky - ruter;
    ruter = ruter * 2;
    document.getElementById("ruter").innerHTML = ruter;
    upgb++;
    document.getElementById("upgb").innerHTML = upgb;
  } else {
    alert("Not enough points!");
  }
}
setInterval(function () {
  if (ruter >= 251) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 2500);

setInterval(function () {
  if (ruter >= 501) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 1250);

setInterval(function () {
  if (ruter >= 1001) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 625);

setInterval(function () {
  if (ruter >= 2001) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 312);

setInterval(function () {
  if (ruter >= 4001) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 156);

setInterval(function () {
  if (ruter >= 8001) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 78);

setInterval(function () {
  if (ruter >= 16001) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 39);

setInterval(function () {
  if (ruter >= 32001) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 20);

setInterval(function () {
  if (ruter >= 64001) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 10);

setInterval(function () {
  if (ruter >= 128001) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 5);

setInterval(function () {
  if (ruter >= 256001) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 2);

setInterval(function () {
  if (ruter >= 512001) {
    clicky++;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 1);

setInterval(function () {
  if (ruter >= 1024001) {
    clicky=clicky+upgb-15;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 0);

function Boom() {
  if (clicky >= boomling) {
    clicky = clicky - boomling;
    boomling = boomling * 2;
    ssi = ssi + 50;
    document.getElementById("boomling").innerHTML = boomling;
    upgc++;
    document.getElementById("upgc").innerHTML = upgc;
  } else {
    alert("Not enough points!");
  }
}
setInterval(function () {
  if (boomling >= 1001) {
    clicky = clicky + ssi;
    document.getElementById("clicky").innerHTML = clicky;
  }
}, 10000);

function Resett() {
  localStorage.setItem("clicky", 0);
  localStorage.setItem("addv", 1);
  localStorage.setItem("bunnycost", 30);
  localStorage.setItem("ruter", 250);
  localStorage.setItem("boomling", 1000);
  localStorage.setItem("ssi", 200);
}
function Resett(){
  document.location.reload(true)
}

function Dark() {
  if (night == "OFF") {
    night = "ON";
    document.body.style.backgroundImage = "url('peach.png')";
    $(".contact").animate().css({
      backgroundColor: "#2A2A2A"
    }, 2500);
  
    $(".top").animate().css({
      backgroundColor: "#2A2A2A"
    }, 2500);
  
    $(".center").animate().css({
      backgroundColor: "#3C3C3C"
    }, 2500);
  
    $("body").animate().css({
      backgroundImage: "#FFBA68"
    }, 2500);
  } else {
    night = "OFF";
    document.location.reload(true)
  }
}

function Science() {
  if (science == "OFF") {
    science = "ON";
    setInterval(function() {
      if (clicky >=1) {
        document.getElementById("clicky").innerHTML = clicky.toExponential(0);
        document.getElementById("bunnycost").innerHTML = bunnycost.toExponential(0);
        document.getElementById("ruter").innerHTML = ruter.toExponential(0);
        document.getElementById("boomling").innerHTML = boomling.toExponential(0);
      }; 
    }, 0);
  } else {
    science = "OFF";
    document.location.reload(true)
  }
}

window.onkeydown = function(event){
  if(event.keyCode === 32) {
      event.preventDefault();
      document.querySelector('#myImage').click();
  }
};
