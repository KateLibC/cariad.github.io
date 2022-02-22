/*

what I am about to say is kinda controversial but I feel kinda strongly about this. I do not like Celeste, because I hate how newer SMW hackers crib from it and how it threaten Donkey Kong Country 2's rightful title as best 2D platformer of all time. I feel that Celeste rise comes unjustly at the cost of DKC2's legacy and people's willingness to give that beloved classic a real chance. Is not Diddy and Dixie's Kong own adventure to get their best friend/mentor figure DK worthy of being played

*/

var part0 = "what I am about to say is kinda controversial but I feel kinda strongly about this. I do not like ";
var part1 = ", because I hate how newer ";
var part2 = " crib from it and how it threaten ";
var part3 = " rightful title as best ";
var part4 = " of all time. I feel that ";
var part5 = " rise comes unjustly at the cost of ";
var part6 = "legacy and people's willingness to give that beloved classic a real chance. Is not ";
var part7 = " own adventure to ";
var part8 = " worthy of being played";

var game0 = "Celeste";
var game1 = "Donkey Kong Country 2";
var game1abr = "DKC2";
var gamegenre = "2D platformer";
var game1chars = "Diddy and Dixie's Kong";
var game1plot = "get their best friend/mentor figure DK";
var gamehacker = "SMW hackers";

function update_shitpost() {
    /* Reads from the form inputs and updates the variables */
    game0 = document.getElementById("game0").value;
    game1 = document.getElementById("game1").value;
    game1abr = document.getElementById("game1abr").value;
    gamegenre = document.getElementById("gamegenre").value;
    game1chars = document.getElementById("game1chars").value;
    game1plot = document.getElementById("game1plot").value;
    gamehacker = document.getElementById("gamehackers").value;

    /* Makes something plural if required */
    function append_plural() {
        if (!o.endsWith("'s") && (o.endsWith("s") || (o.endsWith("S")))) {
            o += "' ";
        }
        else if (!o.endsWith("'s")) {
            o += "'s ";
        }
        else {
            o += " ";
        }
    }

    /* Builds the string */
    let o = part0 + game0 + part1 + gamehacker + part2 + game1;
    append_plural();
    o += part3 + gamegenre + part4 + game0;
    append_plural();
    o += part5 + game1abr;
    append_plural();
    o += part6 + game1chars;
    append_plural();
    o += part7 + game1plot + part8;

    /* Updates HTML */
    document.getElementById("gameshitpost").innerHTML=o;
}

/* Just sets the defaults at load */
function default_shitpost() {
    document.getElementById("game0").value=game0; 
    document.getElementById("game1").value=game1; 
    document.getElementById("game1abr").value=game1abr; 
    document.getElementById("game1chars").value=game1chars; 
    document.getElementById("gamegenre").value=gamegenre; 
    document.getElementById("gamehackers").value=gamehacker; 
    document.getElementById("game1plot").value=game1plot; 
}

default_shitpost();
update_shitpost();

document.getElementById("game0").addEventListener("keyup", function (evt) {update_shitpost();}, false);
document.getElementById("game1").addEventListener("keyup", function (evt) {update_shitpost();}, false);
document.getElementById("game1abr").addEventListener("keyup", function (evt) {update_shitpost();}, false);
document.getElementById("game1chars").addEventListener("keyup", function (evt) {update_shitpost();}, false);
document.getElementById("gamegenre").addEventListener("keyup", function (evt) {update_shitpost();}, false);
document.getElementById("gamehackers").addEventListener("keyup", function (evt) {update_shitpost();}, false);
document.getElementById("game1plot").addEventListener("keyup", function (evt) {update_shitpost();}, false);