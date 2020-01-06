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
    var newHeroes = {};



        fetch("http://localhost:12345/_shared/api.json")
            .then(function (response) {
                return response.json();

            })
            .then(function (myJson) {
                document.getElementById("run").addEventListener("click", function(){
                let heroes = myJson.heroes;

                    let inputName = document.getElementById("hero-name").value;
                    let inputAlterEgo = document.getElementById("hero-alter-ego").value;
                    let inputPower = document.getElementById("hero-powers").value;
                    let objectLength = heroes.length + 1;
                    newHeroes = {
                      id: objectLength,
                      name: inputName,
                      AlterEgo: inputAlterEgo,
                      power: {
                          inputPower
                      }
                    };
                    heroes.push(newHeroes);
                    console.log(heroes);
            });
    });
})();
