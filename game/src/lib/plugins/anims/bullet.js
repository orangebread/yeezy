ig.module(
    'plugins.anims.bullet'
)
    .requires(
    )
    .defines(function(){
        "use strict";

        // This module holds our TexturePacker exported JSON arrays
        ig.BulletTextures = ig.Class.extend({
            sprites: {
                "frames": [

                    {
                        "filename": "bullet.png",
                        "frame": {"x":0,"y":0,"w":12,"h":16},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":12,"h":16},
                        "sourceSize": {"w":12,"h":16},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "bullet2.png",
                        "frame": {"x":12,"y":0,"w":12,"h":16},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":12,"h":16},
                        "sourceSize": {"w":12,"h":16},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "bullet3.png",
                        "frame": {"x":24,"y":0,"w":12,"h":16},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":12,"h":16},
                        "sourceSize": {"w":12,"h":16},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "bullet4.png",
                        "frame": {"x":36,"y":0,"w":12,"h":16},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":12,"h":16},
                        "sourceSize": {"w":12,"h":16},
                        "pivot": {"x":0.5,"y":0.5}
                    }],
                "meta": {
                    "app": "http://www.codeandweb.com/texturepacker",
                    "version": "1.0",
                    "image": "bullet.png",
                    "format": "RGBA8888",
                    "size": {"w":48,"h":16},
                    "scale": "1",
                    "smartupdate": "$TexturePacker:SmartUpdate:fcae3ca96b3ccf1423336b483728e49f:840c4c5187cb49bfec16024cc45e7ded:ce0aeb6b1dd09bd42d31ec6c01e81ef2$"
                }
            }
        });

    });
