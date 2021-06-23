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
    this.myDonuts += 1;
  }
  buyAutoclicker() {
    this.myAutoClickers += 1;
    this.subtractDonutsToBuyAutoClicker(); 
  }
  buyDonutX() {
    this.myDonutX += 1;
    this.subtractDonutsToBuyDonutX();
  }

  //getters
  returnDonuts() {
    return Math.round(this.myDonuts);
  }
  returnAutoClickers() {
    return this.myAutoClickers;
  }
  returnDonutX() {
    return this.myDonutX;
  }

  //clicker calculations-sufficient funds
  subtractDonutsToBuyAutoClicker() {
    this.myDonuts -= Math.round(this.autoClickerCost);
  }
  subtractDonutsToBuyDonutX(){
    this.myDonuts -= Math.round(this.donutXCost);
  }
  insufficientFunds() {
    return this.myDonuts < this.autoClickerCost;
  }
  insufficientFundsX() {
    return this.myDonuts < this.donutXCost;
  }

  autoClickerFundsChecker(){
    if(this.insufficientFunds()){
     throw new Error('insufficient donuts to buy auto clicker');
    } else{
      this.buyAutoclicker();
    }
  }
  donutXFundsChecker(){
    if(this.insufficientFunds()){
     throw new Error('insufficient donuts to buy auto clicker');
    } else{
      this.buyDonutX();
    }
  }

}
export default DonutMaker;
