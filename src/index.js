const express = require('express');

const server = express();
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
const UserRoutes = require('./routes/UserRoutes');

server.use('/', TaskRoutes, UserRoutes);

server.listen(3000, () => {
  console.log('API ONLINE');
});
