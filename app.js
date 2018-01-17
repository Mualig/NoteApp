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
        console.log('New note added');
        notes.logNote(note);
    } else {
        console.log('Duplicate note !');
    }

} else if (command === 'list') {
    notes.getAll();

} else if (command === 'read') {
    let note = notes.getNote(argv.title);

    if (note) {
        console.log('Note found:');
        notes.logNote(note);
    } else {
        console.log('No note found...');
    }

} else if (command === 'remove') {
    let removed = notes.removeNote(argv.title);
    let message = removed ? `Note was removed: ${argv.title}` : 'Note not found';
    console.log(message);

} else {
    console.log('Unknown command !');
}
