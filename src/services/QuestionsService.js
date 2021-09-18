const Question = require('../models/question');

class QuestionsService {

  static add(newQuestion) {
    return new Promise((resolve) => {
      newQuestion.creationDate = Date.now();
      newQuestion.status = newQuestion.status || 'new2';
      resolve(new Question(newQuestion).save());
    });
  }

  static getAll() {
    return new Promise((resolve) => {
      resolve(Question.find());
    });
  }

  static getById(id) {
    return new Promise((resolve) => {
      resolve(Question.findById(id));
    });
  }

  static update(questionId, updatedQuestion) {
    return new Promise((resolve) => {
      Question.findById(questionId)
        .then(question => {
          question.number = updatedQuestion.number || question.number;
          question.status = updatedQuestion.status || question.status;
          question.description = updatedQuestion.description || question.description;
          question.modifiedDate = Date.now();
          resolve(question.save());
        })
    });
  }

  static delete(questionId) {
    return new Promise((resolve) => {
      resolve(Question.findByIdAndRemove(questionId));
    });
  }
}

module.exports = QuestionsService;