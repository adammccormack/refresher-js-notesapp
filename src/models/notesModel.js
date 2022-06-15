class NotesModel {

  constructor(notes) {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote = (text) => {
    this.notes.push(text);
  }
}

module.exports = NotesModel;