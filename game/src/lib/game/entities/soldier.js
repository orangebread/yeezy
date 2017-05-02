ig.module(
    'game.entities.soldier'
).requires(
    'impact.entity',

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
        attackSpeed: .1,
        flip: false,

        init: function( x, y, settings ) {
            this.parent( x, y, settings );

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
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeDown', this.attackSpeed,
                ['soldier-melee-down1.png', 'soldier-melee-down2.png', 'soldier-melee-down3.png',
                    'soldier-melee-down4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeDownLeft', this.attackSpeed,
                ['soldier-melee-down-left1.png', 'soldier-melee-down-left2.png', 'soldier-melee-down-left3.png',
                    'soldier-melee-down-left4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeDownRight', this.attackSpeed,
                ['soldier-melee-down-right1.png', 'soldier-melee-down-right2.png', 'soldier-melee-down-right3.png',
                    'soldier-melee-down-right4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeLeft', this.attackSpeed,
                ['soldier-melee-left1.png', 'soldier-melee-left2.png', 'soldier-melee-left3.png',
                    'soldier-melee-left4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeRight', this.attackSpeed,
                ['soldier-melee-right1.png', 'soldier-melee-right2.png', 'soldier-melee-right3.png',
                    'soldier-melee-right4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeUp', this.attackSpeed,
                ['soldier-melee-up1.png', 'soldier-melee-up2.png', 'soldier-melee-up3.png',
                    'soldier-melee-up4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeUpLeft', this.attackSpeed,
                ['soldier-melee-up-left1.png', 'soldier-melee-up-left2.png', 'soldier-melee-up-left3.png',
                    'soldier-melee-up-left4.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'meleeUpRight', this.attackSpeed,
                ['soldier-melee-up-right1.png', 'soldier-melee-up-right2.png', 'soldier-melee-up-right3.png',
                    'soldier-melee-up-right4.png'], false);

            //Attack - Shoot
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootDown', this.attackSpeed,
                ['soldier-shoot-down1.png', 'soldier-shoot-down2.png', 'soldier-shoot-down3.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootDownRightBack', this.attackSpeed,
                ['soldier-shoot-down-right-back1.png', 'soldier-shoot-down-right-back2.png', 'soldier-shoot-down-right-back3.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootDownRightFront', this.attackSpeed,
                ['soldier-shoot-down-right-front1.png', 'soldier-shoot-down-right-front2.png', 'soldier-shoot-down-right-front3.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootRightBack', this.attackSpeed,
                ['soldier-shoot-right-back1.png', 'soldier-shoot-right-back2.png', 'soldier-shoot-right-back3.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootRightFront', this.attackSpeed,
                ['soldier-shoot-right-front1.png', 'soldier-shoot-right-front2.png', 'soldier-shoot-right-front3.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootUp', this.attackSpeed,
                ['soldier-shoot-up1.png', 'soldier-shoot-up2.png', 'soldier-shoot-up3.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootUpRightBack', this.attackSpeed,
                ['soldier-shoot-up-right-back1.png', 'soldier-shoot-up-right-back2.png', 'soldier-shoot-up-right-back3.png'], false);
            this.addTextureAtlasAnim(this.soldierAttackAtlas, 'shootUpRightFront', this.attackSpeed,
                ['soldier-shoot-up-right-front1.png', 'soldier-shoot-up-right-front2.png', 'soldier-shoot-up-right-front3.png'], false);

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
            var pressed_attack = ig.input.pressed('attack');
            var pressed_shoot = ig.input.pressed('shoot');

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
            else if (state_up && state_right && !state_down) {
                this.flip = false;
                this.vel.y = -this.speed * .707;
                this.vel.x = this.speed * .707;
                this.currentAnim = this.anims.upRight;
            }
            // Up-Left
            else if (state_up && state_left && !state_down) {
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
            else if (state_down && state_right && !state_up) {
                this.flip = false;
                this.vel.y = this.speed * .707;
                this.vel.x = this.speed * .707;
                this.currentAnim = this.anims.downRight;
            }
            // Down-Left
            else if (state_down && state_left && !state_up ) {
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
            if (pressed_shoot){
                ig.game.socket.emit('spawnbullet',1,this.gamename,this.mouseangle);
                ig.game.spawnEntity(EntityBullet, this.pos.x + 30, this.pos.y + 30, {flip:this.flip,bullettype:1});
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