"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
function q18() {
    // Store the locations in an array. Make sure the array is not in alphabetical order.
    const placesToVisit = ['Japan', 'Brazil', 'New Zealand', 'Italy', 'Thailand'];
    // Print the array in its original order.
    console.log('\nOriginal order:');
    console.log(placesToVisit);
    // Print the array in alphabetical order without modifying the actual list.
    console.log('\nAlphabetical order:');
    console.log([...placesToVisit].sort());
    // Show that the array is still in its original order by printing it.
    console.log('\nArray still in original order:');
    console.log(placesToVisit);
    // Print the array in reverse alphabetical order without changing the order of the original list.
    console.log('\nReverse alphabetical order:');
    console.log([...placesToVisit].sort().reverse());
    // Show that the array is still in its original order by printing it again.
    console.log('\nArray still in original order:');
    console.log(placesToVisit);
    // Reverse the order of the list. Print the array to show that its order has changed.
    console.log('\nReversed order:');
    console.log([...placesToVisit].reverse());
    // Reverse the order of the list again. Print the list to show it’s back to its original order.
    console.log('\nBack to original order:');
    console.log([...placesToVisit].reverse());
    // Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
    console.log('\nAlphabetical order:');
    console.log([...placesToVisit].sort());
    // Sort to change the array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
    console.log('\nReverse alphabetical order:');
    console.log([...placesToVisit].sort().reverse());
}
exports.default = q18;
q18();
