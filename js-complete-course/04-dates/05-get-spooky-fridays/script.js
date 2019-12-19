/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById("run").addEventListener("click", function(){
    var month = 0;
    var weekDay = new Date().getDay();
    var day = new Date().getDate();
    var inputYear = +document.getElementById("year").value;
    var thisTime = new Date();
    thisTime.setFullYear(inputYear, month, day, weekDay);
    console.log(thisTime);
    })

})();

