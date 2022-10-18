const userService = require('../services/userService');
import {
	StatusCodes,
} from 'http-status-codes';

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const request = await userService.login({ email, password });
    res.status(StatusCodes.OK).send(request);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  login,
}