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

//donut maker object
const donutMaker = new DonutMaker();



//update counts
function updateDonutCount(){
  const donutCount = document.querySelector(".donutAmount");
  donutCount.innerHTML = donutMaker.returnDonuts();
  checkFundsToBuyAutoClicker();
  checkFundsToBuyDonutX();
}
function updateDonutXCount(){
  const dxAmount = document.querySelector(".dxAmount");
  dxAmount.innerHTML = donutMaker.returnDonutX();
  checkFundsToBuyAutoClicker();
  checkFundsToBuyDonutX();
}
function updateAutoClickerCount(){
  const dxAmount = document.querySelector(".acAmount");
  dxAmount.innerHTML = donutMaker.returnAutoClickers();
  checkFundsToBuyAutoClicker();
  checkFundsToBuyDonutX();
}
function updateDonutXValue(){
  const dXValue = document.querySelector('.displayDxValue');
  dXValue.innerHTML = donutMaker.getDonutXValue();
  

}
function updateAllCounts(){
  updateDonutCount();
  updateAutoClickerCount();
  updateDonutXCount();
  updateDonutXValue();
}


//click to make donut button
donutClicker.addEventListener("click", () => {
  donutMaker.clickDonutButton();
  displayMyDonuts();
  updateDonutCount();
});

//click to buy autoclickers
autoClicker.addEventListener("click", () => {
  checkFundsToBuyAutoClicker();
  donutMaker.buyAutoclicker();
  updateAllCounts();
  displayMyAutoClickers();
});
//click to buy donutX
donutX.addEventListener("click", () => {
  checkFundsToBuyDonutX();
  donutMaker.buyDonutX();
  updateAllCounts();
  displayDonutX();
});

//check funds to buy auto clicker
function checkFundsToBuyAutoClicker(){
  const autoClicker = document.querySelector(".buyAutoClicker");
  if(donutMaker.insufficientFunds()){
    autoClicker.disabled = true;
  } else{
    autoClicker.disabled = false
  }
}
//check funds to buy donut x 
function checkFundsToBuyDonutX(){
  const donutX = document.querySelector(".buyDonutX");
  if(donutMaker.insufficientFundsX()){
    donutX.disabled = true;
  } else{
    donutX.disabled = false
  }
}
//display autoclickers
function displayMyAutoClickers() {
  const acAmount = document.querySelector(".acAmount");
  acAmount.innerHTML = donutMaker.returnAutoClickers();
}
//display donut count
function displayMyDonuts() {
  const donutAmount = document.querySelector(".donutAmount");
  donutAmount.innerHTML = donutMaker.returnDonuts();
}

//display donut x
function displayDonutX() {
  const dxAmount = document.querySelector(".dxAmount");
  dxAmount.innerHTML = donutMaker.returnDonutX();
}
