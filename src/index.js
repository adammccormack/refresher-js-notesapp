const NotesModel = require('../src/models/notesModel.js');

let notes = new NotesModel();

console.log('The notes app is running');
console.log(notes.getNotes());