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
        var input = document.getElementById("pass-one").value;
        var inputLength = input.length;


            function checkNumber(i) {
                for(let i=0; i > inputLength; i++)
                if (input.charAt(isNaN(i))) {
                    return false;
                } else {
                    return true;
                }
            }

        if(checkNumber(i)==true && inputLength >= 8){
            document.getElementById("validity").innerHTML = "OK";
        }
        else {
            document.getElementById("validity").innerHTML = "Not OK";

        }
    })
})();
