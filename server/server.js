const path = require('path');
const express = require("express");
const http = require('http');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;

var publicPath = path.join(__dirname, "../public");
var app = express();
app.use(express.static(publicPath));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New User Connected');
});


server.listen(port, () => {
  console.log(`server is up on ${port}`);
});
module.exports.app = app;
