/* eslint-disable class-methods-use-this */
const TaskModel = require('../model/TaskModel');

class TaskController {
  async create(req, res) {
    const task = new TaskModel(req.body);
    await task
      .save()
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => res.status(500).json(error));
  }

  async update(req, res) {
    await TaskModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  }

  async all(req, res) {
    await TaskModel.find({
      macaddress: {
        $in: req.body.macaddress,
      },
    }.sort('when')
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error)));
  }
}
module.exports = new TaskController();
