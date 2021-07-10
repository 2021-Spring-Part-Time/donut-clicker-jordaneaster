class User {
    constructor(userName, numDonutsOwned, numAutoClickersOwned, rating){
        this.userName = userName;
        this.numDonutsOwned = numDonutsOwned;
        this.numAutoClickersOwned = numAutoClickersOwned;
        this.rating = rating
    }

    getNumDonutsOwned(){
        return this.numDonutsOwned;
    }
    getNumAutoClickersOwned(){
        return this.numAutoClickersOwned;
    }
    getRating(){
        return this.numAutoClickersOwned*this.numDonutsOwned;
    }

}