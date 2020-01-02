/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let randomX = Math.floor(Math.random()*99) + 1;
    let GuessedTimes = 0;
    GuessMyNumber();
    function GuessMyNumber() {
        var guessedNumber = prompt("Guess my Number");

        if (guessedNumber == randomX) {

            alert(`You guessed it in ${GuessedTimes} times!`);
        } else if (guessedNumber > randomX) {
            alert("Guess Lower");
            GuessedTimes++;
            GuessMyNumber();
        } else {
            alert("Guess Higher");
            GuessedTimes++;
            GuessMyNumber();
        }

    }
})();
