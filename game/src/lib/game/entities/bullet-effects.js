ig.module( 'game.entities.bullet-effects')
    .requires(
        'impact.entity',
        'plugins.anims.bullet-effects')
    .defines(function() {
        EntityBulletEffects = ig.Entity.extend({
            // size: {x: 10, y: 10},
            offset: {x: 20, y: 20},
            maxVel: {x: 400, y: 400},
            pivot: null,
            angle: null,

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B, // Check Against B - our evil enemy group
            collides: ig.Entity.COLLIDES.NONE,

            buttlettype: 1,
            bulletEffectsAtlas: null,
            bulletEffectsImage: new ig.Image('media/bullet-effects.png'),
            animationSpeed: 0.1,


            init: function(x, y, settings) {
                this.parent(x, y, settings);

                // Initialize animation
                this.initAnim();

                this.vel.x = Math.cos(this.angle) * this.maxVel.x;
                this.vel.y = Math.sin(this.angle) * this.maxVel.y;

                // Reference to bullet
                ig.game.bulletEffects = this;
            },


            // Initialize functions
            initAnim: function() {
                this.bulletAtlas = new ig.TextureAtlas(this.bulletEffectsImage, new ig.BulletEffectsTextures().sprites);
                this.addTextureAtlasAnim(this.bulletEffectsAtlas, 'object', this.animationSpeed,
                    ['bullet-collision-effect-object1.png', 'bullet-collision-effect-object2.png',
                        'bullet-collision-effect-object3.png', 'bullet-collision-effect-object4.png', 'bullet-collision-effect-object5.png'], false);
                this.addTextureAtlasAnim(this.bulletEffectsAtlas, 'living', this.animationSpeed,
                    ['bullet-collision-effect-living1.png', 'bullet-collision-effect-living2.png',
                        'bullet-collision-effect-living3.png', 'bullet-collision-effect-living4.png', 'bullet-collision-effect-living5.png'], false);

                // this.currentAnim.pivot.x = this.currentAnim;
                // this.currentAnim.pivot.y = 0;
                // this.currentAnim.angle = this.angle + Math.PI / 2;
            }
        });
    });