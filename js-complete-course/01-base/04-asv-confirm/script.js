/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function button() {
    let age = document.getElementById(`Age`).value;
    let gender = document.getElementById(`Gender`).value;
    let residency = document.getElementById(`Residency`).value;


    let c = confirm(`Your age is ${age}. You identify as ${gender} and you live in ${residency}?`);

    function denied() {
        document.getElementById()
    }

    if (c == true) {
        txt = "You pressed OK!";
    } else {
        alert(`Try again`);
        document.getElementById('Age').value = ``;
        document.getElementById('Gender').value = ``;
        document.getElementById('Residency').value = ``;

    }
}
