let greeting = 'hello World!';
console.log(greeting);
let fName = 'Benny', lname = 'Hinn';

console.log(fName + ' ' + lname);
let person = {
    firstName : 'John',
    age : 11
};

console.log(person);

let selectedColors = ['red', 'blue', 'orange', 1];
console.log(selectedColors);
let length = selectedColors.length;
console.log(length);

//Functions

function greet(fName, lName){
    console.log('Hello' + ' ' + fName + ' ' + lName);
}

function square(num){
    return (num * num);
}

let results = square(4);
greet('Benny', 'Hinn');
console.log(results);