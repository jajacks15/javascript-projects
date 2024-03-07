const whoWon = require("../RPS.js");

describe ("whoWon", function(){
    test ("returns 'TIE!' when player1 === player2", function(){
        let output = whoWon("rock","rock");
        expect(output).toEqual("TIE!");
    });

    test ("returns 'Player 2 wins!' when player1 === 'rock' && player2 === 'paper", function(){
        let output = whoWon("rock","paper");
        expect(output).toEqual("Player 2 wins!");
    });

    test ("returns 'Player 2 wins!' when player1 === 'paper' && player2 === 'scissors'", function(){
        let output = whoWon("paper","scissors");
        expect(output).toEqual("Player 2 wins!");
    });

    test ("returns 'Player 2 wins!' when player1 === 'scissors' && player2 === 'rock'", function(){
        let output = whoWon("scissors","rock");
        expect(output).toEqual("Player 2 wins!");
    });

    test ("returns 'Player 1 wins!' if player1 === 'paper' && player2 === 'rock'", function(){
        let output = whoWon("paper","rock");
        expect(output).toEqual("Player 1 wins!");
    });
    
})