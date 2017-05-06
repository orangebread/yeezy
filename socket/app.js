var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

require('./config/express')(app);

io.sockets.on('connection', function (socket) {

    socket.on('server:move', function (data) {
        socket.broadcast.emit('client:move', data);
    });

    socket.on('resyncplayer', function (playerx,playery,gamename) {
        socket.broadcast.emit('syncplayer', playerx,playery,gamename);
    });

    socket.on('playerattacking', function (direction,xadd,yadd,attackangle,gamename) {
        socket.broadcast.emit('playerattacked', direction,xadd,yadd,attackangle,gamename);
    });

    // Universal broadcast message
    socket.on('server:broadcast', function(data) {
        socket.broadcast.emit(data.name, data.data);
    });

    socket.on('server:start', function (data) {
        console.log(data.playerName + ' has joined the game.');
        socket.emit('client:setRemoteId', socket.id);
        socket.broadcast.emit('client:join', {
            playerName: data.playerName,
            remoteId: socket.id,
            playerX: data.playerX,
            playerY: data.playerY
        });

        //send all existing clients to new
        for(var i in io.sockets.sockets){
            console.log('Sending data to:' + i);
            socket.emit('client:join', {remoteId: i});
        }
    });

    socket.on('disconnect', function(){
        console.log(socket.id + ' has disconnected.');
        socket.broadcast.emit('client:disconnect', { remoteId: socket.id });
    });

    // Handle Bullets
    socket.on('spawnSimpleEntity', function(entityType, posX, posY, settings){
        socket.broadcast.emit('spawnSimpleEntity', entityType, posX, posY, settings);
    });
});