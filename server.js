const express = require("express");
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// get request
app.get('/api/notes', function (req, res) {
    // logic 
    fs.readFile('./db/db.json', 'utf8', function (err, data) {
        if (err) {
            res.status(500).json(err)
        }
        res.json(JSON.parse(data))
    })
})

// post request
app.post(`/api/notes/`, function (req, res) {
    // logic 

    console.log('body', req.body)
    fs.readFile('./db/db.json', 'utf8', function (err, data) {
        if (err) {
            res.status(500).json(err)
        }

        const noteData = JSON.parse(data)

        noteData.push({ title: req.body.title, text: req.body.text, id: '1' })

        fs.writeFile('./db/db.json', JSON.stringify(noteData), function(err) {
            if (err) {
                res.status(500).json(err)
            }
        })

        res.json(JSON.parse(data))
    })
});


// //delete request
// app.delete(`/api/notes/:id`, function (req, res) {
//     // logic 

// })



// Get request
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);



// server creation
app.listen(PORT, function () {
    console.log('server running')
});
