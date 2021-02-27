const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   Number,
});

const User = mongoose.model('user', userSchema);

module.exports = User;