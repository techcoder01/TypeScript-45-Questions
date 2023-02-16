"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
exports.__esModule = true;
// let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// function show_magicians(magicians) {
//   for (let i = 0; i < magicians.length; i++) {
//     console.log(magicians[i]);
//   }
// }
// show_magicians(magicians);
function q41() {
    var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
    function showMagicians(magicians) {
        magicians.forEach(function (magician) {
            console.log(magician);
        });
    }
    showMagicians(magicians);
}
exports["default"] = q41;
q41();
