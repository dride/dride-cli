#!/usr/bin/env node

var path = require('path');
var express = require('express');
var pkg = require( path.join(__dirname, 'package.json') );



// Parse command line options

var program = require('commander');

program
  .version(pkg.version)
  .option('-p, --port <port>', 'Port on which to listen to (defaults to 3000)', parseInt)
  .parse(process.argv);

var port = program.port || 3000;


// Ceate a new express app

var app = express();

// Serve static files from the frontend folder

app.use('/', express.static(path.join(__dirname, 'frontend')));



// Everything is setup. Listen on the port.

app.listen(port);

console.log('dride cli is running on port ' + port);