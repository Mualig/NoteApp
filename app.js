// const fs = require('fs');
// const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);

    if (!!note) {
        console.log('New note added');
        notes.logNote(note);
    } else {
        console.log('Duplicate note !');
    }

} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));

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
