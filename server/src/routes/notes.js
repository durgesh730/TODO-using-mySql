const express = require('express');
const { AddTask, GetAllUsers, DeleteUser, UpdateUser } = require('../controllers/notes');
const router = express.Router();

router.post('/add/note', AddTask)

router.get("/get/notes", GetAllUsers)

router.delete("/delete/note/:id", DeleteUser)

// edit our notes API 
router.put('/edit/note/:id', UpdateUser)

module.exports = router