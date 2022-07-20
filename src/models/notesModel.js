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

  reset() {
    this.notes = [];
  }

}

// test commit

module.exports = NotesModel;