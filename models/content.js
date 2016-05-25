// /models/content.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our content model
var contentSchema = mongoose.Schema({

    local            : {
        title        : String,
        content     : String,
        author     : String,
        categories : {
        	category: String
        },
        tags: {
        	tag: String
        },
    }


});

// methods ======================

// create the model for content and expose it to our app
module.exports = mongoose.model('Content', contentSchema);