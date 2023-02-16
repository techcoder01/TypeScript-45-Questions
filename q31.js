"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
exports.__esModule = true;
// • Remove all of the usernames from your array, and make sure the correct message is printed.
function q31() {
    var usernames = []; // empty array
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        usernames.forEach(function (username) {
            if (username === 'admin') {
                console.log("Hello admin, would you like to see a status report?");
            }
            else {
                console.log("Hello ".concat(username, ", thank you for logging in again."));
            }
        });
    }
}
exports["default"] = q31;
q31();
