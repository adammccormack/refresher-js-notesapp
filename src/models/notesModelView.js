class NotesModelView {

  displayNotes(noteItems) {
    noteItems.forEach((noteItem) => {
      const newElement = document.createElement('div');
      newElement.className = 'note-item';
      newElement.innerText = 'test note item';

      document.querySelector('#main-container').append(newElement);
    })
  }
}


module.exports = NotesModelView;