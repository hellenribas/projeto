const Joi = require('joi');

// const encryptPassword = ({ password }) => {
//   return md5(password);
// }

const validateBodyLogin = ({ email, password }) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

const { error, value } = schema.validate({ email, password });
if (error) {
  return { status: 400, message: error.details[0].message };
}
return value;
} 

const login = ({ email, password }) => {
  validateBodyLogin({ email, password })
}

module.exports = {
  login
}