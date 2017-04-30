ig.module(
    'plugins.soldier-texture'
)
    .requires(
    )
    .defines(function(){
        "use strict";

        // This module holds our TexturePacker exported JSON arrays
        ig.SoldierTexture = ig.Class.extend({
            sprites: {
                "frames": [

                    {
                        "filename": "soldier-down1.png",
                        "frame": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-down2.png",
                        "frame": {"x": 32, "y": 0, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-down3.png",
                        "frame": {"x": 64, "y": 0, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-down4.png",
                        "frame": {"x": 96, "y": 0, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-down5.png",
                        "frame": {"x": 0, "y": 32, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-down6.png",
                        "frame": {"x": 32, "y": 32, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downright1.png",
                        "frame": {"x": 64, "y": 32, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downright2.png",
                        "frame": {"x": 96, "y": 32, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downright3.png",
                        "frame": {"x": 0, "y": 64, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downright4.png",
                        "frame": {"x": 32, "y": 64, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downright5.png",
                        "frame": {"x": 64, "y": 64, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downright6.png",
                        "frame": {"x": 96, "y": 64, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downrightstop1.png",
                        "frame": {"x": 0, "y": 96, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downrightstop2.png",
                        "frame": {"x": 32, "y": 96, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downrightstop3.png",
                        "frame": {"x": 64, "y": 96, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downrightstop4.png",
                        "frame": {"x": 96, "y": 96, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downstop1.png",
                        "frame": {"x": 0, "y": 128, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downstop2.png",
                        "frame": {"x": 32, "y": 128, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downstop3.png",
                        "frame": {"x": 64, "y": 128, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-downstop4.png",
                        "frame": {"x": 96, "y": 128, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-idle1.png",
                        "frame": {"x": 0, "y": 160, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-idle2.png",
                        "frame": {"x": 32, "y": 160, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-idle3.png",
                        "frame": {"x": 64, "y": 160, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-idle4.png",
                        "frame": {"x": 96, "y": 160, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-idle5.png",
                        "frame": {"x": 0, "y": 192, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-right1.png",
                        "frame": {"x": 32, "y": 192, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-right2.png",
                        "frame": {"x": 64, "y": 192, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-right3.png",
                        "frame": {"x": 96, "y": 192, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-right4.png",
                        "frame": {"x": 0, "y": 224, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-right5.png",
                        "frame": {"x": 32, "y": 224, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-right6.png",
                        "frame": {"x": 64, "y": 224, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-rightstop1.png",
                        "frame": {"x": 96, "y": 224, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-rightstop2.png",
                        "frame": {"x": 0, "y": 256, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-rightstop3.png",
                        "frame": {"x": 32, "y": 256, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-rightstop4.png",
                        "frame": {"x": 64, "y": 256, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-up1.png",
                        "frame": {"x": 96, "y": 256, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-up2.png",
                        "frame": {"x": 0, "y": 288, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-up3.png",
                        "frame": {"x": 32, "y": 288, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-up4.png",
                        "frame": {"x": 64, "y": 288, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-up5.png",
                        "frame": {"x": 96, "y": 288, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-up6.png",
                        "frame": {"x": 0, "y": 320, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-upright1.png",
                        "frame": {"x": 32, "y": 320, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-upright2.png",
                        "frame": {"x": 64, "y": 320, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-upright3.png",
                        "frame": {"x": 96, "y": 320, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-upright4.png",
                        "frame": {"x": 0, "y": 352, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-upright5.png",
                        "frame": {"x": 32, "y": 352, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-upright6.png",
                        "frame": {"x": 64, "y": 352, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-uprightstop1.png",
                        "frame": {"x": 96, "y": 352, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-uprightstop2.png",
                        "frame": {"x": 0, "y": 384, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-uprightstop3.png",
                        "frame": {"x": 32, "y": 384, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-uprightstop4.png",
                        "frame": {"x": 64, "y": 384, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-upstop1.png",
                        "frame": {"x": 96, "y": 384, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-upstop2.png",
                        "frame": {"x": 0, "y": 416, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-upstop3.png",
                        "frame": {"x": 32, "y": 416, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    },
                    {
                        "filename": "soldier-upstop4.png",
                        "frame": {"x": 64, "y": 416, "w": 32, "h": 32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 32, "h": 32},
                        "sourceSize": {"w": 32, "h": 32},
                        "pivot": {"x": 0.5, "y": 0.5}
                    }],
                "meta": {
                    "app": "http://www.codeandweb.com/texturepacker",
                    "version": "1.0",
                    "image": "soldier.png",
                    "format": "RGBA8888",
                    "size": {"w": 128, "h": 448},
                    "scale": "1",
                    "smartupdate": "$TexturePacker:SmartUpdate:044977539828e04f5285f23ee61d381c:4b8e0dba2ed99c91accd4011260bdc0d:1365469667d93bb6b74b9d28a96b6600$"
                }
            }
        });

    });
