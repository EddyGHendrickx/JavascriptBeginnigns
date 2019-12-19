/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

document.getElementById("run").addEventListener("click", function () {
    var rand1 = Math.floor(Math.random()*100);
    var rand2 = Math.floor(Math.random()*100);
    var rand3 = Math.floor(Math.random()*100);
    var rand4 = Math.floor(Math.random()*100);
    var rand5 = Math.floor(Math.random()*100);
    var rand6 = Math.floor(Math.random()*100);
    var rand7 = Math.floor(Math.random()*100);
    var rand8 = Math.floor(Math.random()*100);
    var rand9 = Math.floor(Math.random()*100);
    var rand10 = Math.floor(Math.random()*100);

    var randArray = [rand1, rand2, rand3, rand4, rand5, rand6, rand7, rand8, rand9, rand10];
    document.getElementById("n-1").innerHTML = rand1;
    document.getElementById("n-2").innerHTML = rand2;
    document.getElementById("n-3").innerHTML = rand3;
    document.getElementById("n-4").innerHTML = rand4;
    document.getElementById("n-5").innerHTML = rand5;
    document.getElementById("n-6").innerHTML = rand6;
    document.getElementById("n-7").innerHTML = rand7;
    document.getElementById("n-8").innerHTML = rand8;
    document.getElementById("n-9").innerHTML = rand9;
    document.getElementById("n-10").innerHTML = rand10;
    let sortedArray = randArray.sort((a, b) => {return a-b;});
    var arraySum = rand1 + rand2 + rand3 + rand4 + rand5 + rand6 + rand7 + rand8 + rand9 + rand10;
    var arrayAverage = arraySum/(randArray.length);
    document.getElementById("min").innerHTML = sortedArray[0];
    document.getElementById("max").innerHTML = sortedArray[9];
    document.getElementById("sum").innerHTML = arraySum;
    document.getElementById("average").innerHTML = arrayAverage;

    var arraySum = rand1 + rand2 + rand3 + rand4 + rand5 + rand6 + rand7 + rand8 + rand9 + rand10;
    console.log(randArray.length);
})
})();
