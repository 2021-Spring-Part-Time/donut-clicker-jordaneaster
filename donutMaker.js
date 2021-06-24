class DonutMaker {
  constructor(myDonuts, myAutoClickers, autoClickerCost, myDonutX, donutXCost) {
    this.myDonuts = 0;
    this.myAutoClickers = 0;
    this.autoClickerCost = 33;
    this.myDonutX = 0;
    this.donutXCost = 10;
  }
  //click add/buy buttons
  clickDonutButton() {
    this.myDonuts += 1 * this.getDonutXValue();
  }
  buyAutoclicker() {
    this.myAutoClickers += 1;
    this.subtractDonutsToBuyAutoClicker();
    this.increaseAutoclickerCost();
  }
  buyDonutX() {
    this.myDonutX += 1;
    this.subtractDonutsToBuyDonutX();
    this.increaseDonutXCost();
  }
  autoClick() {
    for (let i = 0; i < this.myAutoClicker; i++) {
      this.clickDonutButton();
    }
  }

  //getters
  returnDonuts() {
    return Math.round(this.myDonuts);
  }
  returnAutoClickers() {
    return Math.round(this.myAutoClickers);
  }
  returnDonutX() {
    return Math.round(this.myDonutX);
  }
  getAutoClickerCost() {
    return Math.round(this.autoClickerCost);
  }
  getDonutXCost() {
    return Math.round(this.donutXCost);
  }
  getDonutXValue(){
    return Math.abs(Math.pow(1.2,this.myDonutX));
  }

  //increases
  increaseAutoclickerCost() {
    this.autoClickerCost += this.autoClickerCost * 0.1;
  }
  increaseDonutXCost() {
    this.donutXCost += this.donutXCost * 0.1;
  }
  increaseDonutXDonutCount() {
    return this.myDonuts + Math.pow(1.2, this.myDonutX);
  }
  increaseDonutsEarnedPerClick() {
    this.myDonuts += this.increaseDonutXDonutCount();
  }

  //clicker calculations-sufficient funds
  subtractDonutsToBuyAutoClicker() {
    this.myDonuts -= Math.round(this.autoClickerCost);
  }
  subtractDonutsToBuyDonutX() {
    this.myDonuts -= Math.round(this.donutXCost);
  }
  insufficientFunds() {
    return this.myDonuts < this.autoClickerCost;
  }
  insufficientFundsX() {
    return this.myDonuts < this.donutXCost;
  }

  autoClickerFundsChecker() {
    if (this.insufficientFunds()) {
      throw new Error("insufficient donuts to buy auto clicker");
    } else {
      this.buyAutoclicker();
    }
  }
  donutXFundsChecker() {
    if (this.insufficientFunds()) {
      throw new Error("insufficient donuts to buy auto clicker");
    } else {
      this.buyDonutX();
    }
  }
}
export default DonutMaker;
