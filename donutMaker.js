class DonutMaker {
 
 
  constructor(myDonuts, myAutoClickers, autoClickerCost, myDonutX, donutXCost) {
    this.myDonuts = myDonuts;
    this.myAutoClickers = myAutoClickers;
    this.autoClickerCost = autoClickerCost;
    this.myDonutX = myDonutX;
    this.donutXCost = donutXCost;
  }

clickDonutButton(){
  this.myDonuts +=1;
}
returnDonuts(){
  return Math.round(this.myDonuts);
}


 
}
export default DonutMaker;
