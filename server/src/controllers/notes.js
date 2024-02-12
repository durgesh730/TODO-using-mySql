const Note = require("../schema/notes");

const AddTask = async (req, res) => {
    try {
        const newNotes = {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        };
        console.log(newNotes, "new notes")
        const [result] = await Note.create(newNotes);
        res.status(201).json({ message: 'Notes created!', notesId: result.insertId });
    } catch (err) {
        res.status(500).json({ msg: "Internal server error" })
    }
}

const GetAllUsers = async (req, res) => {
    try {
        const [notes] = await Note.fetchAll();
        res.status(200).json({ notes, success: true });
    } catch (err) {
        res.status(500).json({ msg: "Internal server error" })
    }
};

const UpdateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedUser = {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        };
        await Note.update(id, updatedUser);
        res.status(200).json({ message: 'User updated!' });
    } catch (err) {
        res.status(500).json({ msg: "Internal server error" })
    }
};

const DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await Note.delete(id);
        res.status(200).json({ message: 'User deleted!' });
    } catch (err) {
        res.status(500).json({ msg: "Internal server error" })
    }
};

module.exports = {
    DeleteUser,
    GetAllUsers,
    AddTask,
    UpdateUser
}