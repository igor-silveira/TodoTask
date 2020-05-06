const mongoose = require('mongoose');

const url = 'mongodb://root:admin@localhost:27017/admin';

mongoose.connect(url, 
    {useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;