// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
export default function q32(){
// Make a list of current users
const current_users: string[] = ['john21', 'jane', 'bob', 'alice', 'mark'];

// Make a list of new users
const new_users: string[] = ['jim23', 'JOHN21', 'tom', 'sarah', 'bob'];

// Loop through new users and check if they're unique
for (let i = 0; i < new_users.length; i++) {
  let isUnique = true;
  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    console.log(`${new_users[i]} is available`);
  } else {
    console.log(`${new_users[i]} is not available, please enter a new username`);
  }
}
}
q32();
