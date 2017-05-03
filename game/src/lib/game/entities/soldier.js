ig.module(
    'game.entities.soldier'
).requires(
    'impact.entity',

    'plugins.entity',
    'plugins.texture-atlas',
    'plugins.anims.soldier-texture',
    'plugins.anims.soldier-attack'
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

        soldierMoveAtlas: null,
        soldierMoveImage: new ig.Image('media/entity/player/soldier.png'),
        soldierAttackAtlas: null,
        soldierAttackImage: new ig.Image('media/entity/player/soldier-attack.png'),

        animationSpeed: .1,
        shootAttackSpeed: .2,
        meleeAttackSpeed: .1,
        angleState: 'down',
        isBusy: null,
        moveTimer: new ig.Timer(),
        moveDelay: 0.2,
        flip: false,

        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            this.isBusy = false;
            this.soldierMoveAtlas = new ig.TextureAtlas(this.soldierMoveImage, new ig.SoldierTexture().sprites);
            this.soldierAttackAtlas = new ig.TextureAtlas(this.soldierAttackImage, new ig.SoldierAttack().sprites);

            // Movement
            this.addTextureAtlasAnim(this.soldierMoveAtlas, 'down', this.animationSpeed,
                ['soldier-down1.png', 'soldier-down2.png', 'soldier-down3.png',
                    'soldier-down4.png', 'soldier-down5.png', 'soldier-down6.png'],
                false);
            this.addTextureAtlasAnim(this.soldierMoveAtlas, 'up', this.animationSpeed,
                ['soldier-up1.png', 'soldier-up2.png', 'soldier-up3.png',
                    'soldier-up4.png', 'soldier-up5.png', 'soldier-up6.png'],
                false);
            this.addTextureAtlasAnim(this.soldierMoveAtlas, 'downRight', this.animationSpeed,
                ['soldier-downright1.png', 'soldier-downright2.png', 'soldier-downright3.png',
                    'soldier-downright4.png', 'soldier-downright5.png', 'soldier-downright6.png'],
                false);
            this.addTextureAtlasAnim(this.soldierMoveAtlas, 'upRight', this.animationSpeed,
                ['soldier-upright1.png', 'soldier-upright2.png', 'soldier-upright3.png',
                    'soldier-upright4.png', 'soldier-upright5.png', 'soldier-upright6.png'],
                false);
            this.addTextureAtlasAnim(this.soldierMoveAtlas, 'right', this.animationSpeed,
                ['soldier-right1.png', 'soldier-right2.png', 'soldier-right3.png',
                    'soldier-right4.png', 'soldier-right5.png', 'soldier-right6.png'],
                false);

            //Attack - Melee
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeDown', this.meleeAttackSpeed,
                ['soldier-melee-down1.png', 'soldier-melee-down2.png', 'soldier-melee-down3.png',
                    'soldier-melee-down4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeDownLeft', this.meleeAttackSpeed,
                ['soldier-melee-down-left1.png', 'soldier-melee-down-left2.png', 'soldier-melee-down-left3.png',
                    'soldier-melee-down-left4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeDownRight', this.meleeAttackSpeed,
                ['soldier-melee-down-right1.png', 'soldier-melee-down-right2.png', 'soldier-melee-down-right3.png',
                    'soldier-melee-down-right4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeLeft', this.meleeAttackSpeed,
                ['soldier-melee-left1.png', 'soldier-melee-left2.png', 'soldier-melee-left3.png',
                    'soldier-melee-left4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeRight', this.meleeAttackSpeed,
                ['soldier-melee-right1.png', 'soldier-melee-right2.png', 'soldier-melee-right3.png',
                    'soldier-melee-right4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeUp', this.meleeAttackSpeed,
                ['soldier-melee-up1.png', 'soldier-melee-up2.png', 'soldier-melee-up3.png',
                    'soldier-melee-up4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeUpLeft', this.meleeAttackSpeed,
                ['soldier-melee-up-left1.png', 'soldier-melee-up-left2.png', 'soldier-melee-up-left3.png',
                    'soldier-melee-up-left4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeUpRight', this.meleeAttackSpeed,
                ['soldier-melee-up-right1.png', 'soldier-melee-up-right2.png', 'soldier-melee-up-right3.png',
                    'soldier-melee-up-right4.png'], false);

            //Attack - Shoot
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootDown', this.shootAttackSpeed,
                ['soldier-shoot-down1.png', 'soldier-shoot-down2.png', 'soldier-shoot-down3.png'], true);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootDownRightBack', this.shootAttackSpeed,
                ['soldier-shoot-down-right-back1.png', 'soldier-shoot-down-right-back2.png', 'soldier-shoot-down-right-back3.png'], true);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootDownRightFront', this.shootAttackSpeed,
                ['soldier-shoot-down-right-front1.png', 'soldier-shoot-down-right-front2.png', 'soldier-shoot-down-right-front3.png'], true);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootRightBack', this.shootAttackSpeed,
                ['soldier-shoot-right-back1.png', 'soldier-shoot-right-back2.png', 'soldier-shoot-right-back3.png'], true);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootRightFront', this.shootAttackSpeed,
                ['soldier-shoot-right-front1.png', 'soldier-shoot-right-front2.png', 'soldier-shoot-right-front3.png'], true);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootUp', this.shootAttackSpeed,
                ['soldier-shoot-up1.png', 'soldier-shoot-up2.png', 'soldier-shoot-up3.png'], true);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootUpRightBack', this.shootAttackSpeed,
                ['soldier-shoot-up-right-back1.png', 'soldier-shoot-up-right-back2.png', 'soldier-shoot-up-right-back3.png'], true);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootUpRightFront', this.shootAttackSpeed,
                ['soldier-shoot-up-right-front1.png', 'soldier-shoot-up-right-front2.png', 'soldier-shoot-up-right-front3.png'], true);

            // Idle
            this.addTextureAtlasAnim(this.soldierMoveAtlas, 'idleUp', this.animationSpeed, ['soldier-idle1.png'], false);
            this.addTextureAtlasAnim(this.soldierMoveAtlas, 'idleUpRight', this.animationSpeed, ['soldier-idle2.png'], false);
            this.addTextureAtlasAnim(this.soldierMoveAtlas, 'idleRight', this.animationSpeed, ['soldier-idle3.png'], false);
            this.addTextureAtlasAnim(this.soldierMoveAtlas, 'idleDownRight', this.animationSpeed, ['soldier-idle4.png'], false);
            this.addTextureAtlasAnim(this.soldierMoveAtlas, 'idleDown', this.animationSpeed, ['soldier-idle5.png'], false);

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

        toAngle: function( x ) {
            return (x > 0 ? x : (2*Math.PI + x)) * 360 / (2*Math.PI);
        },

        update: function() {

            // Player Movement
            var state_right = ig.input.state('right');
            var state_left = ig.input.state('left');
            var state_up = ig.input.state('up');
            var state_down = ig.input.state('down');
            var pressed_attack = ig.input.pressed('attack');
            var pressed_shoot = ig.input.pressed('shoot');

            // Left
            if (state_left && !state_up && !state_down) {
                this.isBusy = true;
                this.flip = true;
                this.vel.x = -this.speed;
                this.vel.y = 0;
                this.currentAnim = this.anims.right;
            }
            // Right
            else if (state_right && !state_up && !state_down) {
                this.isBusy = true;
                this.flip = false;
                this.vel.x = this.speed;
                this.vel.y = 0;
                this.currentAnim = this.anims.right;
            }
            // Up
            else if (state_up && !state_left && !state_right) {
                this.isBusy = true;
                this.flip = false;
                this.vel.y = -this.speed;
                this.vel.x = 0;
                this.currentAnim = this.anims.up;
            }
            // Up-Right
            else if (state_up && state_right && !state_down) {
                this.isBusy = true;
                this.flip = false;
                this.vel.y = -this.speed * .707;
                this.vel.x = this.speed * .707;
                this.currentAnim = this.anims.upRight;
            }
            // Up-Left
            else if (state_up && state_left && !state_down) {
                this.isBusy = true;
                this.flip = true;
                this.vel.y = -this.speed * .707;
                this.vel.x = -this.speed * .707;
                this.currentAnim = this.anims.upRight;
            }
            // Down
            else if (state_down && !state_left && !state_right) {
                this.isBusy = true;
                this.flip = false;
                this.vel.y = this.speed;
                this.vel.x = 0;
                this.currentAnim = this.anims.down;
            }
            // Down-Right
            else if (state_down && state_right && !state_up) {
                this.isBusy = true;
                this.flip = false;
                this.vel.y = this.speed * .707;
                this.vel.x = this.speed * .707;
                this.currentAnim = this.anims.downRight;
            }
            // Down-Left
            else if (state_down && state_left && !state_up ) {
                this.isBusy = true;
                this.flip = true;
                this.vel.y = this.speed * .707;
                this.vel.x = -this.speed * .707;
                this.currentAnim = this.anims.downRight;
            } else {
                if (!ig.input.state('shoot') || !ig.input.state('attack')) {
                    this.isBusy = false;
                }
                this.vel.x = 0;
                this.vel.y = 0;
            }

            var radians = Math.atan2(this.pos.y - ig.input.mouse.y, this.pos.x - ig.input.mouse.x);
            var dest = this.toAngle(radians);
            var angle = this.angleToMouse();

            // ATTACK - SHOOT
            if (pressed_shoot) {
                this.vel.x = 0;
                this.vel.y = 0;
                this.isBusy = true;
                this.moveTimer.reset();

                //Down-Left
                if (dest >= 290 && dest < 350) {
                    console.log('down left');
                    this.flip = true;
                    this.currentAnim = this.anims.shootDownRightFront;
                }
                // down 1.3 < x < 1.7
                else if (dest >= 260 && dest < 290) {
                    console.log('down');
                    this.flip = false;
                    this.currentAnim = this.anims.shootDown;
                }
                // downright 0.1 <= x < 1.3
                else if (dest >= 190.0 && dest < 260.0) {
                    console.log('down right');
                    this.flip = false;
                    this.currentAnim = this.anims.shootDownRightFront;
                }
                // right -.1 <= x < 0 || 0 < x < 0.1
                else if (dest >= 170.0 && dest < 190.0) {
                    console.log('right');
                    this.flip = false;
                    this.currentAnim = this.anims.shootRightFront;
                }
                // upright -1.3 <= x < -.1
                else if (dest >= 100.0 && dest < 170.0) {
                    this.flip = false;
                    this.currentAnim = this.anims.shootUpRightFront;
                }
                // up -1.7 <= x < -1.3
                else if (dest >= 80.0 && dest < 100) {
                    this.flip = false;
                    this.currentAnim = this.anims.shootUp;
                }
                // upleft -2.9 <= x < -1.7
                else if (dest >= 10.0 && dest < 80.0) {
                    this.flip = true;
                    this.currentAnim = this.anims.shootUpRightBack;
                }
                // left -2.9 < x -3.0 || 3 < 2.9
                else if ((dest >= 0 && dest < 10.0) || (dest >= 350.0 && dest <= 360)) {
                    this.flip = true;
                    this.currentAnim = this.anims.shootRightFront;
                }

                // Spawn Bullet
                ig.game.socket.emit('spawnbullet',1,this.gamename,this.mouseangle);
                ig.game.spawnEntity(EntityBullet, this.pos.x + 30, this.pos.y + 30, {flip:this.flip,bullettype:1, angle: angle});

                setTimeout(function() {
                    this.isBusy = false;
                }, 3000);

            }

            // ATTACK - MELEE
            if (pressed_attack) {
                this.vel.x = 0;
                this.vel.y = 0;
                this.isBusy = true;
                this.moveTimer.reset();

                //Down-Left
                if (dest >= 290 && dest < 350) {
                    this.currentAnim = this.anims.meleeDownLeft;
                }
                // down 1.3 < x < 1.7
                else if (dest >= 260 && dest < 290) {
                    this.currentAnim = this.anims.meleeDown;
                }
                // downright 0.1 <= x < 1.3
                else if (dest >= 190.0 && dest < 260.0) {
                    this.currentAnim = this.anims.meleeDownRight;
                }
                // right -.1 <= x < 0 || 0 < x < 0.1
                else if (dest >= 170.0 && dest < 190.0) {
                    this.currentAnim = this.anims.meleeRight;
                }
                // upright -1.3 <= x < -.1
                else if (dest >= 100.0 && dest < 170.0) {
                    this.currentAnim = this.anims.meleeUpRight;
                }
                // up -1.7 <= x < -1.3
                else if (dest >= 80.0 && dest < 100) {
                    // this.currentAnim = this.anims.meleeUp;
                    this.currentAnim = this.anims.meleeUp.rewind();
                }
                // upleft -2.9 <= x < -1.7
                else if (dest >= 10.0 && dest < 80.0) {
                    this.flip = true;
                    // this.currentAnim = this.anims.meleeUpRight;
                    this.currentAnim = this.anims.meleeRight.rewind();
                }
                // left -2.9 < x -3.0 || 3 < 2.9
                else if ((dest >= 0 && dest < 10.0) || (dest >= 350.0 && dest <= 360)) {
                    this.flip = true;
                    // this.currentAnim = this.anims.meleeRight;
                    this.currentAnim = this.anims.meleeRight.rewind();

                }
                // this.currentAnim = this.anims.meleeDownLeft.rewind();
                // this.currentAnim = this.anims.meleeDown.rewind();
                // this.currentAnim = this.anims.meleeDownRight.rewind();
                // this.currentAnim = this.anims.meleeUp.rewind();
                // this.currentAnim = this.anims.meleeUpRight.rewind();
                // this.currentAnim = this.anims.meleeUpLeft.rewind();
                // this.currentAnim = this.anims.meleeLeft.rewind();
                // this.currentAnim = this.anims.meleeRight.rewind();
                // setTimeout(function() {
                //     this.isBusy = false;
                // }, 3000);

                // Spawn Bullet
                // ig.game.socket.emit('spawnbullet',1,this.gamename,this.mouseangle);
                // ig.game.spawnEntity(EntityBullet, this.pos.x + 30, this.pos.y + 30, {flip:this.flip,bullettype:1, angle: angle});
            }

            this.currentAnim.flip.x = this.flip;

            // TEST IDLE
            if (this.isBusy == false && this.moveTimer.delta() > this.moveDelay) {
                //Down-Left
                if (dest >= 290 && dest < 350) {
                    this.flip = true;
                    this.currentAnim = this.anims.idleDownRight;
                }
                // down 1.3 < x < 1.7
                else if (dest >= 260 && dest < 290) {
                    this.flip = false;
                    this.currentAnim = this.anims.idleDown;
                }
                // downright 0.1 <= x < 1.3
                else if (dest >= 190.0 && dest < 260.0) {
                    this.flip = false;
                    this.currentAnim = this.anims.idleDownRight;
                }
                // right -.1 <= x < 0 || 0 < x < 0.1
                else if (dest >= 170.0 && dest < 190.0) {
                    this.flip = false;
                    this.currentAnim = this.anims.idleRight;
                }
                // upright -1.3 <= x < -.1
                else if (dest >= 100.0 && dest < 170.0) {
                    this.flip = false;
                    this.currentAnim = this.anims.idleUpRight;
                }
                // up -1.7 <= x < -1.3
                else if (dest >= 80.0 && dest < 100) {
                    this.flip = false;
                    this.currentAnim = this.anims.idleUp;
                }
                // upleft -2.9 <= x < -1.7
                else if (dest >= 10.0 && dest < 80.0) {
                    this.flip = true;
                    this.currentAnim = this.anims.idleUpRight;
                }
                // left -2.9 < x -3.0 || 3 < 2.9
                else if ((dest >= 0 && dest < 10.0) || (dest >= 350.0 && dest <= 360)) {
                    this.flip = true;
                    this.currentAnim = this.anims.idleRight;
                }
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