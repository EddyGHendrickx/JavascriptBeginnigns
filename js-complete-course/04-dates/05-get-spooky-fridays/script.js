/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
document.getElementById("run").addEventListener("click", function numberOfFridaythe13thsIn(jahr){
    var jahr = document.getElementById("year").value;
    var d = new Date();
    var counter = 0;
    var month;

    for(month=0;month<12;month++)
    {
        d.setFullYear(jahr, month,13);
        if (d.getDay() == 5)
        {
            counter++;
        }
    }

    console.log(numberOfFridaythe13thsIn(jahr));
});
