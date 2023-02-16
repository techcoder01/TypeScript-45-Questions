"use strict";
exports.__esModule = true;
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function q44() {
    function makeSandwich() {
        var ingredients = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ingredients[_i] = arguments[_i];
        }
        console.log("Making a sandwich with the following ingredients:");
        ingredients.forEach(function (ingredient) {
            console.log("- " + ingredient);
        });
        console.log("Enjoy your sandwich!\n");
    }
    // Call the function with different numbers of arguments
    makeSandwich("bread", "cheese", "ham");
    makeSandwich("bread", "peanut butter", "jelly");
    makeSandwich("bread", "turkey", "lettuce", "tomato", "mayo");
}
exports["default"] = q44;
q44();
