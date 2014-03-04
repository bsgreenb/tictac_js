//Tic Tac Toe in Javascript (Author: Ben G)

//Thoughts: I'm gonna do in JS because I want a graphical front-end, and that'll be the fastest way to do it

//TODO: Frontend/jquery
//TODO: seperate out Board class from the actual playing.

function Board(compPlayer = 1)
{
	//we'll have a 3X3 grid, which will use 'X' or 'O' to indicate placement.  null to start.
	var board = [
							[null, null, null],
							[null, null, null],
							[null, null, null]
							];

    var active = true; //active tells us whether the game is playable.  set to false to disable the board when the game ends.
    var moveNum = 0; //Keeps track of the move number
    var players = ['X', 'O'];
    var computerPlayer = compPlayer; // index number of the computerPlayer.  either 0 or 1
};

// returns index of current player
Board.prototype.currentPlayer = function()
{
    return this.moveNum % 2;
}

//returns X or O depending on the current move
Board.prototype.currentSymbol = function()
{
    return this.players[this.currentPlayer()];
};

//TODO: test that I have this right
Board.prototype.resetBoard = function () {
	this.board = new Board();
};

//Returns 1 if X's won, 0 if neutral position, -1 if O's won
Board.prototype.evaluate = function(playerNum)
{
    // default to current player
    if (playerNum === undefined)
    {
        playerNum = this.currentPlayer();
    }

    var otherPlayer = 1 - playerNum;
    //if it's a win for me, then return 1
    if (this.checkForWin(players[playerNum]))
    {
        return 1; // this player won
    }
    if (this.checkForWin(players[otherPlayer]))
    {
        return -1; //the other player one
    }
    return 0; // neutral position, no win yet.
};

//Locks the board and displays the provided game over message.
Board.prototype.gameOver = function(msg)
{
    this.active = false;
    console.log(msg); //TODO: make this update stuff on the DOM rather than just the console.
}


Board.prototype.placePiece = function(x, y)
{
    //it's legal to click a spot if the game is ongoing (this.active) and no one has played there yet.
    if (this.active && this.board[x][y] != null)
    {
        this.active = false; // disable clicking of the board while we're doing our stuff.  this is our lock to prevent user-confusing race conditions.
        var currentSymbol = this.currentSymbol();
        var currentPlayer = this.currentPlayer();

        this.board[x][y] == currentSymbol;

        var game_result = this.evaluate()
        if (game_result == 0 && board_is_full)
        {
            //draw, because
            gameOver("The game was a draw. Click New Game to start again");

            return;

        }
        else if (game_result != 0) //somebody won
        {
            //TODO: i'd like to make it show how the win occurred through highlights
            if ((this.evaluate() == 1) ^ (currentPlayer == this.computerPlayer)) // bitwise xor lets us simplify the logic :)
            {
                //TODO: write to them that they've won.
                return;
            }
            else
            {
                //you lose
                return;
            }

        }

        //we update moveNum if the game isn't over.
        this.moveNum++;

        //If it's the computer's turn, we want to have them move
        if (this.currentPlayer == this.computerPlayer)
        {
            this.computerMove();

        }
        this.active = true; // the user can either move immediately, or after the computer has moved.  this is our lock to prevent race conditions.
    }



};

// Thoughts: the best way to solve this will be as a tree. The move wins -> 1. The move loses -> -1. It's a draw -> 0.  We're going to use a minimax algorithm on this one, because losing is something we can't do.
// This answer from StackOverflow says it very well: In a nutshell, what you want to do is not to search for the move that has the best possible outcome for you, but rather for the move where the worst possible outcome is as good as possible. If you assume your opponent is playing optimally, you have to assume they will take the move that is worst for you, and therefore you have to take the move that MINimises their MAXimum gain. -- http://stackoverflow.com/a/125872/378622
//Determines the right move to make and makes it
Board.prototype.computerMove = function()
{
    //TODO: if computer starts, then call this based on the game button start


};