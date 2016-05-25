// /models/meet.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our meet model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Meet', {
    name : {type : String, default: ''}
});