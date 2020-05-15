/* eslint-disable class-methods-use-this */

const UserModel = require('../model/UserModel');

class RegisterController {
  async registration(req, res) {
    const register = new UserModel(req.body);
    await register
      .save()
      .then((response) => {
        res.status(200).json(response);
      }).catch((error) => res.status(500).json(error));
  }
}

module.exports = new RegisterController();
