/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function plus() {
    let Number1 = document.getElementById("op-one").value;
    let Number2 = document.getElementById("op-two").value;
    let Optellen = Number(Number1) + Number(Number2);
    alert (`The addition is ${Optellen}`);

    // or  let Number1 = +document.getElementById("op-one").value;
    //     let Number2 = +document.getElementById("op-two").value;
    //     let Optellen = (Number1) + (Number2);
    //     alert (`The addition is ${Optellen}`);
}

function min() {
    let Number1 = +document.getElementById("op-one").value;
    let Number2 = +document.getElementById("op-two").value;
    let Optellen = (Number1) - (Number2);
    alert(`The substraction is ${Optellen}`);
}

function maal() {
    let Number1 = +document.getElementById("op-one").value;
    let Number2 = +document.getElementById("op-two").value;
    let Optellen = (Number1) * (Number2);
    alert(`The multiplication is ${Optellen}`);
}

function delen() {
    let Number1 = +document.getElementById("op-one").value;
    let Number2 = +document.getElementById("op-two").value;
    let Optellen = (Number1) / (Number2);
    alert(`The division is ${Optellen}`);
}

// Sorry for the Dutch function names. The variable 'Addition' didn't work so I resorted to simpler solutions