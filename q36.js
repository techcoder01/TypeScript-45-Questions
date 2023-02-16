"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
exports.__esModule = true;
function q36() {
    function make_shirt(size, message) {
        console.log("You ordered a ".concat(size, " shirt with the message \"").concat(message, "\" printed on it."));
    }
    make_shirt('medium', 'Hello, World!');
}
exports["default"] = q36;
q36();
