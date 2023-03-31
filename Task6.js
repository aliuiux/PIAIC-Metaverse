"use strict";
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
// var person = {
//     name: "John Doe",
//     age: 30
// };
// console.log(person.name);
// console.log(person.name.trim());
let taskName = "\t\n   John Doe   \n\t";
console.log("Name with whitespace: " + taskName);
console.log("Name without whitespace: " + taskName.trim());
