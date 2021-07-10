import DonutMaker from "../donutMaker.js";
import Menu from "./menu.js";

let fredButton = document.getElementById("fredButton");
let cookieButton = document.getElementById("cookieButton");
let aboutButton = document.getElementById("myButton");
const gameMenu = document.getElementsByTagName("option"),
  optionsDropMenu = document.getElementById("myGame"),
  newGameOption = document.getElementById("newGame"),
  saveGameOption = document.getElementById("saveGame"),
  buySprinklesOption = document.getElementById("buySprinkles"),
  buyCoffeeOption = document.getElementById("buyCoffee"),
  payItForwardOption = document.getElementById("payItForward");
const mainMenu = new Menu();
function displayWallet() {
  let money = document.getElementById("money");
  money.innerHTML = mainMenu.getWallet();
}
function displayCupsOfCoffee() {
  let coffee = document.getElementById("java");
  coffee.innerHTML = mainMenu.getCoffee();
}

const colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function createSprinkles() {
  if (mainMenu.sprinkles >=1) {
    const main = document.querySelector('.mainGameButtons');
    const confettiAmount = 200;

    for (let i = 0; i < confettiAmount; i++) {
      let dot = document.createElement("div");
      dot.className = "confetti";
      dot.style.setProperty("--endX", random(-300, 300) + "px");
      dot.style.setProperty("--endY", random(-200, 200) + "px");
      dot.style.setProperty("--s", random(0.5, 1) + "");
      dot.style.setProperty("--color", colors[random(0, 4)]);
      main.appendChild(dot);
    }
  }
}

optionsDropMenu.addEventListener("change", () => {
  if (gameMenu[1].selected) {
    newGame();
    updateAllCounts();
  }
  if (gameMenu[3].selected) {
    mainMenu.buySprinkles();
    displayWallet();
    createSprinkles();
  }
  if (gameMenu[4].selected) {
    mainMenu.buycoffee();
    displayCupsOfCoffee();
    displayWallet();
  }
});

function FredsInformation() {
  var navBtnContent;
  navBtnContent = document.querySelector(".fredClass");

  if (navBtnContent.style.display === "none") {
    navBtnContent.style.display = "block";
  } else {
    navBtnContent.style.display = "none";
  }
}
function CookieInformation() {
  var navBtnContent;
  navBtnContent = document.querySelector(".cookieClass");

  if (navBtnContent.style.display === "none") {
    navBtnContent.style.display = "block";
  } else {
    navBtnContent.style.display = "none";
  }
}

function CreatorInformation() {
  var navBtnContent;
  navBtnContent = document.querySelector(".aboutClass");

  if (navBtnContent.style.display === "none") {
    navBtnContent.style.display = "block";
  } else {
    navBtnContent.style.display = "none";
  }
}

fredButton.addEventListener("click", () => {
  FredsInformation();
});

cookieButton.addEventListener("click", () => {
  CookieInformation();
});

aboutButton.addEventListener("click", () => {
  CreatorInformation();
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
function updateDonutCount() {
  const donutCount = document.querySelector(".donutAmount");
  donutCount.innerHTML = donutMaker.returnDonuts();
  checkFundsToBuyAutoClicker();
  checkFundsToBuyDonutX();
}
function updateDonutXCount() {
  const dxAmount = document.querySelector(".dxAmount");
  dxAmount.innerHTML = donutMaker.returnDonutX();
  checkFundsToBuyAutoClicker();
  checkFundsToBuyDonutX();
}
function updateAutoClickerCount() {
  const dxAmount = document.querySelector(".acAmount");
  dxAmount.innerHTML = donutMaker.returnAutoClickers();
  checkFundsToBuyAutoClicker();
  checkFundsToBuyDonutX();
}
function updateDonutXValue() {
  const dXValue = document.querySelector(".displayDxValue");
  dXValue.innerHTML = donutMaker.getDonutXValue();
}
function updateAutoclickerActivation() {
  const activate = document.querySelector(".activateAc");
  // activate.innerHTML = checkAvailabilityOfActivateAc();
  checkAvailabilityOfActivateAc();
}

let gameDiv = document.querySelector("#aNewGame");

function newGame() {
  donutMaker.resetGame();
  updateAllCounts();
  let gameOverSign = document.createElement("div");
  gameOverSign.setAttribute("id", "endGame");
  gameDiv = document.querySelector("#aNewGame");

  gameOverSign.innerText = "GAME OVER...";
  gameDiv.appendChild(gameOverSign);
}
let gameOverSign = document.createElement("div");
gameOverSign.setAttribute("id", "endGame");
gameDiv = document.querySelector("#aNewGame");

function updateGameOverSign() {
  const menuDiv = document.querySelector(".gameOptions"),
    reset = document.getElementById("aNewGame");
  window.setImmediate(() => {
    menuDiv.removeChild(reset);
  }, 2000);
}
function deleteGameOverSign() {
  window.setImmediate(() => {
    updateGameOverSign();
  }, 2000);
}

function updateAllCounts() {
  updateDonutCount();
  updateAutoClickerCount();
  updateDonutXCount();
  updateDonutXValue();
  updateAutoclickerActivation();
}

function activateAc() {
  window.setInterval(() => {
    donutMaker.autoClick();
    updateAllCounts();
  }, 1000);
}

const activateBtn = document.querySelector(".activateAc");

//click to activate auto clicker
activateBtn.addEventListener("click", () => {
  checkAvailabilityOfActivateAc();
  activateAc();
  updateAllCounts();
});

//click to make donut button
donutClicker.addEventListener("click", () => {
  donutMaker.clickDonutButton();
  updateDonutCount();
  deleteGameOverSign();
});
//click to buy autoclickers
autoClicker.addEventListener("click", () => {
  checkFundsToBuyAutoClicker();
  donutMaker.buyAutoclicker();
  checkAvailabilityOfActivateAc();
  updateAllCounts();
});
//click to buy donutX
donutX.addEventListener("click", () => {
  checkFundsToBuyDonutX();
  donutMaker.buyDonutX();
  updateAllCounts();
});

//check funds to buy auto clicker
function checkFundsToBuyAutoClicker() {
  const autoClicker = document.querySelector(".buyAutoClicker");
  if (donutMaker.insufficientFunds()) {
    autoClicker.disabled = true;
  } else {
    autoClicker.disabled = false;
  }
}
//check funds to buy donut x
function checkFundsToBuyDonutX() {
  const donutX = document.querySelector(".buyDonutX");
  if (donutMaker.insufficientFundsX()) {
    donutX.disabled = true;
  } else {
    donutX.disabled = false;
  }
}
//check availability to activate auto clickers
function checkAvailabilityOfActivateAc() {
  const activateAcBtn = document.querySelector(".activateAc");
  if (donutMaker.returnAutoClickers() > 0) {
    activateAcBtn.disabled = false;
  } else {
    activateAcBtn.disabled = true;
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
