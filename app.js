// Execute this code only AFTER the document is ready
$(document).ready(function() {
    alert("Ya ya");



    function Game() {
        //Create a new instance of player 1 & 2
        //Create a new board
        this.player1 = x;
        this.player2 = o;
        this.turn = 0;
        this.board = Board();
    }

    // Remember: prototypes are shared functions between all game instances
    Game.prototype.nextPlayer = function() {
         (this.turn =0);
    };

    // `Game.prototype.init` kicks off a new game with a board and two players
    Game.prototype.init = function() {
        //
    };

    // Player chooses side
    function Player(team) {
        
    };

    // A starter Board constructor.
    function Board() {
        var currentCell = {};
        var $board = $(".board");
        for (var i = 0; i < 3; i++) {
            var row = document.createElement("div");
            row.classList.add("row");
            for (var j = 0; j < 3; j++) {
                var tttDiv = document.createElement("div");
                tttDiv.id = "square_" + i + "_" + j;
                tttDiv.classList.add("col-lg-4");
                tttDiv.classList.add("col-sm-4");
                tttDiv.classList.add("col-4");
                tttDiv.classList.add("blank");
                $('<img/>').text("&nbsp;").addClass('img-responsive').appendTo(tttDiv);
                row.appendChild(tttDiv);
            }

            $board.append(row);
            if (i < 2) {
                $("<br>").append($board);
            }
        }
    };
    Board();
        

        //Tracks the cells of the board instance
        //this.$cells = ...

        //Store any other properties that board may have below, such as a reset option
    // Start the game!
    var game = new Game();
    game.init();

});