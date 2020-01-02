/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let button = document.getElementById("increment");
    let counter = document.getElementById("target");
    counter.innerHTML = localStorage.getItem("aantalKliks");

    button.addEventListener("click", function () {
        counter.innerHTML++;
        localStorage.setItem("aantalKliks", counter.innerHTML);
    });

})();
