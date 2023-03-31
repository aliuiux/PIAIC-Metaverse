"use strict";
// array values 
/*const students: string[] = ["PIAIC1", "PIAIC2", "PIAIC3"];

for (let i = 0; i < students.length; i++) {
    console.log("Students[i]")
} */
const cities = ["Lahore", "Karachi", "Quetta", "Lahore"];
for (let i = 0; i < cities.length; i++)
    if (cities[i] === "Lahore") {
        console.log(cities[i]);
        break;
    }
    else {
        console.log("Not Found");
        {
            break;
        }
    }
function checkVowels(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        console.log(`Letter "${letter}" is vowel.`);
    }
    else {
        console.log(`Letter "${letter}" is not vowel`);
    }
}
checkVowels('a');
// Function to check whether a character is a vowel or consonant
function checkVowelOrConsonant(character) {
    // Convert character to lowercase to handle uppercase letters as well
    character = character.toLowerCase();
    // Check if the character is a vowel or consonant
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
        return 'Vowel';
    }
    else {
        return 'Consonant';
    }
}
// Example usage
console.log(checkVowelOrConsonant('a')); // Output: Vowel
console.log(checkVowelOrConsonant('b')); // Output: Consonant
let rating = 2;
if (rating === 3) {
    console.log("Good");
}
else if (rating === 2) {
    console.log("Bad");
}
else if (rating === 1) {
    console.log("Nice");
}
