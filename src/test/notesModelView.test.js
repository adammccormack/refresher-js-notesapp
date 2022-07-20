/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const notesView = require('/Users/m/Projects/makers-practicals/javascript/Week-7/week-7-repeat/refresher-js-notesapp/src/models/notesModelView.js');

 
   describe('notesModelView', () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync('/Users/m/Projects/makers-practicals/javascript/Week-7/week-7-repeat/refresher-js-notesapp/index.html');
    const notesModelView = new notesView();


    // Act
    notesModelView.displayNotes(['test note item']);

    
    // Assert
    const noteItems = document.querySelectorAll('div.note-item');
    expect(noteItems.length).toBe(1);
    expect(noteItems[0].innerText).toBe('test note item')
 });