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
    var ya = 0;
    var catsss = "Kittens.jpg";
    var Game = function() {
            //Create a new instance of player 1 & 2
            this.player1Wins = 0;
            this.player2Wins = 0;
        }
        // Gives Turns and marks in the cells. Also populates two arrays for winner analysis, forgive the long conditional.
        // But this method works using the same params as magic square, so thats cool. Also it has the capacity to store wins
        // but didn't have enough time.
    Game.prototype.nextPlayer = function(game) {
        $('.square').click(function(game) {
                var $this = $(this);
                if ($this.text() !== "O" && $this.text() !== "X" && turn === 0) {
                    $this.text("X");
                    turn += 1;
                    xArr.push(parseInt($this.val()));
                    if (xArr[0] + xArr[1] + xArr[2] === 15 || xArr[1] + xArr[2] + xArr[3] === 15 || xArr[0] + xArr[1] + xArr[3] === 15 || xArr[0] + xArr[2] + xArr[3] === 15 || xArr[0] + xArr[1] + xArr[4] === 15 || xArr[0] + xArr[2] + xArr[4] === 15 || xArr[0] + xArr[3] + xArr[4] === 15 || xArr[1] + xArr[3] + xArr[4] === 15 || xArr[2] + xArr[3] + xArr[4] === 15) {
                        alert("X Wins!");
                        game.player1Wins += 1;
                    } else {
                        ya = ya + 1;
                    }
                     console.log(xArr);
                } else if ($this.text() !== "X" && $this.text() !== "O" && turn === 1) {
                    $this.text("O");
                    turn -= 1;
                    yArr.push(parseInt($this.val()));
                    if (yArr[0] + yArr[1] + yArr[2] === 15 || yArr[1] + yArr[2] + yArr[3] === 15 || yArr[0] + yArr[1] + yArr[3] === 15 || yArr[0] + yArr[2] + yArr[3] === 15) {
                        alert("O Wins!");
                        game.player2Wins += 1;
                    }
                     else {
                        ya = ya + 1;
                        // console.log(ya);
                    }
                }
                else if (ya === 9){
                    alert("Tie!");
                 }
        }
    );
    };
    // Clears the Board
    Game.prototype.Reset = function() {
    $("#reset").click(function() {
        $(".square").html("&nbsp;");
        turn = 0;
        ya = 0;
        xArr = [];
        yArr = [];
    })
};
// For best experience, please click the kitten button. It was difficult getting
// the css to work so i forced it using Jquery.
    Game.prototype.Kittens = function() {
    $("#kittens").click(function() {
            $(".jumbotron").css({
                                'background-image' : 'url(' + catsss + ')',
                                'background-size' : 'cover',
                                'max-width' : '100%'
                            });
            $("#mittens").text("Tic Cat Toe");
            $(".container").css({'max-height' : '100%',
                                'max-width' : '50%'
                            });
            $("html").css('height', '100%');
            $(".square").css({
                            'height' : '140px',
                            'width' : '140px',
                            'font-size' : '120px',
                            'text-align' : 'center'
            });
            $("body").css({
                        'height' : '100%',
                        'background-color' : '#78AB46'
                    });
            })
    };
    
    game = new Game();
    game.nextPlayer(game);
    game.Reset();
    game.Kittens();
    // game.Winner();
    //Tracks the cells of the board instance
    //this.$cells = ...

    //Store any other properties that board may have below, such as a reset option
    // Start the game!
});