ig.module(
    'plugins.socket-client'
).requires(
    'impact.impact'
).defines(function() {
    ig.ImpactConnect = ig.Class.extend({
        _player: null,

        init : function(player, port) {
            //console.log('Player init: ' + JSON.stringify(player));
            this.remoteId = null;
            this._player = player;
            this.socket = io.connect('http://localhost:' + port);

            var namerand  = Math.floor(Math.random()*999);
            this._player.name = "player" + namerand;

            // initialize player and socket
            this.socket.emit('server:start', { playerName: this._player.name, playerX: 200, playerY: 200});

            // Socket event handlers
            this.socket.on('client:move', this.move.bind(this));
            this.socket.on('client:message', this.message);
            this.socket.on('syncplayer', this.syncPlayer);
            this.socket.on('client:disconnect', this.disconnect.bind(this));
            this.socket.on('client:spawnSimpleEntity', this.spawnSimpleEntity.bind(this));
            this.socket.on('client:setRemoteId', this.setRemoteId.bind(this));
            this.socket.on('client:join', this.join.bind(this));
            this.socket.on('client:announced', this.announced);
        },

        /**
         Socket event functions
        **/

        // announcing to everyone
        announced: function(data) {
            ig.game.write(data.text,{
                x: ig.system.width/4,
                y: ig.system.height/4
            });
        },

        move: function(data) {
            console.log('Moving player: ' + data.remoteId);
            var entity = ig.game.getEntitiesByType(EntitySoldier);
            if (entity) {
                for (var i in entity) {
                    if (entity[i].remoteId != this.remoteId) {
                        entity[i].pos.x = data.posX;
                        entity[i].pos.y = data.posY;
                        if(entity[i].remoteAnim != data.remoteAnim){
                            var newAnim = 'entity[' + i + '].anims.' + data.remoteAnim;
                            entity[i].currentAnim = eval(newAnim);
                            entity[i].currentAnim.flip.x = data.flip;
                            entity[i].remoteAnim = data.remoteAnim;
                        }
                    }
                }
            }

        },

        message: function (data) {
            if(this._player) {
                this._player.messagebox =  this._player.messagebox + '\n' + data + ' disconnected';
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

        setRemoteId: function(rId) {
            console.log('setting remote id: '+ rId);
            this._player.remoteId = rId;
            this.remoteId = rId;
        },

        join: function(data) {
            console.log('Client joined: ' + JSON.stringify(data));
            this._player.messagebox = this._player.messagebox + '\n' + data.playerName + ' joined';
            if (data.remoteId != this.remoteId) {
                console.log('Spawning other players');
                ig.game.spawnEntity(EntitySoldier, data.playerX, data.playerY, {
                    handlesInput: false,
                    remoteId: data.remoteId
                });
            }
        },

        disconnect: function(data) {
            console.log(this);
            console.log('Disconnecting client: ' + data.remoteId);
            var ent = this.getEntityByRemoteId( data.remoteId );
            ig.game.removeEntity( ent );
            // ent.kill();
        },

        spawnSimpleEntity: function(data){
            console.log('Simple entityt spawned');
            ig.game.spawnEntity(eval(data.entityType), data.x, data.y, data.settings);
        },

        getEntityByRemoteId: function(id){
            var tEntities = ig.game.getEntitiesByType(EntitySoldier);
            for(var i in tEntities){
                if(tEntities[i].remoteId === id){
                    return tEntities[i];
                }
            }
            return null;
        },

        /**
         * universal broadcasting method
         */
        send: function(name, data){
            this.socket.emit('server:broadcast', {
                name: name,
                data: data
            });
        },

        /**
         * writes text on every screen
         * font is your ig.game.font
         */
        announce: function(data){
            this.socket.emit("server:announce", data);
        }

    });
});