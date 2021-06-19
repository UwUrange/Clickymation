window.onload = function () {
  var usrn = prompt("Set Your Username:");
  document.getElementById("usrn").innerHTML = usrn;
};
var addv = 1;
var index = 0;
var clicky = 0;
var bunnycost = 30;
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
  var clickier = clicky;
  document.getElementById("clicky").innerHTML = clicky;
  clickier = clicky;
  document.getElementById("clickier").innerHTML = clickier;
  localStorage.setItem("clicky", clicky);
}

function Bunnygrade() {
  if (clicky >= bunnycost) {
    clicky = clicky - bunnycost;
    addv = addv + 1;
    bunnycost = bunnycost * 2;
    document.getElementById("bunnycost").innerHTML = bunnycost;
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
};
window.onload = function () {
  if (localStorage.getItem("clicky") >= 1) {
    clicky = parseInt(localStorage.getItem("clicky"));
    addv = parseInt(localStorage.getItem("addv"));
    bunnycost = parseInt(localStorage.getItem("bunnycost"));
  }
};
