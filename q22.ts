// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
export default function q22(){
const arr :number[] = [1, 2, 3];

// Accessing an index that doesn't exist in the array
console.log(arr[3]); // Produces an index error

// Correcting the error
console.log(arr[2]); // Outputs 3
}
q22();