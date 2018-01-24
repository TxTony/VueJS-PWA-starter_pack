// app.js

const http = require('http');
const fs = require('fs');
const express = require('express');
var router = express.Router();
var serveStatic = require('serve-static');
// run express server and serve static files
const app  = express();
router.get('/index', function (req, res) {
    console.log('Time: '+ Date.now()+ '-- root page');
    res.status(200);
    res.render(__dirname + '/dist/index.html');
    res.end();
});

app.engine('html', require('ejs').renderFile);
app.use(serveStatic( __dirname + '/dist' ));
app.use(router);
app.listen(8080);
