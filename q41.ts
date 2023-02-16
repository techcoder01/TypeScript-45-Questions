// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



// let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// function show_magicians(magicians) {
//   for (let i = 0; i < magicians.length; i++) {
//     console.log(magicians[i]);
//   }
// }
// show_magicians(magicians);
export default function q41(){
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function showMagicians(magicians: string[]) {
  magicians.forEach(function(magician: string) {
    console.log(magician);
  });
}

showMagicians(magicians);
}
q41();
