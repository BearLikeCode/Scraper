var mongoose = require('mongoose');

var pagesSchema = mongoose.Schema({
        page: String,
});

module.exports = mongoose.model('Page', pagesSchema);
