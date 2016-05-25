// /models/categories.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our tags model
var categoriesSchema = mongoose.Schema({

    local : {
        name : String
    }


});

// methods ======================

// create the model for tags and expose it to our app
module.exports = mongoose.model('Categories', categoriesSchema);