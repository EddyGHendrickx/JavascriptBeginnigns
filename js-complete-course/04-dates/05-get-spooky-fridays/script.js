/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
document.getElementById("run").addEventListener("click", function whatYearIsIt(thisYear) {
    var d = new Date();
    var month;
    var count = 0;
    for (var month=0; month<12; month++) {
        var d = new Date(thisYear,month,13);
        if(d.getDay() == 5){
            count++;
        }
    }
    return count;
});