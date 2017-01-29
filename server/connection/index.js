const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tempus');

module.exports = mongoose;
