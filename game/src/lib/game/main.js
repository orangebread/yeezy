ig.module(
    'game.main'
)
    .requires(
        'impact.game',
        'impact.font',

        'plugins.camera',

        'game.levels.world',

        'game.entities.soldier',
        'game.entities.bullet'
    )
    .defines(function(){
        MyGame = ig.Game.extend({
            font: new ig.Font( 'media/04b03.font.png' ),
            socket: null,

            init: function() {
                this.socket = io.connect('http://localhost:8080');

                // Initialize your game here; bind keys etc.
                ig.input.bind(ig.KEY.A, 'left');
                ig.input.bind(ig.KEY.D, 'right');
                ig.input.bind(ig.KEY.W, 'up');
                ig.input.bind(ig.KEY.S, 'down');
                ig.input.initMouse();
                ig.input.bind( ig.KEY.MOUSE1, 'attack');
                ig.input.bind( ig.KEY.MOUSE2, 'shoot');
                ig.input.bind( ig.KEY.Z, 'minorbull');

                this.loadLevel(LevelWorld);

                this.spawnEntity(EntitySoldier, 100, 100);
                this.setupCamera();

                // Socket event handlers
                // this.socket.on('playermove', this.playerMove);
                // this.socket.on('message', this.message);
                // this.socket.on('syncplayer', this.syncPlayer);
                // this.socket.on('netreplayer', this.netreplayer);
                // this.socket.on('addplayer', this.addPlayer);
                // this.socket.on('killplayer', this.killPlayer);
                // this.socket.on('spawncreature', this.spawnCreature);
                // this.socket.on('resynccreatures', this.resynccreatures);
                // this.socket.on('spawnclientbullet', this.spawnClientBullet);
            },

            setupCamera: function() {
                // Set up the camera. The camera's center is at a third of the screen
                // size, i.e. somewhat shift left and up. Damping is set to 3px.
                this.camera = new ig.Camera( ig.system.width/2, ig.system.height/4, 10);

                // The camera's trap (the deadzone in which the player can move with the
                // camera staying fixed) is set to according to the screen size as well.
                this.camera.trap.size.x = ig.system.width/10;
                this.camera.trap.size.y = ig.system.height/3;

                // The lookahead always shifts the camera in walking position; you can
                // set it to 0 to disable.
                //this.camera.lookAhead.x = ig.system.width/6;

                // Set camera's screen bounds and reposition the trap on the player
                this.camera.max.x = this.collisionMap.pxWidth - ig.system.width;
                this.camera.max.y = this.collisionMap.pxHeight - ig.system.height;
                this.camera.set(this.soldier);
            },

            update: function() {
                // Update all entities and backgroundMaps
                this.parent();

                // Camera follows the player
                this.camera.follow(this.soldier);
            },

            draw: function() {
                // Draw all entities and backgroundMaps
                this.parent();
                if (this.soldier) {
                    this.soldier.messageboxtimer = this.soldier.messageboxtimer - 1;

                    if (this.soldier.messageboxtimer < 1) {
                        this.soldier.messageboxtimer = 100;
                        var newText = '';
                        var newSplit = this.soldier.messagebox.split('\n');
                        for (var i = 0; i < newSplit.length; i++) {
                            if (i > 1) {
                                newText = newText + '\n' + newSplit[i];
                            }
                        }
                        this.soldier.messagebox = newText;
                    }

                    // Add your own drawing code here
                    var x = ig.system.width/2,
                        y = ig.system.height/2;

                    this.font.draw(this.soldier.messagebox, 700, 10, ig.Font.ALIGN.CENTER );
                }
            },

            // Socket events
            playerMove: function (destinationx,destinationy,thisgamename) {
                var otherplayer = ig.game.getEntitiesByType( EntityOtherplayer );
                if(otherplayer) {
                    for(var i in otherplayer) {
                        if(thisgamename == otherplayer[i].gamename) {
                            otherplayer[i].destinationx = destinationx;
                            otherplayer[i].destinationy = destinationy;
                        }
                    }
                }
            },

            message: function (data) {
                if(this.soldier) {
                    this.soldier.messagebox =  this.soldier.messagebox + '\n' + data + ' disconnected';
                }
            },

            syncPlayer: function(playerx,playery,thisgamename){
                var otherplayer = ig.game.getEntitiesByType( EntityOtherplayer );
                if(otherplayer) {
                    for(var i in otherplayer) {
                        if(thisgamename == otherplayer[i].gamename) {
                            otherplayer[i].pos.x = playerx;
                            otherplayer[i].pos.y = playery;
                        }
                    }
                }
            },

            netreplayer: function(playerlist){
                var netplayers = ig.game.getEntitiesByType( EntityOtherplayer );
                // Loop to see if players exist
                if(netplayers) {
                    for(var i in netplayers) {
                        netplayers[i].kill();
                    }
                }
                for (var i in playerlist) {
                    if (playername != playerlist[i]) {
                        ig.game.spawnEntity(EntityOtherplayer, 160, 260, {gamename:playerlist[i]});
                    }
                }
            },

            addPlayer: function (playerlist,otherplayername, playerx, playery) {
                var soldier = ig.game.getEntitiesByType(EntitySoldier)[0];
                soldier.messagebox = soldier.messagebox + '\n' + otherplayername + ' joined';
                for(var i = 0;i<playerlist.length;i++) {
                    if( soldier.gamename != playerlist[i]) {
                        console.log('Player spawned at: ' + playerx + ', ' + playery);
                        ig.game.spawnEntity( EntityOtherplayer, playerx, playery, {gamename:playerlist[i]} );
                    }
                }
            },

            killPlayer: function (otherplayername) {
                var netplayers = ig.game.getEntitiesByType( EntityOtherplayer );
                for(var i in netplayers) {
                    // Alert
                    if(otherplayername == netplayers[i].gamename) {
                        netplayers[i].kill();
                    }
                }
            },

            spawnCreature: function(spawnx,spawny,creaturename){
                this.spawnEntity(EntityAxilict,spawnx,spawny, {gamename:creaturename});
            },

            resynccreatures: function() {
                var creatures = this.getEntitiesByType(EntityAxilict);
                for (var i = 0; i < creatures.length; i++) {

                }
                this.socket.emit('syncdcreatures', creatures);
            },

            spawnClientBullet: function(weapontype,gamename,animangle){
                var netplayers = ig.game.getEntitiesByType( EntityOtherplayer);
                if (netplayers) {
                    for (var i = 0; i < netplayers.length; i++) {
                        if (netplayers[i].gamename == gamename) {
                            ig.game.spawnEntity(EntityNetbullet, netplayers[i].pos.x + 30, netplayers[i].pos.y + 30, {bullettype:weapontype,animangle:animangle});
                        }
                    }
                }
            }
        });

        ig.main( '#canvas', MyGame, 60, 1280, 720, 1.5 );

    });
