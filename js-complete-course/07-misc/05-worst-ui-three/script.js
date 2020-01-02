/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    (function() {
        let buttons = document.querySelectorAll("button");
        document.getElementById("target").innerHTML = +0460000000;
        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                var newNumber;
                var targetText = +document.getElementById("target").innerHTML;
                if (button.id === "fix-part-four"){
                    let randomNumber = Math.floor(Math.random()*10000);
                    let randomString = randomNumber.toString();
                    console.log(randomString);
                    let randomString1 = randomString.charAt(0);
                    let randomString2 = randomString.charAt(1);
                    document.getElementById("part-four").value = randomString1 + randomString2;
                }
                if (button.id === "fix-part-three"){
                    let randomNumber = Math.floor(Math.random()*10000);
                    let randomString = randomNumber.toString();
                    console.log(randomString);
                    let randomString1 = randomString.charAt(0);
                    let randomString2 = randomString.charAt(1);
                    document.getElementById("part-three").value = randomString1 + randomString2;
                }
                if (button.id === "fix-part-two"){
                    let randomNumber = Math.floor(Math.random()*10000);
                    let randomString = randomNumber.toString();
                    console.log(randomString);
                    let randomString1 = randomString.charAt(0);
                    let randomString2 = randomString.charAt(1);
                    document.getElementById("part-two").value = randomString1 + randomString2;
                }
                if (button.id === "fix-part-one"){
                    function getRandomInt(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);
                        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
                    }
                    let randomNumber = getRandomInt(460, 499);
                    let randomString = randomNumber.toString();
                    console.log(randomString);
                    let randomString1 = randomString.charAt(0);
                    let randomString2 = randomString.charAt(1);
                    let randomString3 = randomString.charAt(2);

                    document.getElementById("part-one").value = randomString1 + randomString2 + randomString3;
                }

                document.getElementById("target").innerHTML = 0 +
                    document.getElementById("part-one").value +
                    document.getElementById("part-two").value +
                    document.getElementById("part-three").value +
                    document.getElementById("part-four").value
            });
        })


    })();
})();
