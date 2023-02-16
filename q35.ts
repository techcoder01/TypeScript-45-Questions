// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

// • Modify your program to print a statement about each animal, such as A dog would make a great pet.

// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

export default function q35(){
const animals: string[] = ["Dogs", "Cats", "Rabbits"];

animals.forEach(function(animal: string) {
  console.log(animal);
});

console.log("");

animals.forEach((animal: string) => {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
});

console.log("They are all common household pets.");
console.log("Any of these animals would make a great pet!");
}
q35();