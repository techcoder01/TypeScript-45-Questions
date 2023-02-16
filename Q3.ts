// Q2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

function q3(){
    let name: string = "tech";
    
    console.log(`Lowercase: ${name.toLowerCase()}`);
    console.log(`Uppercase: ${name.toUpperCase()}`);
    console.log(`Titlecase: ${name.charAt(0).toUpperCase() + name.slice(1)}`);
    
    let sentence: string = "Hello i am abdul hannan";
    
    let words: string[] = sentence.split(" ");
    
    let titleCaseWords: string[] = words.map(function(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    
    let titleCaseSentence: string = titleCaseWords.join(" ");
    
    console.log(titleCaseSentence);
    }

    q3();
    export default q3;
