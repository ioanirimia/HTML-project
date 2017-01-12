var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

var mongoose = require('mongoose');
var configDB = require('./server/config/database.js');

mongoose.connect(configDB.url);

var port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

io.on('connection', function(socket){
  console.log('A user has connected!');
  socket.on('disconnec', function(){
    console.log('A user has disconnect!');
  })
})

app.get('/home', function(req, res) {
  res.render('home.ejs');
});

app.get('/contact',function(req, res) {
  res.render('contact.ejs');
});

app.get('/about',function(req, res) {
  res.render('about.ejs');
});

app.get('/',function(req, res) {
  res.render('index.ejs');
});

var api = express.Router();
require('./server/routes/api')(api);
app.use('/api', api);


http.listen(port, function(){
  console.log('SERVER IS RUNNING IN PORT: ' + port)
})