    $(document).ready(function() {
                    $("#startButton").on("click", function() {
                crystalGame.reset();
                gameStart();
            });
        
    });



    //going to try to use an object this time:
    var crystalGame = {
        magicNumber: randomNumber(19, 120),
        crystalValue1: randomNumber(1, 12),
        crystalValue2: randomNumber(1, 12),
        crystalValue3: randomNumber(1, 12),
        crystalValue4: randomNumber(1, 12),
        wins: 0,
        losses: 0,
        currentScore: 0,
        gameOver: false,
        reset: function() {
            $("#currentScore").html(0);
            $("#result").html("");
            this.magicNumber = randomNumber(19,120);
            $("#magicNumber").html(this.magicNumber);
            this.gameOver=false;
            crystalGame.currentScore=0;
            $("img").css("cursor","pointer");
        }

    }

    //function to generate a random number between two values:
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    //function for game logic:
    function gameStart() {
            //show the crystals only when the game starts
            $("#crystals").html('<h3>Choose a crystal:</h3><img id="crystal1" src="assets/images/jewel1.png" alt="crystal1.png"><img id="crystal2" src="assets/images/jewel2.png" alt="crystal2.png"><img id="crystal3" src="assets/images/jewel3.png" alt="crystal3.png"><img id="crystal4" src="assets/images/jewel4.jpg" alt="crystal4.png">');
            //update div with magicNumber:
            $("#magicNumber").html(crystalGame.magicNumber);

            //attach events to crystals
            $("#crystal1").on("click", function() {
                if (!crystalGame.gameOver) {
                crystalGame.currentScore += crystalGame.crystalValue1;
                //update div with currentScore:
                $("#currentScore").html(crystalGame.currentScore);
                checkWinner();}
            });

            //attach events to crystals
            $("#crystal2").on("click", function() {
                if (!crystalGame.gameOver) {
                crystalGame.currentScore += crystalGame.crystalValue2;
                //update div with currentScore:
                $("#currentScore").html(crystalGame.currentScore);
                checkWinner();}
            });

            //attach events to crystals
            $("#crystal3").on("click", function() {
                if (!crystalGame.gameOver) {
                crystalGame.currentScore += crystalGame.crystalValue3;
                //update div with currentScore:
                $("#currentScore").html(crystalGame.currentScore);
                checkWinner();}
            });

            //attach events to crystals
            $("#crystal4").on("click", function() {
                if (!crystalGame.gameOver) {
                crystalGame.currentScore += crystalGame.crystalValue4;
                //update div with currentScore:
                $("#currentScore").html(crystalGame.currentScore);
                checkWinner();}
            });
        
    }

    function checkWinner() {
        if (crystalGame.currentScore === crystalGame.magicNumber) {
            $("#result").html("YOU WIN!");
            crystalGame.gameOver = true;
            crystalGame.wins++;
            $("#wins").html(crystalGame.wins);
            $("img").css("cursor","not-allowed");
        } else if (crystalGame.currentScore > crystalGame.magicNumber) {
            $("#result").html("YOU LOSE!");
            crystalGame.gameOver = true;;
            crystalGame.losses++;
            $("#losses").html(crystalGame.losses);
            $("img").css("cursor","not-allowed");
        }
    }
