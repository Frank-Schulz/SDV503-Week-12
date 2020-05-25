'use strict';

// New dictionary
let dict = {};

// Add entries
dict.greet = 'Hello World!';
dict.name = 'Frank';

console.log(dict);
console.log(dict.greet);

// For every item in dictionary
let count = 0;
for(let key in dict) {
    console.log(key);
    count++
};

console.log(`'dict' has ${count} entries`);

// Add function to dict
dict.func = function () {
    console.log(`${this.greet} My name is ${this.name}`);
};
// Call function inside dictionary
dict.func();

// Add array to dictionary
dict.arr = [1, 2, 3, 4];
console.log(dict.arr);


// Add new dictionary inside dict
dict.dict2 = {
    lastName: 'Schulz',
    foo: 'other'
};

console.log(dict.dict2.foo);
