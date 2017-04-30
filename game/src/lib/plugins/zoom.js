ig.module(
    'plugins.game.zoom'
).requires(
    'impact.game'
).defines(function () {
    ig.Zoom = {
        draw: function() {
            if (this.screen.zoom != undefined) {
                ig.system.context.save();
                ig.system.context.scale(this.screen.zoom || 1, this.screen.zoom || 1);

                ig.system.width = ig.system.realWidth / (this.screen.zoom || 1);
                ig.system.height = ig.system.realHeight / (this.screen.zoom || 1);

                this.parent();

                ig.system.context.restore();

                if (this.screen.zoom > 1) {
                    ig.System.SCALE.CRISP(ig.system.canvas, ig.system.context);
                } else {
                    ig.System.SCALE.SMOOTH(ig.system.canvas, ig.system.context);
                }
            } else {
                this.parent();
            }
        }
    };
});