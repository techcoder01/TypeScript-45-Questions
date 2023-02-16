"use strict";
exports.__esModule = true;
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function q43() {
    // Define the original array of magicians
    var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
    // Define the show_magicians function to print the name of each magician
    function show_magicians(magicians) {
        magicians.forEach(function (magician) {
            console.log(magician);
        });
    }
    // Define the make_great function to add "the Great" to each magician's name
    function make_great(magicians) {
        var great_magicians = [];
        magicians.forEach(function (magician) {
            great_magicians.push(magician + ' the Great');
        });
        return great_magicians;
    }
    // Call make_great with a copy of the original array of magicians
    var great_magicians = make_great(magicians.slice());
    // Call show_magicians with both the original array and the new array of great magicians
    console.log("Original magicians:");
    show_magicians(magicians);
    console.log("\nGreat magicians:");
    show_magicians(great_magicians);
}
exports["default"] = q43;
q43();
