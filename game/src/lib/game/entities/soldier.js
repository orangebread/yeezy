ig.module(
    'game.entities.soldier'
).requires(
    'impact.entity',

    'plugins.texture-atlas',
    'plugins.soldier-texture'
).defines(function(){
    EntitySoldier = ig.Entity.extend({
        size: {x: 32, y: 32},
        type: ig.Entity.TYPE.A,
        nettimer: 10,
        name: "player",
        gamename: 'defaultName',
        messageboxtimer: 200,
        messagebox: '',
        speed: 100,

        checkAgainst: ig.Entity.TYPE.NONE,
        collides: ig.Entity.COLLIDES.PASSIVE,

        textureAtlas: null,
        textureImage: new ig.Image('media/soldier.png'),
        animationSpeed: .1,
        flip: false,

        init: function( x, y, settings ) {
            this.parent( x, y, settings );

            this.textureAtlas = new ig.TextureAtlas(this.textureImage, new ig.SoldierTexture().sprites);

            this.addTextureAtlasAnim(this.textureAtlas, 'down', this.animationSpeed,
                ['soldier-down1.png', 'soldier-down2.png', 'soldier-down3.png',
                    'soldier-down4.png', 'soldier-down5.png', 'soldier-down6.png'],
                false);
            this.addTextureAtlasAnim(this.textureAtlas, 'up', this.animationSpeed,
                ['soldier-up1.png', 'soldier-up2.png', 'soldier-up3.png',
                    'soldier-up4.png', 'soldier-up5.png', 'soldier-up6.png'],
                false);
            this.addTextureAtlasAnim(this.textureAtlas, 'downRight', this.animationSpeed,
                ['soldier-downright1.png', 'soldier-downright2.png', 'soldier-downright3.png',
                    'soldier-downright4.png', 'soldier-downright5.png', 'soldier-downright6.png'],
                false);
            this.addTextureAtlasAnim(this.textureAtlas, 'upRight', this.animationSpeed,
                ['soldier-upright1.png', 'soldier-upright2.png', 'soldier-upright3.png',
                    'soldier-upright4.png', 'soldier-upright5.png', 'soldier-upright6.png'],
                false);
            this.addTextureAtlasAnim(this.textureAtlas, 'right', this.animationSpeed,
                ['soldier-right1.png', 'soldier-right2.png', 'soldier-right3.png',
                    'soldier-right4.png', 'soldier-right5.png', 'soldier-right6.png'],
                false);
            this.addTextureAtlasAnim(this.textureAtlas, 'idleUp', this.animationSpeed, ['soldier-idle1.png'], false);
            this.addTextureAtlasAnim(this.textureAtlas, 'idleUpRight', this.animationSpeed, ['soldier-idle2.png'], false);
            this.addTextureAtlasAnim(this.textureAtlas, 'idleRight', this.animationSpeed, ['soldier-idle3.png'], false);
            this.addTextureAtlasAnim(this.textureAtlas, 'idleDownRight', this.animationSpeed, ['soldier-idle4.png'], false);
            this.addTextureAtlasAnim(this.textureAtlas, 'idleDown', this.animationSpeed, ['soldier-idle5.png'], false);

            this.currentAnim = this.anims.idleDown;

            // Set a reference to the player on the game instance
            ig.game.soldier = this;

            var namerand  = Math.floor(Math.random()*999);
            var playername = "player" + namerand;


            // Multiplayer Start
            if (!ig.global.wm) {
                this.gamename = playername;
                ig.game.socket.emit('initializeplayer', this.gamename,this.pos.x,this.pos.y);
            }

        },

        draw: function(x, y, settings) {
            this.parent(x, y, settings);
        },

        update: function() {

            // Mouse Angle
            var mx = ig.input.mouse.x + ig.game.screen.x;
            var my = ig.input.mouse.y + ig.game.screen.y;
            var mouseAngle = Math.atan2(
                my - (this.pos.y + this.size.y/2),
                mx - (this.pos.x + this.size.x/2)
            );
            this.mouseangle = mouseAngle;


            // Player Movement
            var state_right = ig.input.state('right');
            var state_left = ig.input.state('left');
            var state_up = ig.input.state('up');
            var state_down = ig.input.state('down');

            // Left
            if (state_left && !state_up && !state_down) {
                this.flip = true;
                this.vel.x = -this.speed;
                this.vel.y = 0;
                this.currentAnim = this.anims.right;
            }
            // Right
            else if (state_right && !state_up && !state_down) {
                this.flip = false;
                this.vel.x = this.speed;
                this.vel.y = 0;
                this.currentAnim = this.anims.right;
            }
            // Up
            else if (state_up && !state_left && !state_right) {
                this.flip = false;
                this.vel.y = -this.speed;
                this.vel.x = 0;
                this.currentAnim = this.anims.up;
            }
            // Up-Right
            else if (state_up && state_right && !state_down && !state_left) {
                this.flip = false;
                this.vel.y = -this.speed * .707;
                this.vel.x = this.speed * .707;
                this.currentAnim = this.anims.upRight;
            }
            // Up-Left
            else if (state_up && state_left && !state_down && !state_right) {
                this.flip = true;
                this.vel.y = -this.speed * .707;
                this.vel.x = -this.speed * .707;
                this.currentAnim = this.anims.upRight;
            }
            // Down
            else if (state_down && !state_left && !state_right) {
                this.flip = false;
                this.vel.y = this.speed;
                this.vel.x = 0;
                this.currentAnim = this.anims.down;
            }
            // Down-Right
            else if (state_down && state_right && !state_up && !state_left) {
                this.flip = false;
                this.vel.y = this.speed * .707;
                this.vel.x = this.speed * .707;
                this.currentAnim = this.anims.downRight;
            }
            // Down-Left
            else if (state_down && state_left && !state_up && !state_right) {
                this.flip = true;
                this.vel.y = this.speed * .707;
                this.vel.x = -this.speed * .707;
                this.currentAnim = this.anims.downRight;
            } else {
                this.vel.x = 0;
                this.vel.y = 0;
            }

            // Idle
            if (ig.input.released('right')) {
                this.currentAnim = this.anims.idleRight;
            } else if (ig.input.released('left')) {
                this.flip = true;
                this.currentAnim = this.anims.idleRight;
            } if (ig.input.released('up')) {
                this.currentAnim = this.anims.idleUp;
            } if (ig.input.released('down')) {
                this.currentAnim = this.anims.idleDown;
            }

            this.currentAnim.flip.x = this.flip;



            // ATTACK
            if (ig.input.pressed('attack')){
                ig.game.socket.emit('spawnbullet',1,this.gamename,this.mouseangle);
                ig.game.spawnEntity(EntityBullet,this.pos.x + 30, this.pos.y + 30, {flip:this.flip,bullettype:1});
            }

            if (this.nettime < 1){
                ig.game.socket.emit('resyncplayer',this.pos.x,this.pos.y,this.gamename);
                this.nettimer = 10;
            }

            ig.game.socket.emit('moveplayer',this.pos.x, this.pos.y,this.gamename);

            this.parent();
        }
    });
});