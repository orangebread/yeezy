var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

require('./config/express')(app);

var playerlocation = 0;
var playerlist = [];
var creaturecount = 0;
var creaturelist = [];
var clientids = [];

// Setup Classes
function axilict(){ // Axilict is just a name for creatures, can be changed
    this.health = 10;
    this.target = ""; // To target a player
    this.velx = 0;
    this.vely = 0;
    this.positionx = 500;
    this.positiony = 500;
    this.name = "";
}

// Uncomment to have creatures spawn and moveabout.  The numbers are seconds (milliseconds)

// setInterval(function(){
//     creatureactive();
// }, 3000);
// setInterval(function(){
//     creaturespawn();
// }, 6000);

io.sockets.on('connection', function (socket) {

    socket.on('moveplayer', function (destinationx,destinationy,gamename) {
        socket.broadcast.emit('playermove', destinationx,destinationy,gamename);
    });

    socket.on('resyncplayer', function (playerx,playery,gamename) {
        socket.broadcast.emit('syncplayer', playerx,playery,gamename);
    });

    socket.on('playerattacking', function (direction,xadd,yadd,attackangle,gamename) {
        socket.broadcast.emit('playerattacked', direction,xadd,yadd,attackangle,gamename);
    });

    socket.on('initializeplayer', function (newplayername,playerx,playery) {
        console.log(newplayername + ' has joined the game.');
        socket.clientname = newplayername;
        playerlist.push(newplayername);
        clientids.push(socket.id);
        //io.sockets.emit('getcreaturelocals');
        io.sockets.emit('addplayer',playerlist,newplayername,playerx,playery);
        //var currentclients = clientids.length;
    });

    socket.on('disconnect', function(){
        console.log(socket.clientname + ' has disconnected.');
        io.sockets.emit('killplayer', socket.clientname);
        delete playerlist[socket.clientname];
        delete clientids[socket.id];
        for(var i in playerlist) {
            if(playerlist[i] == socket.clientname) {
                playerlist.splice(i, 1);
            }
        }
        for(var i in clientids) {
            if(clientids[i] == socket.id) {
                clientids.splice(i, 1);
            }
        }

        socket.broadcast.emit('message',socket.clientname);
    });

    // Handle Bullets
    socket.on('spawnbullet', function(weapontype,gamename,angle){
        socket.broadcast.emit('spawnclientbullet',weapontype,gamename,angle);
    });

    // Resynch Creatures
    socket.on('syncdscreatures', function(creatures){

    });
});

function creatureactive(){
    for (var i = 0; i<creaturelist.length; i++) {
        var ismove = Math.floor(Math.random()*8);
        if (ismove < 4) {creaturelist[i].velx = 0; creaturelist[i].vely = 0; creaturelist[i].animation = "idle"}
        else if (ismove < 5) {creaturelist[i].velx = 50; creaturelist[i].animation = "right"}
        else if (ismove < 6) {creaturelist[i].velx = -50; creaturelist[i].animation = "left"}
        else if (ismove < 7) {creaturelist[i].vely = 50; creaturelist[i].animation = "down"}
        else if (ismove < 8) {creaturelist[i].vely = -50; creaturelist[i].animation = "up"}
        else {creaturelist[i].velx = 0; creaturelist[i].vely = 0; creaturelist[i].animation = "idle"}
    }
    io.sockets.emit('creaturemove',creaturelist);

}

function creaturespawn(){
    if(creaturecount < 64) { // Max amount of creatures
        var namerand = Math.floor(Math.random()*9999);
        creaturename = new axilict();
        creatureacount = creaturecount + 1;
        creaturename.name = "creature" + namerand;
        creaturelist.push(creaturename);
        io.sockets.emit('spawncreature',500,500,creaturename.name);
        io.to(clientids[0]).emit('resynccreatures');
    }
}