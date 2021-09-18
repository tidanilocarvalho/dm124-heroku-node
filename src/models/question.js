const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    options: [{
        type: Object,
        ref: 'Option',
        required: true
    }],
    creationDate: { type: Date },
    modifiedDate: { type: Date }
});
module.exports = mongoose.model('Question', questionSchema);