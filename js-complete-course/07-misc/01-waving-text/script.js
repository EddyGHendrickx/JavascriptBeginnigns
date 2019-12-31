/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


   let text = document.querySelector("#target").innerHTML;
    var sizeOfFont = 0;
    var extraNewThing = "";

    for (i=0; i < text.length; i++){
        var newString = "";
        if (sizeOfFont >= 0 && sizeOfFont < 7) {
            var newThing = newString.concat("", text[i].fontsize(sizeOfFont));
            // console.log(newThing); returns : <font size="0">W</font>
            extraNewThing += newThing;
            sizeOfFont++;
            console.log(sizeOfFont);
        }
        else {
            newThing = newString.concat("", text[i].fontsize(sizeOfFont));
            // console.log(newThing); returns : <font size="0">W</font>
            extraNewThing += newThing;
            sizeOfFont--;
            

            console.log(sizeOfFont);

        }
    }
    console.log(extraNewThing);
    document.querySelector("#target").innerHTML = extraNewThing;
})();
