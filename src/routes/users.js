const express = require('express');
const router = express.Router();

const UserService = require('../services/UserService');
const auth = require('../middleware/auth');
const notFound = require('../middleware/not-found');

router.post('/', auth.encrypt, async (request, response) => {
  const user = await UserService.add(request.body);
  response
    .status(201)
    .json(user);
});

router.get('/', async (request, response) => {
  const users = await UserService.getAll();
  users && users.length
    ? response.json(users)
    : response.status(204).end();
});

router.get('/:userId', async (request, response) => {
  const user = await UserService.getById(request.params.userId);
  user
    ? response.json(user)
    : notFound(request, response);
});

router.patch('/:userId', auth.compare, async (request, response) => {
  const updatedUser = await UserService.update(
    request.params.userId,
    request.body
  );
  updatedUser
    ? response.json(updatedUser)
    : notFound(request, response);
});

router.delete('/:userId', auth.compare, async (request, response) => {
  const isDeleted = await UserService.delete(request.params.userId);
  isDeleted
    ? response.end()
    : notFound(request, response)
});

module.exports = router;