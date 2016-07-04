var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// var pagePath = path.join(__dirname, 'pages');
// var libPath = path.join(__dirname, 'lib');
// var scriptPath = path.join(__dirname, 'assets/js');

app.use(express.static(__dirname));
// app.use(express.static(pagePath));
// app.use(express.static(libPath));
// app.use(express.static(scriptPath));

app.listen(port, function() {
    console.log('express HTTP Server Started: ', port);
    console.log('Serving Files from: ', __dirname);
    // console.log('Serving script files from: ', scriptPath);   

});
