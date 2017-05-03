ig.module(
    'plugins.packed-textures'
)
    .requires(
        'plugins.texture-atlas'
    )
    .defines(function () {

        ig.PackedTextures = ig.Class.extend({
            textureAtlas: null,
            entityJSON: null,
            screenJSON: null,
            staticInstantiate: function( ignoredFoo ) {
                if( ig.PackedTextures.instance == null ) {
                    return null;
                }
                else {
                    return ig.PackedTextures.instance;
                }
            },

            init: function(  ) {
                ig.PackedTextures.instance = this;

                // Attach these to the ig object
                //ig.entitiesTextureAtlas = new ig.TextureAtlas("media/textures/entities.png", this.entityJSON);
                //ig.screensTextureAtlas = new ig.TextureAtlas("media/textures/screens.png", this.screenJSON);
            },

        });

        ig.textureData = new ig.PackedTextures();
    })