/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function () {

        var factor = function (number) {
            var result = 1;

            for (var i = number; i > 1; i--) {
                result *= i;
            }
            return result;
        };


        let myInput = document.getElementById("number").value;
        alert(factor(myInput));

    });
})();
// I copied this from Steve but I promise I understand