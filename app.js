const PartsController = require('./controllers/partsController');

const partsController = new PartsController();

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const partsFilePath = path.join(__dirname, 'data', 'parts.json');

app.get('/', (req, res) => {
    res.render('index.ejs', { title: 'Parts List' });
});

app.get('/add-part', (req, res) => {
    res.render('add-part.ejs');
});

app.post('/add-part', (req, res) => {
    const newPart = req.body;
    fs.readFile(partsFilePath, (err, data) => {
        if (err) throw err;
        const parts = JSON.parse(data);
        parts.push(newPart);
        fs.writeFile(partsFilePath, JSON.stringify(parts, null, 2), (err) => {
            if (err) throw err;
            res.redirect('/parts-list');
        });
    });
});

app.get('/parts-list', (req, res) => {
    fs.readFile(partsFilePath, (err, data) => {
        if (err) throw err;
        const parts = JSON.parse(data);
        res.render('parts-list', { parts });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
