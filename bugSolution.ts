function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access individual elements of the array
console.log(greeter(user[0])); // Greets Jane
console.log(greeter(user[1])); // Greets Doe

// Solution 2:  Use array's join method to create a string
console.log(greeter(user.join(" "))); // Greets Jane Doe

// Solution 3: Modify the function signature to accept an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(" ");
}
console.log(greeterArray(user)); // Greets Jane Doe