// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

const express = require("express");

const router = express.Router();


const burger = require("../models/burger.js");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

router.get('/burgers', (req, res) => {
    burger.all((data) => {
        res.json({ burgers: data });
    });
});

router.post('/burgers', (req,res) => {
    burger.create([
        'name', 'devoured'
    ], [
        req.body.name, req.body.devoured
    ], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/burgers/:id', (req, res) => {

    burger.update(req.params.id, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.json({ id: req.params.id });
        }
    });
});

router.delete('/burgers/:id', (req, res) => {
    let condition = 'id = ' + req.params.id;

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;