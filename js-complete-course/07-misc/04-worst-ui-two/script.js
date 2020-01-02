/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let buttons = document.querySelectorAll("button");
    document.getElementById("target").innerHTML = 460000000;
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var newNumber;
            var targetText = +document.getElementById("target").innerHTML;
            if (button.id === "part-four"){
                newNumber = +document.getElementById("target").innerHTML;
                document.getElementById("target").innerHTML = newNumber + 1;
            }
            if (button.id === "part-three"){
                newNumber = +document.getElementById("target").innerHTML;
                document.getElementById("target").innerHTML = newNumber + 100;
            }
            if (button.id === "part-two"){
                newNumber = +document.getElementById("target").innerHTML;
                document.getElementById("target").innerHTML = newNumber + 10000;
            }
            if (button.id === "part-one"){
                newNumber = +document.getElementById("target").innerHTML;
                document.getElementById("target").innerHTML = newNumber + 1000000;
            }
        });
    })


})();
