const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const answerSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    questionId: {
        type: ObjectId,
        ref: 'Question',
        required: true
    },
    creationDate: { type: Date },
    modifiedDate: { type: Date }
});
module.exports = mongoose.model('Answer', answerSchema);