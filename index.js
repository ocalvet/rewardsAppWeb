var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var webRoutes = require('./routes');
var apiRoutes = require('./apiRoutes');
var path = require('path');


var config = require('./config')('local');

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

app.set('views', path.join( __dirname, '/views') );
app.set('view engine', 'vash');

app.use('api/', apiRoutes);
app.use('/', webRoutes);

app.use(express.static(path.join(__dirname, 'public')));

http.listen(config.port || 3030, function(){
  console.log('listening on *:' + config.port);
});