const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

let DB = require('../db/db.json');

router.get('/api/notes', (req, res) => {
    res.json(DB);
});

router.post('/api/notes', (req, res) => {
    req.body.id = uuidv4();
    console.log(req.body);
    DB.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(DB));
    res.json(DB);
    
});

router.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    DB = DB.filter(note => note.id != id);
    fs.writeFileSync('./db/db.json', JSON.stringify(DB));
    res.json(DB);
});

module.exports = router;