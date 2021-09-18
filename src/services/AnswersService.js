const Answer = require('../models/answer');

class AnswersService {

  static add(newAnswer) {
    return new Promise((resolve) => {
      newAnswer.creationDate = Date.now();
      newAnswer.status = newAnswer.status || 'new2';
      resolve(new Answer(newAnswer).save());
    });
  }

  static getAll() {
    return new Promise((resolve) => {
      resolve(Answer.find());
    });
  }

  static getById(id) {
    return new Promise((resolve) => {
      resolve(Answer.findById(id));
    });
  }

  static update(answerId, updatedAnswer) {
    return new Promise((resolve) => {
      Answer.findById(answerId)
        .then(answer => {
          answer.key = updatedAnswer.key || answer.key;
          answer.name = updatedAnswer.name || answer.name;
          answer.answer = updatedAnswer.answer || answer.answer;
          answer.questionId = updatedAnswer.questionId || answer.questionId;
          answer.modifiedDate = Date.now();
          resolve(answer.save());
        })
    });
  }

  static delete(answerId) {
    return new Promise((resolve) => {
      resolve(Answer.findByIdAndRemove(answerId));
    });
  }
}

module.exports = AnswersService;