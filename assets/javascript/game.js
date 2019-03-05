var targetNumber = Math.floor((Math.random() * 102) + 19);
// var crystalRandomNumber = Math.floor((Math.random() * 12) +1);

$('#target').append(targetNumber);
// ^ sets the target number and appears in the id

// keeps track of wins and losses
var wins = 0;
var losses = 0;

// displays the wins and losses on the scoreboard
$('#wins').text(wins);
$('#losses').text(losses);

// initial random values for each crystal
var roundBlue = Math.floor((Math.random() * 12) +1);
var squareBlue = Math.floor((Math.random() * 12) +1);
var purple = Math.floor((Math.random() * 12) +1);
var ruby = Math.floor((Math.random() * 12) +1);



var counter = 0;

// resets all values(both target and crystals) to new numbers
function reset() {
    targetNumber = Math.floor((Math.random() * 102) + 19);
    $('#target').text(targetNumber);
    roundBlue = Math.floor((Math.random() * 12) +1);
    squareBlue = Math.floor((Math.random() * 12) +1);
    purple = Math.floor((Math.random() * 12) +1);
    ruby = Math.floor((Math.random() * 12) +1);
}

function won() {
    alert('Nice job! You reached the target score!');
    wins++;
    $('#wins').text(wins);
    reset();
}

function lost() {
    alert('Aw man.. it looks like you lost this time');
    losses++;
    $('#losses').text(losses);
    reset();
}




$(document).ready(function() {

    $("#target").text(targetNumber);

// on-click events for individual crystals
    $("#round-blue").on("click", function() {
        counter = counter + roundBlue;
        console.log(counter);
        targetNumber = targetNumber - roundBlue;
        $('#target').text(targetNumber);
        $('#round-blue').append('<p>This is ' + roundBlue + '</p>');
    // add a function on line 49 that clears the amount everytime that an image is clicked


        if (targetNumber === 0) {
            won();
            reset();
        };

        if (targetNumber < 0) {
            lost();
            reset();
        }
    });

    $("#square-blue").on("click", function() {
        counter = counter + squareBlue;
        console.log(counter);
        targetNumber = targetNumber - squareBlue;
        $('#target').text(targetNumber);
        $('#square-blue').append('<p>This is ' + squareBlue + '</p>');
    // add a function on line 49 that clears the amount everytime that an image is clicked


        if (targetNumber === 0) {
            won();
            reset();
        }

        if (targetNumber < 0) {
            lost();
            reset();
        }
    });
    $("#purple").on("click", function() {
        counter = counter + purple;
        console.log(counter);
        targetNumber = targetNumber - purple;
        $('#target').text(targetNumber);
        $('#purple').append('<p>This is ' + purple + '</p>');
    // add a function on line 49 that clears the amount everytime that an image is clicked


        if (targetNumber === 0) {
            won();
            reset();
        }

        if (targetNumber < 0) {
            lost();
            reset();
        }
    });
    $("#ruby").on("click", function() {
        counter = counter + ruby;
        console.log(counter);
        targetNumber = targetNumber - ruby;
        $('#target').text(targetNumber);
        $('#ruby').append('<p>This is ' + ruby + '</p>');

    // add a function on line 49 that clears the amount everytime that an image is clicked
        
        if (targetNumber === 0) {
            won();
            reset();
        }

        if (targetNumber < 0) {
            lost();
            reset();
        }
    });


});


console.log(roundBlue + ' :round');
console.log(ruby + ' :ruby');
console.log(purple + ' :purple');
console.log(squareBlue + ' :square');

