// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

export default function q11() {
  console.log("\n"); // works as a br tag

  // Define an array of names
  let names: string[] = ["John", "Jane", "Jim", "Jasmine"];

  // Print each name one by one
  for (let i = 0; i < names.length; i++) {
    console.log("Hello, my name is " + names[i]);
  }

  console.log("\n"); // works as a br tag
}

// Call the function
q11();
