ig.module( 'game.entities.bullet')
    .requires('impact.entity')
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

            animSheet: new ig.AnimationSheet( 'media/bullet.png', 10, 10),

            init: function(x, y, settings) {
                this.parent(x, y, settings);
                this.addAnim( 'idle', .04, [0]);

                this.vel.x = Math.cos(this.angle) * 600;
                this.vel.y = Math.sin(this.angle) * 600;
            },

            handleMovementTrace: function( res ) {
                this.parent( res );
                if (res.collision.x || res.collision.y) {
                    this.kill();
                }
            },

            /*
             check: function( other) {
             if (other.name == "block") {
             this.kill();
             }
             this.kill();
             }
             */
        });

        // Network Bullet
        EntityNetbullet = ig.Entity.extend({
            size: {x: 10, y: 10},
            offset: {x: 20, y: 20},
            maxVel: {x: 600, y: 600},
            bullettype: 1,
            animangle: 0,
            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B, // Check Against B - our evil enemy group
            collides: ig.Entity.COLLIDES.NONE,

            animSheet: new ig.AnimationSheet( 'media/bullet.png', 10, 10),

            init: function(x, y, settings) {
                this.parent(x, y, settings);
                this.addAnim( 'idle', .04, [0])

                this.vel.x = Math.cos(this.animangle) * 600;
                this.vel.y = Math.sin(this.animangle) * 600;
            },

            handleMovementTrace: function( res ) {
                this.parent( res );
                if (res.collision.x || res.collision.y) {
                    this.kill();
                }
            },
        });
    });