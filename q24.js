"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
exports.__esModule = true;
// Tests for equality and inequality with strings:
function q24() {
    var fruit1 = "apple";
    var fruit2 = "orange";
    console.log(fruit1 === fruit2); // false
    console.log(fruit1 !== fruit2); // true
    // Tests using the lower case function:
    var text = "Hello World";
    console.log(text.toLowerCase() === "hello world"); // true
    // Numerical tests:
    var x = 5;
    var y = 10;
    console.log(x == 5); // true
    console.log(x < y); // true
    console.log(x >= 4); // true
    // Tests using "and" and "or" operators:
    var isSunny = true;
    var isWarm = false;
    console.log(isSunny && isWarm); // false
    console.log(isSunny || isWarm); // true
    // Test whether an item is in an array:
    var fruits3 = ["apple", "banana", "orange"];
    console.log(fruits3.includes("banana")); // true
    console.log(fruits3.includes("grape")); // false
    // Test whether an item is not in an array:
    var fruits4 = ["apple", "banana", "orange"];
    console.log(!fruits4.includes("grape")); // true
    console.log(!fruits4.includes("apple")); // false
}
exports["default"] = q24;
q24();
