var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false){

    guess = prompt('To fire at my battleship, please enter a number between 0 - 6'); // user's answer gets assigned to the variable guess
    // compare the user's input to valid input values

    if (guess < 0 || guess > 6) {
        
        // tell the user to get a valid Number
        alert('Please enter a valid number (between 0 and 6)');
    }

    else {
        // add one to guesses variable
        guesses = guesses + 1;
    }

} 
    

        
//         if the guess matches a location
//             add 1 to the number of hits

//                 if the number of hits is 3
//                     set isSunk to true
//                     tell user 'You sunk my battleship!';
//                 end if

//         end if

//     end else 

// end while loop

// show user stats



// consider math.random
// consider gridsize, number of ships, location of ships already placed, how long each ship is