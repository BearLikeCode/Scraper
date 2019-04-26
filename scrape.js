const fs = require('fs');
let express = require('express');
let request = require('request');
let mongoose = require('mongoose');
let Page = require('./pages');

let app = express();

// PASTE URL YOUR DATABASE
mongoose.connect('HERE', { useNewUrlParser: true });

mongoose.connection.on('error', function() {
    console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/addpage', (req, res, next) => {
    let { url } = req.body;
    request(`${url}`, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            let page = new Page({ page: html });
            fs.writeFile('index.html', '', function(err) {
                if (err) throw err;
                console.log('File is created successfully.')
            })
            page.save(function(err) {
                if (err) res.json(err);
                res.json('Saved to database!');
            })
            fs.unlinkSync('index.html');
            fs.appendFile('index.html', html, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }
    });
})

app.listen('3000', 'localhost', function() {
    console.log('listen on port 3000');
})

module.exports=app;
