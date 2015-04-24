
var fs = require('fs-extra');
var async = require('async');
var Mustache = require('mustache');

module.exports = {
    
    template: function(source, dest, params, callback) {
    
        fs.readFile(source, 'utf8', function(error, tpl) {
            if( error ) {
                callback(error);
            }
            else {
                var template = Mustache.render(tpl, params);
                fs.writeFile(dest, template, function(error) {
                    callback(error);
                });
            }
        });

    },
    
    rmdir: function(path, callback) {
        var rimraf = require('rimraf');
        rimraf(path, callback);
    },
    
    mkdir: function(path, callback) {
        var mkdirp = require('mkdirp');
        mkdirp(path, callback);
    },
    
    mkdirs: function(paths, callback) {
        async.each(paths, this.mkdir, callback);
    }
    
};