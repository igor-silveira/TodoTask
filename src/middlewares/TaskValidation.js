const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');


const TaskValidation = async(req, res, next) => {
    const {macaddress, type, title, description, when } = req.body;
    if (!macaddress)
    return res.status(400).json({ error: 'Missing macaddress'})
    else if (!type)
    return res.status(400).json({ error: 'Missing type'})
    else if (!title)
    return res.status(400).json({ error: 'Missing title'})
    else if (!description)
    return res.status(400).json({ error: 'Missing description'})
    else if (!when)
    return res.status(400).json({ error: 'Missing when'})
    else if(isPast(new Date(when)))
    return res.status(400).json({ error: "Can't create an task in the past"})
    else{
        next();
    }
};

module.exports = TaskValidation;