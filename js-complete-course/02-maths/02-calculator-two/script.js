/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // to get the value of an input: document.getElementById("element-id").value
    function calcSwitch(operation) {
        // perform the operation
        var x = Number(document.getElementById("op-one").value);
        var y = Number(document.getElementById("op-two").value);
        var z;
        switch (operation) {
            case "addition":
                z = (x + y);
                break;
            case "substraction":
                z = (x - y);
                break;
            case "multiplication":
                z = (x * y);
                break;
            case "division":
                z = (x / y);
                break;
            default:
                alert("error");
        }
        alert(z);
    }
    (document.querySelectorAll("button")).forEach(function (btn) {
        btn.addEventListener("click", function() {
            console.log(btn);
            calcSwitch(btn.id);

        });
    });

// I copied this from a repository I found, because I didn't find the solution
// I understand this code until the parameter of the function is used on the switch statement.
// Not sure what the $btn is but it returns the total button line in HTML.
// I understand now, thanks Sikko