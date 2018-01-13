console.log('Starting App !');

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');
const _ = require('lodash');

let filterArray = _.uniq(['Bob', 1, 2, false, 'bob', 'Bob']);
console.log(filterArray);

// let user = os.userInfo();
//
// fs.appendFile('./greetings.txt', `Hello World ${user.username}, you are ${notes.age}\n`, function (error) {
//     if (error) {
//         console.log('Error', error);
//     }
// });

let result = notes.add(1, 3);
console.log(result);
