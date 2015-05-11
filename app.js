// Execute this code only AFTER the document is ready
// // Tried this For A Whole Day the div element would disappear once the code was executed (mucho frustrado)
// var Board = function() {
//     var $table = $(".table");
//     for (var i = 0; i < 3; i++) {
//         var row = "<tr class='row'></tr>";
//         for (var j = 0; j < 3; j++) {
//             var tttDiv = "<td class='square'></td>";
//             // $tttDiv.append("<img src='http://ih2.redbubble.net/image.13875218.3781/flat,140x140,075,t.u1.jpg'/>");
//             // $tttDiv.attr("id", 'val_' + i + '_' + j);
//             // $tttDiv.addClass("col-xs-6");
//             // $tttDiv.addClass("col-md-3");
//             // $tttDiv.addClass("col-4");
//             // $row.append($tttDiv);
//         }
//         if (i < 2) {
//             $(".row").append(tttDiv);
//             $table.append(".row");
//             $("<br>").append($table);

//         } else {
//             $table.append(row);
//             console.log("yoyo");
//         };
//     }
// };

$(document).ready(function() {
    $("#a1").val("2");
    $("#a2").val("7");
    $("#a3").val("6");
    $("#b1").val("9");
    $("#b2").val("5");
    $("#b3").val("1");
    $("#c1").val("4");
    $("#c2").val("3");
    $("#c3").val("8");
    alert("Ya ya");
    var turn = 0;
    var xArr = [];
    var yArr = [];
    var Game = function() {
            //Create a new instance of player 1 & 2
            this.player1 = "X";
            this.player2 = "O";
        }
    // Game.prototype.Winner = function() {
    //     if ($('.square').text() === "X") {
    //         console.log($(".square").val())
    //     } else {
    //         console.log("dude")
    //     }
    // };
    // Gives Turns and marks in the cells. Also populates two arrays for winner analysis.
    Game.prototype.nextPlayer = function(game) {
        $('.square').click(function() {
            var $this = $(this);
            if ($this.text() !== "O" && $this.text() !== "X" && turn === 0) {
                $this.text("X");
                turn += 1;
                xArr.push(parseInt($this.val()));
                console.log(xArr);
            } else if ($this.text() !== "X" && $this.text() !== "O" && turn === 1) {
                $this.text("O");
                turn -= 1;
                yArr.push(parseInt($this.val()));
                console.log(yArr)
            } else {
                alert("Error")
            };
        }
        );
    };

    
    // // `Game.prototype.init` kicks off a new game with a board and two players
    // Game.prototype.init = function() {
    //     //
    // };

    // Player chooses side
    // var Player = function(team) {

    // };
    game = new Game();
    game.nextPlayer(game);
    // game.Winner();
    //Tracks the cells of the board instance
    //this.$cells = ...

    //Store any other properties that board may have below, such as a reset option
    // Start the game!
});