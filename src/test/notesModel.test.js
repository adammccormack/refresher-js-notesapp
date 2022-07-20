const NotesModel = require('../models/notesModel.js');

describe('notesModel', () => {
  it('returns an empty list of items', () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([]);
  })
})