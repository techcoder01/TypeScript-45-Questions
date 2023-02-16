"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
function q12() {
    console.log("\n");
    // Define an array of names
    let names = ["John", "Jane", "Jim", "Jackie"];
    // Print each name with a greeting using a for loop
    for (let i = 0; i < names.length; i++) {
        console.log("Hello " + names[i] + ", How are you today?");
    }
    console.log("\n");
    // Print each name with a greeting using forEach method
    names.forEach(function (name) {
        console.log("Hello " + name + ", How are you today?");
    });
}
exports.default = q12;
q12();
