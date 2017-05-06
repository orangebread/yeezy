ig.module( 'game.entities.bullet')
    .requires(
        'impact.entity',
        'plugins.anims.bullet')
    .defines(function() {
        EntityBullet = ig.Entity.extend({
            size: {x: 10, y: 10},
            offset: {x: 20, y: 20},
            maxVel: {x: 600, y: 600},
            buttlettype: 1,
            angle: 0,

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B, // Check Against B - our evil enemy group
            collides: ig.Entity.COLLIDES.NONE,

            bulletAtlas: null,
            bulletImage: new ig.Image('media/bullet.png'),
            animationSpeed: 0.1,

            init: function(x, y, settings) {
                this.parent(x, y, settings);

                this.initAnim();

                this.vel.x = Math.cos(this.angle) * 600;
                this.vel.y = Math.sin(this.angle) * 600;
            },

            handleMovementTrace: function( res ) {
                this.parent( res );
                if (res.collision.x || res.collision.y) {
                    this.kill();
                }
            },

            // Initialize functions
            initAnim: function() {
                this.bulletAtlas = new ig.TextureAtlas(this.bulletImage, new ig.BulletTextures().sprites);

                this.addTextureAtlasAnim(this.bulletAtlas, 'idle', this.animationSpeed,
                    ['bullet1.png', 'bullet2.png', 'bullet3.png', 'bullet4.png'], false);
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