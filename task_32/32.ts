// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



let current_users = ["hassan", "ebaad", "taha", "hamza", "ali"];
let new_users = ["taha", "asif", "kamran", "asad", "noman"];

function checkuserNames(current_users:string[], new_users:string[]){
    for (let new_user of new_users) {
        let lowercased_new_user: string = new_user.toLowerCase();
        let is_username_available: boolean = true;

        for (let current_user of current_users) {
            if (current_user.toLowerCase() === lowercased_new_user) {
                console.log(`The username '${new_user}' has already been used. Please enter a new username.`);
                is_username_available = false;
                break;
            }
        }

        if (is_username_available) {
            console.log(`The username '${new_user}' is available.`);
        }
    }
}

checkuserNames(current_users, new_users);