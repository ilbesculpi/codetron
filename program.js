var fs = require('fs');
var async = require('async');

var _json = {};

var program = {
    
    parse: function(configFile, callback) {
        
        console.log('[DEBUG] program.parse()');
        
        fs.readFile(configFile, 'utf8', function(error, data) {
            if( error ) {
                callback(error);
            }
            else {
                var json = JSON.parse(data);
                callback(null, json);
            }
        });
        
    },
    
    burn: function(json, callback) {
        
        console.log('[DEBUG] program.burn()');
        
        program.json = json;
        
        // cook each recipe
        async.eachSeries(json.recipes, program.recipe, callback);
        
    },
    
    recipe: function(recipe, callback) {
        
        // global json object
        var json = program.json;
        
        // recipe config
        var config = recipe.config || {};
        
        var recipeProgram = require('./recipes/' + recipe.rid + '/recipe');
        recipeProgram.cook(config, json, callback);
    }
    
};

module.exports = program;