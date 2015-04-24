
var defaults = {
    CONFIG_FILE: 'project.json'
};

var path = require('path');

global.BASE_PATH = __dirname;
global.RECIPES_PATH = BASE_PATH + '/recipes';
global.OUTPUT_PATH = path.dirname('./output');
//global.OUTPUT_PATH = './output';

var args = process.argv.slice(2);
var argv = require('minimist')(args);
var async = require('async');
var program = require(BASE_PATH + '/program');

console.log('CodeTron');

// read config file
var configFile = argv["i"] ? argv["i"] : defaults.CONFIG_FILE;

console.log("config file: ", configFile);
console.log("OUTPUT_PATH: ", OUTPUT_PATH);

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
