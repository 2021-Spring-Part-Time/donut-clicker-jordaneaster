import DonutMaker from "../donutMaker";

const navMenu = document.getElementById("fredInfo");
document.getElementById("cookieClicker"), document.getElementById("about");

let fredButton = document.getElementById("fredInfo");
let cookieButton = document.getElementById("cookieClicker");
let aboutButton = document.getElementById("about");

fredButton.addEventListener("click", () => {
  var fredsClass = document.querySelector(".fredClass");
  if (fredsClass.style.display === "none") {
    fredsClass.style.display = "block";
  } else {
    fredsClass.style.display = "none";
  }
});

cookieButton.addEventListener("click", () => {
  var cookieClass = document.querySelector(".cookieClass");
  if (cookieClass.style.display === "none") {
    cookieClass.style.display = "block";
  } else {
    cookieClass.style.display = "none";
  }
});

aboutButton.addEventListener("click", () => {
  var aboutClass = document.querySelector(".aboutClass");
  if (aboutClass.style.display === "none") {
    aboutClass.style.display = "block";
  } else {
    aboutClass.style.display = "none";
  }
});

const donutClicker = document.querySelector(".donutClicker"),
  autoClicker = document.querySelector(".buyAutoClicker"),
  donutX = document.querySelector(".buyDonutX"),
  donutAmount = document.querySelector(".donutAmount"),
  acAmount = document.querySelector(".acAmount"),
  dxAmount = document.querySelector(".dxAmount");
const donutMaker = new DonutMaker();

donutClicker.addEventListener("click", () => {
  donutMaker.clickDonutButton();
});
