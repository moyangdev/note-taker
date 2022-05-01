const fs = require('fs');
const path = require('path');

// function handles note creation and writing to db file
function createNewNote(body, notes) {
const note = body;
notes.push(note);

fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    // converts to JSON string
    JSON.stringify({ notes }, null, 2)
);
return note;
}

// function handles note deletion and removing from db file
function deleteNote(notes, id){
    let deleteID = parseInt(id);
    notes.splice(deleteID, 1);

    // re-writes id index for the remaining notes
    for (let i = deleteID; i < notes.length; i++) {
        notes[i].id = i.toString();
    }
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
}

module.exports = {
    createNewNote,
    deleteNote
};