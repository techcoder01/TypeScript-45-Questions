// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
export default function q37(){
function makeShirt(size: string = 'large', message: string = 'I love TypeScript'): void {
  console.log(`You ordered a ${size} shirt with the message "${message}" printed on it.`);
}

makeShirt(); // Large shirt with default message
makeShirt('medium'); // Medium shirt with default message
makeShirt('small', 'JavaScript is awesome'); // Small shirt with custom message
}
q37();