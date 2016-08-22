#!/usr/bin/env node

var path = require('path');
var pkg = require( path.join(__dirname, 'package.json') );

// Parse command line options

var program = require('commander');

program
  .version(pkg.version)
  .option('-p, --port <port>', 'Port on which to listen to (defaults to 3000)', parseInt)
  .parse(process.argv);


console.log(' port: %j', program.port);

