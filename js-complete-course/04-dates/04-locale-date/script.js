/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

        var today = new Date();
        var todayDay = today.getDate();
        var todayMonth = today.getMonth();
        var todayYear = today.getFullYear();
        var todayHour = today.getHours();
        var todayMinutes = today.getMinutes();
        var DayOfTheWeek = today.getDay();
        switch (DayOfTheWeek) {
            case 0:
                var todayDayOfWeek = "Sunday";
                break;
            case 1:
                var todayDayOfWeek = "Monday";
                break;
            case 2:
                var todayDayOfWeek = "Tuesday";
                break;
            case 3:
                var todayDayOfWeek = "Wednesday";
                break;
            case 4:
                var todayDayOfWeek = "Thursday";
                break;
            case 5:
                var todayDayOfWeek = "Friday";
                break;
            case 6:
                var todayDayOfWeek = "Saturday";
                break;
        }

    switch (todayMonth) {
        case 0:
            var monthWords = "January";
            break;
        case 1:
            var monthWords = "February";
            break;
        case 2:
            var monthWords = "March";
            break;
        case 3:
            var monthWords = "April";
            break;
        case 4:
            var monthWords = "May";
            break;
        case 5:
            var monthWords = "June";
            break;
        case 6:
            var monthWords = "July";
            break;
        case 7:
            var monthWords = "August";
            break;
        case 8:
            var monthWords = "September";
            break;
        case 9:
            var monthWords = "October";
            break;
        case 10:
            var monthWords = "November";
            break;
        case 11:
            var monthWords = "December";
            break;
    }
        console.log(today.getDay());
        console.log(todayDayOfWeek);
        console.log(todayYear);
    document.getElementById("target").innerHTML = `${todayDayOfWeek} ${todayDay} ${monthWords}, ${todayHour}:${todayMinutes}`;
})();
