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
    var moveNum = 0; //Keeps track of the move number
    var players = ['X', 'O'];
    var computerPlayer = compPlayer; // index n umber of the computerPlayer
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




Board.prototype.placePiece = function(x, y)
{
    //ensure there's not a piece there already
    if (this.board[x][y] != null)
    {
        var currentSymbol = this.currentSymbol();
        var currentPlayer = this.currentPlayer();

        this.board[x][y] == currentSymbol;


        var game_over_str = '';

        //TODO: continya w/ writing out this truth table.

        this.evaluate() | computer Player is current Player | result
        1                 1

        if (this.evaluate() == ) // the mover won
        {
            if (currentPlayer == this.computerPlayer)
            {
                game_over_str = "Sorry, You lost!";
            }
            else
            {
                game_over_str = "Yay, You won!";
            }
            //TODO: would like to highlight the actual winning moves

        }

        this.moveNum++;
        //TODO: update the mover piece stuff.
        //test whether the game has been won or lost, or drawn, and run the appopriate stuff depending



        //make computerMove if it's computer's turn.

    }



};

// Thoughts: the best way to solve this will be as a tree. The move wins -> 1. The move loses -> -1. It's a draw -> 0.  We're going to use a minimax algorithm on this one, because losing is something we can't do.
// This answer from StackOverflow says it very well: In a nutshell, what you want to do is not to search for the move that has the best possible outcome for you, but rather for the move where the worst possible outcome is as good as possible. If you assume your opponent is playing optimally, you have to assume they will take the move that is worst for you, and therefore you have to take the move that MINimises their MAXimum gain. -- http://stackoverflow.com/a/125872/378622
//Determines the right move to make and makes it
Board.prototype.computerMove = function()
{
    //TODO: if computer starts, then call this based on the game button start


};