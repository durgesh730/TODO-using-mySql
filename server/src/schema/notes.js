const db = require('../db/conn');

class Note {
    static fetchAll() {
        return db.execute('SELECT * FROM note');
    }

    static findById(id) {
        return db.execute('SELECT * FROM note WHERE id = ?', [id]);
    }

    static create(newNotes) {
        return db.execute('INSERT INTO note (title, description, completed) VALUES (?, ?, ?)', [newNotes.title, newNotes.description, newNotes.completed]);
    }

    static update(id, updatedNote) {
        return db.execute('UPDATE note SET title = ?, description = ?, completed = ? WHERE id = ?', [updatedNote.title, updatedNote.description, updatedNote.completed, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM note WHERE id = ?', [id]);
    }
}

module.exports = Note;
