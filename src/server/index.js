var path = require('path');
const express = require('express');
const aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();
const textapi = new aylien({
    application_id = process.env.API_ID,
    application_key = process.env.API_KEY

});
const app = express();

app.use(cors());

app.use(express.static('dist'));



app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
})

app.get('/test/:testurl', function(req, res) {
    let testurl = req.params.testurl || '';
    if (testurl) {
        textapi.sentiment({ url: testurl }, (error, response) => {
            if (error === null) {
                res.send({
                    "message": response,
                })
            } else {
                res.send({
                    "error": error
                })
            }
        });
    } else {
        res.send({
            "error": "invalid URL"
        })
    }
});