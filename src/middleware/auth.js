const bcrypt = require('bcrypt');
const User = require('../models/user');
const encrypt = (request, response, next) => {
  let password = request.body.password;
  bcrypt.hash(password, 12).then((encrypted)=> {
    request.body.password = encrypted;
    next();
  });
}

const compare = (request, response, next) => {
  let email = request.body.email;
  let password = request.body.password;
  User.findOne({ email: email }).then(user => {
    if (!user) {
      notAuthorized();
    }

    bcrypt.compare(password, user.password, (err, res) => {
      if (err){
        console.log(err);
        notAuthorized(response);
      }
      if (res) {
        console.log(res);
        request.session.isLoggedIn = true;
        request.session.user = user;
        next();
      } else {
        notAuthorized(response);
      }
    });
  });
}

const notAuthorized = (response) => {
  const HttpStatusNotAuthorized = 401;
  const errorInfo = {
    status: HttpStatusNotAuthorized,
    message: 'Not authorized'
  };

  response
    .status(HttpStatusNotAuthorized)
    .json(errorInfo);
}

exports.encrypt = encrypt;
exports.compare = compare;