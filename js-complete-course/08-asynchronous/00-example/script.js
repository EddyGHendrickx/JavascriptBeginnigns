/* becode/javascript
 *
 * /10-asynchronous/00-example/script.js - 10.0: exemple d'asynchronicité
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(function () {
    const setupIntervalMessage = function(label, delay) {
        let count = 0;

        return setInterval(
            function () {
                console.log(`${label}:`, ++count
                )} , delay);
    };

    let intervals = [];

    document.getElementById("run").addEventListener("click", function() {


            intervals = intervals.filter(clearInterval);
            console.clear();


        intervals.push(setupIntervalMessage("one", 1000));
        intervals.push(setupIntervalMessage("two", 1333));
        intervals.push(setupIntervalMessage("three", 2500));
        intervals.push(setupIntervalMessage("four", 5000));
        intervals.push(setupIntervalMessage("five", 10000));
        console.log(intervals.length);



    });
})();
