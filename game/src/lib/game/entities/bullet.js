ig.module( 'game.entities.bullet')
    .requires('impact.entity')
    .defines(function() {
        EntityBullet = ig.Entity.extend({
            size: {x: 10, y: 10},
            offset: {x: 20, y: 20},
            maxVel: {x: 600, y: 600},
            buttlettype: 1,

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B, // Check Against B - our evil enemy group
            collides: ig.Entity.COLLIDES.NONE,

            animSheet: new ig.AnimationSheet( 'media/bullet.png', 10, 10),

            init: function(x, y, settings) {
                this.parent(x, y, settings);
                this.addAnim( 'idle', .04, [0]);

                var mx = ig.input.mouse.x + ig.game.screen.x;
                var my = ig.input.mouse.y + ig.game.screen.y;
                var angle = Math.atan2(
                    my - ((this.pos.y - 20) + this.size.y/2),
                    mx - ((this.pos.x - 20) + this.size.x/2)
                );

                this.vel.x = Math.cos(angle) * 600;
                this.vel.y = Math.sin(angle) * 600;
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