ig.module(
    'plugins.anims.soldier-attack'
).requires()
    .defines(function(){
        "use strict";

        // This module holds our TexturePacker exported JSON arrays
        ig.SoldierAttack = ig.Class.extend({
            sprites: {
                "frames": [

                    {
                        "filename": "soldier-melee-down-left1.png",
                        "frame": {"x":0,"y":0,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-down-left2.png",
                        "frame": {"x":32,"y":0,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-down-left3.png",
                        "frame": {"x":64,"y":0,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-down-left4.png",
                        "frame": {"x":96,"y":0,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-down-right1.png",
                        "frame": {"x":0,"y":32,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-down-right2.png",
                        "frame": {"x":32,"y":32,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-down-right3.png",
                        "frame": {"x":64,"y":32,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-down-right4.png",
                        "frame": {"x":96,"y":32,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-down1.png",
                        "frame": {"x":0,"y":64,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-down2.png",
                        "frame": {"x":32,"y":64,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-down3.png",
                        "frame": {"x":64,"y":64,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-down4.png",
                        "frame": {"x":96,"y":64,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-left1.png",
                        "frame": {"x":0,"y":96,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-left2.png",
                        "frame": {"x":32,"y":96,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-left3.png",
                        "frame": {"x":64,"y":96,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-left4.png",
                        "frame": {"x":96,"y":96,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-right1.png",
                        "frame": {"x":0,"y":128,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-right2.png",
                        "frame": {"x":32,"y":128,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-right3.png",
                        "frame": {"x":64,"y":128,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-right4.png",
                        "frame": {"x":96,"y":128,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up-left1.png",
                        "frame": {"x":0,"y":160,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up-left2.png",
                        "frame": {"x":32,"y":160,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up-left3.png",
                        "frame": {"x":64,"y":160,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up-left4.png",
                        "frame": {"x":96,"y":160,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up-right1.png",
                        "frame": {"x":0,"y":192,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up-right2.png",
                        "frame": {"x":32,"y":192,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up-right3.png",
                        "frame": {"x":64,"y":192,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up-right4.png",
                        "frame": {"x":96,"y":192,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up1.png",
                        "frame": {"x":0,"y":224,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up2.png",
                        "frame": {"x":32,"y":224,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up3.png",
                        "frame": {"x":64,"y":224,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-melee-up4.png",
                        "frame": {"x":96,"y":224,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-down-right-back1.png",
                        "frame": {"x":0,"y":256,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-down-right-back2.png",
                        "frame": {"x":32,"y":256,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-down-right-back3.png",
                        "frame": {"x":64,"y":256,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-down-right-front1.png",
                        "frame": {"x":96,"y":256,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-down-right-front2.png",
                        "frame": {"x":0,"y":288,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-down-right-front3.png",
                        "frame": {"x":32,"y":288,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-down1.png",
                        "frame": {"x":64,"y":288,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-down2.png",
                        "frame": {"x":96,"y":288,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-down3.png",
                        "frame": {"x":0,"y":320,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-right-back1.png",
                        "frame": {"x":32,"y":320,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-right-back2.png",
                        "frame": {"x":64,"y":320,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-right-back3.png",
                        "frame": {"x":96,"y":320,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-right-front1.png",
                        "frame": {"x":0,"y":352,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-right-front2.png",
                        "frame": {"x":32,"y":352,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-right-front3.png",
                        "frame": {"x":64,"y":352,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-up-right-back1.png",
                        "frame": {"x":96,"y":352,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-up-right-back2.png",
                        "frame": {"x":0,"y":384,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-up-right-back3.png",
                        "frame": {"x":32,"y":384,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-up-right-front1.png",
                        "frame": {"x":64,"y":384,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-up-right-front2.png",
                        "frame": {"x":96,"y":384,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-up-right-front3.png",
                        "frame": {"x":0,"y":416,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-up1.png",
                        "frame": {"x":32,"y":416,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-up2.png",
                        "frame": {"x":64,"y":416,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    },
                    {
                        "filename": "soldier-shoot-up3.png",
                        "frame": {"x":96,"y":416,"w":32,"h":32},
                        "rotated": false,
                        "trimmed": false,
                        "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
                        "sourceSize": {"w":32,"h":32},
                        "pivot": {"x":0.5,"y":0.5}
                    }],
                "meta": {
                    "app": "http://www.codeandweb.com/texturepacker",
                    "version": "1.0",
                    "image": "soldier-attack.png",
                    "format": "RGBA8888",
                    "size": {"w":128,"h":448},
                    "scale": "1",
                    "smartupdate": "$TexturePacker:SmartUpdate:94453573414615350432f2be3a0097d5:eedc4ea88e21842453e071fce3bb163b:c1ad88644feffdd76856ee336d26072a$"
                }
            },
        });

    });
