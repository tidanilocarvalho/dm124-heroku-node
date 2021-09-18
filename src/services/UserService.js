const User = require('../models/user');

class UsersService {

  static add(newUser) {
    return new Promise((resolve) => {
      newUser.creationDate = Date.now();
      resolve(new User(newUser).save());
    });
  }

  static getAll() {
    return new Promise((resolve) => {
      resolve(User.find());
    });
  }

  static getById(id) {
    return new Promise((resolve) => {
      resolve(User.findById(id));
    });
  }

  static getByName(name) {
    return new Promise((resolve) => {
      resolve(User.findOne({ "name": name }));
    });
  }

  static update(userId, updatedUser) {
    return new Promise((resolve) => {
      User.findById(userId)
        .then(user => {
          user.name = updatedUser.name || user.name;
          user.role = updatedUser.role || user.role;
          user.modifiedDate = Date.now();
          resolve(user.save());
        })
    });
  }

  static delete(userId) {
    return new Promise((resolve) => {
      resolve(User.findByIdAndRemove(userId));
    });
  }
}

module.exports = UsersService;