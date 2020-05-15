const { differenceInYears } = require('date-fns');
const UserModel = require('../model/UserModel');

const current = new Date();

const emailVerification = (req, res, next) => {
  const { body } = req;

  const errorMessages = [];

  const requiredArguments = ['email', 'password_hash', 'name', 'lastname', 'birthdate'];

  const invalidArguments = requiredArguments.filter((arg) => body[arg] === undefined);

  invalidArguments.forEach((arg) => errorMessages.push(`Missing ${arg}.`));

  if (errorMessages.length) {
    return res.status(400).json({ error: errorMessages.join(' ') });
  }

  if (!(/\S+@\S+\.\S+/).test(req.body.email)) {
    return res.status(400).json({ error: 'Email não valido' });
  }

  let exists;
  if (body.email) {
    exists = UserModel.findOne({
      email: { $eq: body.email },
    });
  }

  if (exists) {
    return res.status(400).json({ error: 'Email alredy exists' });
  }
  if (differenceInYears(current, new Date(body.birthdate)) < 18) {
    return res.status(400).json({ error: 'Idade não valida' });
  }
  return next();
};

module.exports = emailVerification;
