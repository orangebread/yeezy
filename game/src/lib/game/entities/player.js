ig.module(
    'game.entities.player'
).requires(
    'impact.entity'
).defines(function(){
    EntityPlayer = ig.Entity.extend({
        size: {x: 32, y: 48},
        direction: 1,
        type: ig.Entity.TYPE.A,
        nettimer: 10,
        movementspeed: 100,
        name: "player",
        gamename: 'defaultName',
        destinationx:99999999,
        destinationy:99999999,
        messageboxtimer: 200,
        messagebox:'',
        speed: 100,

        checkAgainst: ig.Entity.TYPE.NONE,
        collides: ig.Entity.COLLIDES.PASSIVE,

        animSheet: new ig.AnimationSheet( 'media/soldier.png', 32, 48 ),

        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            // Add the animations
            this.addAnim( 'up', .21, [9,10,11] );
            this.addAnim( 'down', .21, [0,1,2] );
            this.addAnim( 'left', .21, [3,4,5] );
            this.addAnim( 'right', .21, [6,7,8] );
            this.addAnim( 'idleup', 0.1, [10] );
            this.addAnim( 'idledown', 0.1, [1] );
            this.addAnim( 'idleleft', 0.1, [4] );
            this.addAnim( 'idleright', 0.1, [7] );
            this.currentAnim = this.anims.idledown;

            ig.game.player = this;

            var namerand  = Math.floor(Math.random()*999);
            var playername = "player" + namerand;


            // Multiplayer Start
            if (!ig.global.wm) {
                this.gamename = playername;
                socket.emit('initializeplayer', this.gamename,this.pos.x,this.pos.y);
            }

        },

        update: function() {
            // Player Movement
            // Mouse Angle
            var mx = ig.input.mouse.x + ig.game.screen.x;
            var my = ig.input.mouse.y + ig.game.screen.y;
            var mouseAngle = Math.atan2(
                my - (this.pos.y + this.size.y/2),
                mx - (this.pos.x + this.size.x/2)
            );
            this.mouseangle = mouseAngle;
            // Mouse Input
            if (ig.input.state('attack') && !ig.input.state('minorbull')){
                this.nettimer = this.nettimer - 1;
                this.destinationx = ig.input.mouse.x + ig.game.screen.x;
                this.destinationy = ig.input.mouse.y + ig.game.screen.y;
                socket.emit('moveplayer',this.destinationx,this.destinationy,this.gamename);
            }
            if (this.destinationx < 999999999 && this.destinationy < 99999999){
                // Character is 48 high and 32 wide, which take half to 24 and 16
                this.distancetotargetx = this.destinationx - this.pos.x - 16;
                this.distancetotargety = this.destinationy - this.pos.y - 48;
                if (Math.abs(this.distancetotargetx) > 1 || Math.abs(this.distancetotargety) > 1){
                    if (Math.abs(this.distancetotargetx) > Math.abs(this.distancetotargety)){
                        // Move Right
                        if (this.distancetotargetx > 1){
                            this.vel.x = this.movementspeed;
                            this.xydivision = this.distancetotargety / this.distancetotargetx;
                            this.vel.y = this.xydivision * this.movementspeed;
                            this.currentAnim = this.anims.right;
                            this.formerpressed = 'right';
                            // Move Left
                        } else {
                            this.vel.x = -this.movementspeed;
                            this.xydivision = this.distancetotargety / Math.abs(this.distancetotargetx);
                            this.vel.y = this.xydivision * this.movementspeed;
                            this.currentAnim = this.anims.left;
                            this.formerpressed = 'left';
                        }
                        // einde Math.ads(this.distancetotarget.x) > Math.abs(this.distancetotarget.y)
                    } else {
                        // Move Down
                        if (this.distancetotargety > 1){
                            this.vel.y = this.movementspeed;
                            this.xydivision = this.distancetotargetx / this.distancetotargety;
                            this.vel.x = this.xydivision * this.movementspeed;
                            this.currentAnim = this.anims.down;
                            this.formerpressed = 'down';
                        } else { // Move Up
                            this.vel.y = -this.movementspeed;
                            this.xydivision = this.distancetotargetx / Math.abs(this.distancetotargety);
                            this.vel.x = this.xydivision * this.movementspeed;
                            this.currentAnim = this.anims.up;
                            this.formerpressed = 'up';
                        }
                    }
                    //einde this.distancetotargetx > 0 || this.distancetotargety > 0
                } else {
                    this.vel.x = 0;
                    this.vel.y = 0;

                    this.destinationx = 99999999;
                    this.destinationy = 99999999;

                    if (this.formerpressed == 'up') {
                        this.currentAnim = this.anims.idleup;
                    } else if (this.formerpressed == 'right') {
                        this.currentAnim = this.anims.idleright;
                    } else if (this.formerpressed == 'down') {
                        this.currentAnim = this.anims.idledown;
                    } else if (this.formerpressed == 'left') {
                        this.currentAnim = this.anims.idleleft;
                    }
                }
            }
            // End Mouse Movement

            // ATTACK
            if (ig.input.pressed('attack') && ig.input.state('minorbull')){
                socket.emit('spawnbullet',1,this.gamename,this.mouseangle);
                ig.game.spawnEntity(EntityBullet,this.pos.x + 30, this.pos.y + 30, {flip:this.flip,bullettype:1});
            }

            if (this.nettime < 1){
                socket.emit('resyncplayer',this.pos.x,this.pos.y,this.gamename);
                this.nettimer = 10;
            }

            this.parent();
        }
    });

    // Enemy Players
    EntityOtherplayer = ig.Entity.extend({
        size: {x: 32, y: 48},
        type: ig.Entity.TYPE.B,
        movementspeed: 100,
        name: "otherplayer",
        gamename: "",
        animation: 1,
        destinationx: 99999999,
        destinationy: 99999999,
        //checkAgainst: ig.Entity.TYPE.B,
        collides: ig.Entity.COLLIDES.PASSIVE,
        direction: 0,

        animSheet: new ig.AnimationSheet( 'media/soldier.png', 32, 48 ),

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.health = 100;

            // Add the animations
            this.addAnim( 'up', .21, [9,10,11] );
            this.addAnim( 'down', .21, [0,1,2] );
            this.addAnim( 'left', .21, [3,4,5] );
            this.addAnim( 'right', .21, [6,7,8] );
            this.addAnim( 'idleup', 0.1, [10] );
            this.addAnim( 'idledown', 0.1, [1] );
            this.addAnim( 'idleleft', 0.1, [4] );
            this.addAnim( 'idleright', 0.1, [7] );
            this.currentAnim = this.anims.idledown;
        },

        update: function() {
            // Mouse Input
            if (this.destinationx < 999999999 && this.destinationy < 99999999){
                // Character is 48 high and 32 wide, which take half to 24 and 16
                this.distancetotargetx = this.destinationx - this.pos.x - 16;
                this.distancetotargety = this.destinationy - this.pos.y - 48;
                if (Math.abs(this.distancetotargetx) > 1 || Math.abs(this.distancetotargety) > 1){
                    if (Math.abs(this.distancetotargetx) > Math.abs(this.distancetotargety)){
                        if (this.distancetotargetx > 1){
                            this.vel.x = this.movementspeed;
                            this.xydivision = this.distancetotargety / this.distancetotargetx;
                            this.vel.y = this.xydivision * this.movementspeed;
                            this.currentAnim = this.anims.right;
                            this.formerpressed = 'right';
                        } else {
                            this.vel.x = -this.movementspeed;
                            this.xydivision = this.distancetotargety / Math.abs(this.distancetotargetx);
                            this.vel.y = this.xydivision * this.movementspeed;
                            this.currentAnim = this.anims.left;
                            this.formerpressed = 'left';
                        }
                        // einde Math.ads(this.distancetotarget.x) > Math.abs(this.distancetotarget.y)
                    } else {
                        if (this.distancetotargety > 1){
                            this.vel.y = this.movementspeed;
                            this.xydivision = this.distancetotargetx / this.distancetotargety;
                            this.vel.x = this.xydivision * this.movementspeed;
                            this.currentAnim = this.anims.down;
                            this.formerpressed = 'down';
                        } else {
                            this.vel.y = -this.movementspeed;
                            this.xydivision = this.distancetotargetx / Math.abs(this.distancetotargety);
                            this.vel.x = this.xydivision * this.movementspeed;
                            this.currentAnim = this.anims.up;
                            this.formerpressed = 'up';
                        }
                    }
                    //einde this.distancetotargetx > 0 || this.distancetotargety > 0
                } else {
                    this.vel.x = 0;
                    this.vel.y = 0;

                    this.destinationx = 99999999;
                    this.destinationy = 99999999;

                    if (this.formerpressed == 'up') {
                        this.currentAnim = this.anims.idleup;
                    } else if (this.formerpressed == 'right') {
                        this.currentAnim = this.anims.idleright;
                    } else if (this.formerpressed == 'down') {
                        this.currentAnim = this.anims.idledown;
                    } else if (this.formerpressed == 'left') {
                        this.currentAnim = this.anims.idleleft;
                    }
                }
            }
            // End Mouse Movement

            this.parent();
        }
    });
});