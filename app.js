// Execute this code only AFTER the document is ready
$(document).ready(function() {
  alert("Ya ya")



  function Game() {
    //Create a new instance of player 1 & 2
    this.player1 = x;
    this.player2 = o;
    this.board = (function(){
      $("")
    })();
    //Create the board
    //this.board = ...
  }

  // Remember: prototypes are shared functions between all game instances
  Game.prototype.nextPlayer = function() {
    //Switch players
  };

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    //
  };

  // A starter Player constructor.
  function Player(team) {
    //Is the player X or O?
    //this.team = ...
  };

  // A starter Board constructor.
  function Board() {
    //Tracks the cells of the board instance
    //this.$cells = ...

    //Store any other properties that board may have below, such as a reset option
  };

  // Start the game!
  var game = new Game();
  game.init();

  });
