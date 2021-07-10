class Menu {
  constructor(donuts, quantity, sprinkles, coffee, wallet, sprinkleCost,coffeeCost) {
    this.donuts = 0;
    this.sprinkleCost = 2;
    this.sprinkles = 0;
    this.coffeeCost = 4;
    this.coffee = 0;
    this.wallet = 100;
    
  }

  getWallet() {
    return this.wallet;
  }
  getSprinkles() {
    return this.sprinkles;
  }
  getCoffee() {
    return this.coffee;
  }

  buycoffee() {
    this.coffee += 1;
    this.subtractMoneyForCoffee();
  }
  buySprinkles() {
    this.sprinkles += 1;
    this.subtractMoneyForSprinkles();
  }
  subtractMoneyForSprinkles(){
      this.wallet -= this.sprinkleCost;
  }
  subtractMoneyForCoffee(){
      this.wallet -= this.coffeeCost;
  }
}
export default Menu;
