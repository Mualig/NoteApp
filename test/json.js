// let obj = {
//     name: 'Bob'
// };
//
// let stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
//
// console.log('StringObj :', stringObj);
//
// let personString = '{"name": "Boby", "age": 25}';
// let person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(personString, person);

const fs = require('fs');

let originalNote = {
    title: 'some title',
    body: 'some body'
};

let originalNoteString = JSON.stringify(originalNote);

console.log(originalNoteString);

fs.writeFileSync('./test/notes.json', originalNoteString);

let noteString = fs.readFileSync('./test/notes.json');
let note = JSON.parse(noteString);

console.log('Note.title: ', note.title);
