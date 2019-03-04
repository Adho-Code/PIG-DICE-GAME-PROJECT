//business logic//

var firstPlayer = "player1";
var secondPlayer = "player2";

var dice = function() {
    var numbers = [1,2,3,4,5,6]
    return Math.floor(Math.random() * numbers.length) + 1;
}
function reset() {
    location.reload();
}

function Players() {n 
    this.playerName;                                                                                                                                                                               
    this.diceRoll = 0;
    this.roundTotal=0;
    this.totalScore=0;
}
Players.prototype.empty = function() {
    this.roundTotal=0;
    this.diceRoll=0;

}


Players.prototype.switch = function() {


}

Players.prototype.roll= function() {
    if(this.diceRoll === 1) {
        this.roundTotal= 0;
        alert("Fail!! " + this.playerName + ",You rolled 1! Chance for the next player to play")
    } else {
        this.roundTotal += this.diceRoll;
    }
}
Players.prototype.hold = function() {
    this.totalScore += this.roundTotal;
    this.roundTotal= 0;
    alert(this.playerName + "Please give the next chance to the next player.")
}

//user  interface//

$(document).ready(function() {
    $("#play").click(function() {
     firstPlayer = new Players();
     secondPlayer = new Players();
     $(".content").show();
     $("#new-player").hide();
     $("#play").hide();
     $(".resume").hide();
     
    var player1name=("#FirstPlayer").valueOf();
    $("#player1name").text(player1name);

    var player2name=("#SecondPlayer").valueOf();
    $("#player2name").text(player2name);

    FirstPlayer.playername = player1name;
    SecondPlayer.playername = player2name;

    });

    $("button#rolling").click(function() {
        FirstPlayer.diceRoll = dice();
        $("#roll-1").text(FirstPlayer.diceRoll);
        FirstPlayer.roll();
        $("#total-roll-1").text(FirstPlayer.roundTotal);
    });
    $("button#hold").click(function() {
        firstPlayer.roll();
        $("#total-1").text(firstplayer.totalScore);
        $("total-roll-1").empty();
        $("#roll-1").empty();

    });
  })

    

    




