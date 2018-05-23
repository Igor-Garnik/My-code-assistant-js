const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 5000;

// default options
app.use(express.static(__dirname + '/public'));
app.use(fileUpload());

app.get('/', function (req, res) {
   res.render('index.html');
});

app.post('/upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let myFile = req.files['myFile'];

    // Use the mv() method to place the file somewhere on your server
    myFile.mv(__dirname + '/folder/' + myFile.name, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});