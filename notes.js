console.log('Starting notes');

let addNote = (title, body) => {
    console.log('Adding note: ', title, body);
    return 'new Note';
};

let getAll = () => {
  console.log('Getting all notes');
};

let getNote = (title) => {
    console.log('Getting note ', title);
};

let removeNote = (title) => {
    console.log('Removing note ', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
