/*Create a code that is responsible for print 
the sum of your age with yours mother's one.*/
const prompt = require('prompt-sync')()
let uName = prompt('Enter your name: ')
let motherName = prompt("Enter your mother's name: ")
let uAge = parseInt(prompt('Enter your Age: '))
let motherAge = parseInt(prompt("Enter your mother's Age: "))

/*For request an input for a user through the terminal without using
a browser you will need to use the prompt-sync*/


let exit = `${uName} has ${uAge} years old.\n${uName}'s mom, ${motherName}, has ${motherAge} years old.\nThogether, both of them have ${uAge+motherAge} years old.`
console.log(exit)
