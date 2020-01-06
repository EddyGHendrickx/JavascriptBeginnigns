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


        fetch("http://localhost:12345/_shared/api.json")
            .then(function (response) {
                return response.json();

            })
            .then(function (myJson) {
                document.getElementById("run").addEventListener("click", function(){
                var heroes = myJson.heroes;
                heroes.forEach(function (element) {
                    let heroId = document.getElementById("hero-id").value;
                    if (heroId == element.id) {
                        delete heroes[element.id];
                        console.log(heroes);
                    }
                })

            });
    });
})();
