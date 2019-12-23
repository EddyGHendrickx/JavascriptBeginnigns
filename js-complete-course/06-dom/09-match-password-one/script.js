/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


document.getElementById("run").addEventListener("click", function () {
    let pass1 = document.getElementById("pass-one").value;
    let pass2 = document.getElementById("pass-two").value;
    let borderBox1 = document.getElementById("pass-one").style;
    let borderBox2 = document.getElementById("pass-two").style;

    if(pass1 === pass2) {
        alert("Your password is correct!");
        borderBox1.borderColor = "green";
        borderBox2.borderColor = "green";
    }
        else {
        borderBox1.borderColor = "red";
        borderBox2.borderColor = "red";

    }


})

})();
