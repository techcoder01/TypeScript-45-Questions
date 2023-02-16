// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

function q6() {
    let Name1 = "\t\n               John Doe    \n\t";
    console.log(Name1);
    console.log(Name1.trim());
    let name2 = "\t\n Hello World \n\t";
    console.log(name2.trim());
  }
  q6()
  export default q6;
  