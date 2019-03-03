var firstPlayer = "player1";
var secondPlayer = "player2";

var dice = function() {
    var numbers = [1,2,3,4,5,6,7,8,9,10]
    return Math.floor(Math.random() * numbers.length) + 1;
}

function Players() {
    this.playerName;
    this.diceRoll = 0;
    this.roundTotal=0;
    this.totalScore=0;
}
Players.prototype.empty = function() {
    this.roundTotal=0;
    this.diceRoll=0;
}








