/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById("pass-one").addEventListener("keyup", function () {
        let input = document.getElementById("pass-one");

        let number = 0;
        let inputValue = input.value;
        let inputTotal = inputValue.length;

        for (i = 0; i < inputTotal; i++) {
            let string = inputValue.charAt(i);


            for (b = 0; b < 9; b++) {


                if (b === parseInt(string)) {
                    number++;
                }}}


        if ((number >= 2) && (inputTotal >= 8)) {
            document.getElementById("validity").innerHTML = "Ok";
        }
        else {
            document.getElementById("validity").innerHTML = "Not Ok";

        }
    });

})();