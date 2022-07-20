(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/models/notesModel.js
  var require_notesModel = __commonJS({
    "src/models/notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor(notes2) {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote = (text) => {
          this.notes.push(text);
        };
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // src/index.js
  var NotesModel = require_notesModel();
  var notes = new NotesModel();
  console.log("The notes app is running");
  console.log(notes.getNotes());
})();
