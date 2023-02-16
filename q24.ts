// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings:
export default function q24(){
let fruit1: string = "apple";
let fruit2: string = "orange";
console.log(fruit1 === fruit2); // false
console.log(fruit1 !== fruit2); // true

// Tests using the lower case function:
let text: string = "Hello World";
console.log(text.toLowerCase() === "hello world"); // true

// Numerical tests:
let x: number = 5;
let y: number = 10;
console.log(x == 5); // true
console.log(x < y); // true
console.log(x >= 4); // true

// Tests using "and" and "or" operators:
let isSunny: boolean = true;
let isWarm: boolean = false;
console.log(isSunny && isWarm); // false
console.log(isSunny || isWarm); // true

// Test whether an item is in an array:
let fruits3: string[] = ["apple", "banana", "orange"];
console.log(fruits3.includes("banana")); // true
console.log(fruits3.includes("grape")); // false

// Test whether an item is not in an array:
let fruits4: string[] = ["apple", "banana", "orange"];
console.log(!fruits4.includes("grape")); // true
console.log(!fruits4.includes("apple")); // false
}
q24();