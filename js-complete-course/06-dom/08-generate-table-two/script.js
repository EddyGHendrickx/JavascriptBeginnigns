/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target");
    let newTable = document.createElement("table");
    target.appendChild(newTable);
    for(let i=0;i < 10; i++) {
        let row = newTable.insertRow();
        for(let o = 0; o < 10; o++) {
            let column = row.insertCell();
            column.innerHTML = (o+1)*(i+1);
        }
    }
})();
