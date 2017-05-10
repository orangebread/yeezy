ig.module( 'game.entities.bullet')
    .requires(
        'impact.entity',
        'plugins.anims.bullet')
    .defines(function() {
        EntityBullet = ig.Entity.extend({
            // size: {x: 10, y: 10},
            offset: {x: 20, y: 20},
            maxVel: {x: 400, y: 400},
            pivot: null,
            angle: null,

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B, // Check Against B - our evil enemy group
            collides: ig.Entity.COLLIDES.NONE,

            buttlettype: 1,
            bulletAtlas: null,
            bulletImage: new ig.Image('media/bullet.png'),
            animationSpeed: 0.1,


            init: function(x, y, settings) {
                this.parent(x, y, settings);

                // Initialize animation
                this.initAnim();

                this.vel.x = Math.cos(this.angle) * this.maxVel.x;
                this.vel.y = Math.sin(this.angle) * this.maxVel.y;

                // Reference to bullet
                ig.game.bullet = this;
            },

            // Collison handler
            handleMovementTrace: function( res ) {
                this.parent( res );
                if (res.collision.x || res.collision.y) {
                    this.kill();

                    // ig.game.spawnEntity(EntityBulletEffects, this.pos.x + 30, this.pos.y + 30, {flip: this.flip, angle: this.angleToMouse()} );
                    ig.game.spawnEntity(EntityBulletEffects, this.pos.x + 30, this.pos.y + 30);
                    ig.game.socket.send('client:spawnSimpleEntity', {
                        entityType: "EntityBulletEffects",
                        x: this.pos.x + 30,
                        y: this.pos.y + 30,
                        settings: {flip: this.flip, angle: this.angleToMouse()}
                    });
                }
            },

            // Initialize functions
            initAnim: function() {
                this.bulletAtlas = new ig.TextureAtlas(this.bulletImage, new ig.BulletTextures().sprites);
                this.addTextureAtlasAnim(this.bulletAtlas, 'idle', this.animationSpeed,
                    ['bullet.png', 'bullet2.png', 'bullet3.png', 'bullet4.png'], false);

                this.currentAnim.pivot.x = this.currentAnim;
                this.currentAnim.pivot.y = 0;
                this.currentAnim.angle = this.angle + Math.PI / 2;
            }

            /*
             check: function( other) {
             if (other.name == "block") {
             this.kill();
             }
             this.kill();
             }
             */
        });
    });