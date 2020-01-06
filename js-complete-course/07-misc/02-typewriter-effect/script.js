/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let i = 0;
    let targetText = document.getElementById("target").innerHTML;

    document.getElementById("target").innerHTML="";


    function typeWriter(){

        if (i < targetText.length) {
            document.getElementById("target").innerHTML += targetText.charAt(i);
            i++;
            //random speed
            let timeout = Math.round(Math.random() * 5000);
            setInterval(typeWriter, timeout);
        }

    }


    typeWriter();


})();


//for(i = 1; i < badge_arr.length; i++){
//     (function(i){
//         setTimeout(function(){
//             responseStr += badge_arr[i];
//             //Create growl notification
//             //badge info echoed back will be of the form
//             //Earned badge: name: description: imgSource
//             var badge_info = badge_arr[i].split(':');
//             var title = 'NEW BADGE UNLOCKED';
//             var text = 'You just unlocked the badge '+badge_info[0] +
//                        ': '+badge_info[1];
//             var img = badge_info[2];
//             createGrowl(title, text, img);
//         }, 1000 * i);
//     }(i));
// }