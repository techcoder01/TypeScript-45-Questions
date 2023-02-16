"use strict";
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
exports.__esModule = true;
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
function q34() {
    var pizzas = ['Margherita', 'Pepperoni', 'Hawaiian'];
    // for (let i = 0; i < pizzas.length; i++) {
    //   console.log(`I like ${pizzas[i]} pizza.`);
    // }
    pizzas.forEach(function (pizza) {
        console.log("I like ".concat(pizza, " pizza"));
    });
    console.log("\nPizza is my favorite food.");
    console.log("I could eat it every day and never get tired of it.");
    console.log("There's just something about the combination of bread, cheese, and tomato sauce that makes it irresistible.");
    console.log("I really love pizza!");
}
exports["default"] = q34;
q34();
