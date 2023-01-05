class Ye {
    constructor(game) {
        //Sprite
        this.game = game
        this.animator = new Animator(ASSET_MANAGER.getAsset("./assets/sprites/sprite_YePlayer.png"),
            0, 0,
            140, 238,
            1, 100000);

        //Pos
        this.x = 0;
        this.y = 0;
        //Speed
        this.speed = 1000;

        // //BGM //TODO: This doesn't work and requires browser autoplay ewww
        // ASSET_MANAGER.playAsset("./assets/audio/audio_sortingAlgorithms.mp3");
    }

    update() {
        if (this.game.keys["w"] || this.game.keys["W"]) { //TODO: eww why r we accounting for capitals too? KeyW doesn't work
            this.y -= this.speed * this.game.clockTick;
            ASSET_MANAGER.playAsset("./assets/audio/audio_plug.mp3");
        }
        if (this.game.keys["s"] || this.game.keys["S"]) {
            this.y += this.speed * this.game.clockTick;
            ASSET_MANAGER.playAsset("./assets/audio/audio_plug.mp3");
        }
        if (this.game.keys["a"] || this.game.keys["A"]) {
            this.x -= this.speed * this.game.clockTick;
            ASSET_MANAGER.playAsset("./assets/audio/audio_plug.mp3");
        }
        if (this.game.keys["d"] || this.game.keys["D"]) {
            this.x += this.speed * this.game.clockTick;
            ASSET_MANAGER.playAsset("./assets/audio/audio_plug.mp3");
        }
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}