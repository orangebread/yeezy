ig.module(
    'game.main'
).requires(
    'impact.game',
    'impact.font',

    'game.levels.world',

    'plugins.camera',
    'plugins.socket-client',

    'game.entities.soldier',
    'game.entities.bullet'


).defines(function(){
    MyGame = ig.Game.extend({
        font: new ig.Font( 'media/04b03.font.png' ),
        socket: null,
        player: null,

        init: function() {

            // Initialize your game here; bind keys etc.
            ig.input.bind(ig.KEY.A, 'left');
            ig.input.bind(ig.KEY.D, 'right');
            ig.input.bind(ig.KEY.W, 'up');
            ig.input.bind(ig.KEY.S, 'down');
            ig.input.initMouse();
            ig.input.bind( ig.KEY.MOUSE1, 'attack');
            ig.input.bind( ig.KEY.MOUSE2, 'shoot');

            this.loadLevel(LevelWorld);

            this.player = this.spawnEntity(EntitySoldier, 200, 200);
            this.socket = new ig.ImpactConnect(this.player, 8080);

            this.setupCamera();
        },

        setupCamera: function() {
            // Set up the camera. The camera's center is at a third of the screen
            // size, i.e. somewhat shift left and up. Damping is set to 3px.
            this.camera = new ig.Camera( ig.system.width/2, ig.system.height/4, 10);

            // The camera's trap (the deadzone in which the player can move with the
            // camera staying fixed) is set to according to the screen size as well.
            this.camera.trap.size.x = ig.system.width/10;
            this.camera.trap.size.y = ig.system.height/3;

            // The lookahead always shifts the camera in walking position; you can
            // set it to 0 to disable.
            //this.camera.lookAhead.x = ig.system.width/6;

            // Set camera's screen bounds and reposition the trap on the player
            this.camera.max.x = this.collisionMap.pxWidth - ig.system.width;
            this.camera.max.y = this.collisionMap.pxHeight - ig.system.height;
            this.camera.set(this.soldier);
        },

        update: function() {
            // Update all entities and backgroundMaps
            this.parent();

            // Camera follows the player
            this.camera.follow(this.soldier);
        },

        draw: function() {
            // Draw all entities and backgroundMaps
            this.parent();
            if (this.soldier) {
                this.soldier.messageboxtimer = this.soldier.messageboxtimer - 1;

                if (this.soldier.messageboxtimer < 1) {
                    this.soldier.messageboxtimer = 100;
                    var newText = '';
                    var newSplit = this.soldier.messagebox.split('\n');
                    for (var i = 0; i < newSplit.length; i++) {
                        if (i > 1) {
                            newText = newText + '\n' + newSplit[i];
                        }
                    }
                    this.soldier.messagebox = newText;
                }

                // Add your own drawing code here
                var x = ig.system.width/2,
                    y = ig.system.height/2;

                this.font.draw(this.soldier.messagebox, 700, 10, ig.Font.ALIGN.CENTER );
            }
        }
    });

    ig.main( '#canvas', MyGame, 60, 1280, 720, 1.5 );

});
