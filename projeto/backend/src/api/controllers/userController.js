const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const request = userService.login({ email, password })
}

module.exports = {
  login,
}