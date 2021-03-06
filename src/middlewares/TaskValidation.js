const { isPast } = require('date-fns');
const TaskModel = require('../model/TaskModel');


const TaskValidation = (req, res, next) => {
  // Body from req
  const { body } = req;

  // A collection of error messages:
  const errorMessages = [];

  // These arguments are required
  const requiredArguments = ['type', 'title', 'description', 'when', 'macaddress'];

  // Get an array of argument names not present in body.
  const invalidArguments = requiredArguments.filter((arg) => body[arg] === undefined);

  // Push an error message for every invalid argument.
  invalidArguments.forEach((arg) => errorMessages.push(`Missing ${arg}.`));
  // Declare
  let exists;
  // Push an error message if date is in the past
  if (isPast(new Date(body.when))) {
    errorMessages.push("Can't create an task in the past.");
  } else {
    if (req.params.id) {
      exists = TaskModel.findOne({
        _id: { $ne: req.params.id },
        when: { $eq: new Date(body.when) },
        macaddress: { $in: body.macaddress },
      });
    } else {
      exists = TaskModel.findOne({
        when: { $eq: new Date(body.when) },
        macaddress: { $in: body.macaddress },
      });
    }
    if (exists) {
      errorMessages.push('Alredy exists');
    }
  }
  // If any error, send a Bad Request response with ALL error messages.
  if (errorMessages.length) {
    return res.status(400).json({ error: errorMessages.join(' ') });
  }
  // Go to next middleware if there are no errors.
  return next();
};

module.exports = TaskValidation;
