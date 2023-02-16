"use strict";
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
Object.defineProperty(exports, "__esModule", { value: true });
function q5() {
    let famous_person = "Quaid-e-Azam Muhammad Ali Jinnah";
    let Message = `\"Unity, Faith, and Discipline, the three great principles which I have given out to you will lead us all to success.\" - ${famous_person}`;
    console.log(Message);
}
q5();
exports.default = q5;
