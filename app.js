console.log('Starting App !');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];
console.log('Yargs: ', argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);

    if (!!note) {
        console.log('New note added\n--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Duplicate note !');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Unknown command !');
}
