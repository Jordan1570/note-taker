const express = require("express");
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001  
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/notes', function(req, res) {
// logic 

})

app.post(`/api/notes/`, function(req, res) {
// logic 

})

app.delete(`/api/notes/:id`, function (req, res) {
// logic 

})



// Get request
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);



// server creation
app.listen(PORT, function() {
    console.log('server running')
});
