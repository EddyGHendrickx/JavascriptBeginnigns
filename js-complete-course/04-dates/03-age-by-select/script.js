/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function(){

        var visitorBirthDay = document.getElementById("dob-day").value;
        var visitorBirthMonth = document.getElementById("dob-month").value;
        var visitorBirthYear = document.getElementById("dob-year").value;
        var birthDay = (`${visitorBirthMonth}/${visitorBirthDay}/${visitorBirthYear}`);
        const visitorBirthDate = new Date(`'${visitorBirthMonth}/${visitorBirthDay}/${visitorBirthYear}'`);
        var today = new Date();
        var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
        const diffTime = date - visitorBirthDate;

        var ageYear = today.getFullYear() - visitorBirthYear;
        if (visitorBirthMonth > today.getMonth()) {
            alert(`your age is ${ageYear}`);
        } else if (visitorBirthMonth = today.getMonth() && visitorBirthDay >= today.getDay()) {
            alert(`your age is ${ageYear}`);
        } else {
            alert(`your age is ${ageYear - 1}`);
        }

        console.log(ageYear);
        console.log(birthDay);
        console.log(diffTime);
    });
})();
