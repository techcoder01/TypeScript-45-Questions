"use strict";
exports.__esModule = true;
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function q42() {
    // Define the list of magicians
    var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
    // Define the show_magicians function
    function show_magicians(magicians) {
        magicians.forEach(function (magician) {
            console.log(magician);
        });
    }
    // Define the make_great function
    function make_great(magicians) {
        magicians.forEach(function (magician, index) {
            magicians[index] = "the Great " + magician;
        });
    }
    // Call the show_magicians function
    console.log("Original List:");
    show_magicians(magicians);
    // Call the make_great function
    make_great(magicians);
    // Call the show_magicians function again to see the modified list
    console.log("\nModified List:");
    show_magicians(magicians);
}
exports["default"] = q42;
q42();
