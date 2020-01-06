/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function(){
        fetch("http://localhost:12345/_shared/api.json")
            .then(function (response) {
                return response.json();

            })
            .then(function (myJson) {
                var heroes = myJson.heroes;
                heroes.forEach(function (element) {
                    let templateTarget = document.getElementById("tpl-hero");
                    // console.log(templateTarget);
                    let newTarget = templateTarget.content.cloneNode(true);
                    console.log(newTarget);
                    newTarget.querySelector(".name").innerHTML = element.name;
                    newTarget.querySelector(".alter-ego").innerHTML = element.alterEgo;
                    newTarget.querySelector(".powers").innerHTML = element.abilities;
                    document.getElementById("target").appendChild(newTarget);

                })

            });
    });
})();
