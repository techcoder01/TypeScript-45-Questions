"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
function example14() {
    const name1 = prompt("Enter name 1:");
    const name2 = prompt("Enter name 2:");
    const name3 = prompt("Enter name 3:");
    // Create invitation messages
    const message1 = `Dear ${name1}, I would like to invite you to dinner and hear more about your achievements and insights.`;
    const message2 = `Dear ${name2}, your leadership and activism have inspired many. It would be an honor to have you over for dinner.`;
    const message3 = `Dear ${name3}, your literary works have stood the test of time, and I would love to have the opportunity to talk to you about your creative process.`;
    // Display messages on console
    console.log(message1);
    console.log(message2);
    console.log(message3);
}
