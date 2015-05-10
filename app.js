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
    var Game = function() {
        //Create a new instance of player 1 & 2
        //Create a new board
        this.player1 = "X";
        this.player2 = "O";
        this.turn = 0;
        this.nextPlayer = function nextPlayer() {
        $('.square').click(function(){
            var $this = $(this);
            if ($this.text("&nbsp;")){
                $this.text(this.player1);
            }
            else {
                alert("Error")
            }
        });
        (this.turn = 0);
    };
    };
    // Remember: prototypes are shared functions between all game instances
    // Game.prototype.nextPlayer = function() ;


    // // `Game.prototype.init` kicks off a new game with a board and two players
    // Game.prototype.init = function() {
    //     //
    // };

    // Player chooses side
    // var Player = function(team) {

    // };



    //Tracks the cells of the board instance
    //this.$cells = ...

    //Store any other properties that board may have below, such as a reset option
    // Start the game!
    var game = new Game();
    Game();

});