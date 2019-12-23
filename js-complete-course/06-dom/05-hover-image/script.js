/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("img").addEventListener("mouseover", function () {
        var before = document.querySelector("img").getAttribute("data-hover");
        document.querySelector("img").setAttribute("src", before);
        console.log(before);


        });

    document.querySelector("img").addEventListener("mouseout", function () {


        var after = document.querySelector("img").getAttribute("src");
        document.querySelector("img").setAttribute("data-hover", after);

    })

})();
