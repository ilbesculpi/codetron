
var defaults = {
    CONFIG_FILE: 'project.json'
};

global.__base = __dirname;

var args = process.argv.slice(2);
var argv = require('minimist')(args);
var async = require('async');
var program = require(__base + '/program');

console.log('CodeTron');

// read config file
var configFile = argv["i"] ? argv["i"] : defaults.CONFIG_FILE;

console.log("config file:", configFile);

async.waterfall([
        function(callback) {
            program.parse(configFile, callback);
        },
        function(json, callback) {
            program.burn(json, callback);
        }
    ], function(error) {
        if( error ) {
            console.error(error);
        }
        else {
            console.log('[INFO] done.');
        }
    }
);
