var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', process.env.PORT || 3000)

app.set('view engine', 'ejs');  

app.use( express.static( "views" ) );

app.get('/', function(req, res) {
    res.render('pages/index');
});

io.on('connection', function(socket){
    socket.on('the code', function(code){
    io.emit('the code', code);
  });
});

http.listen(app.get('port'), function() {
    console.log("Listening on port: 3000")
})