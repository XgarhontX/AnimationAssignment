class Amog {
  constructor(game) {
    this.widthAndHeight = 510/3;
    //Sprite
    this.game = game
    this.animator = new Animator(ASSET_MANAGER.getAsset("./assets/sprites/sprite_Amog.png"),
        0, 0,
        510, 510,
        3, Math.random() / 20);

    //Pos
    this.x = CANVAS_WIDTH/2; //TODO: centering
    this.y = CANVAS_HEIGHT/2;
    //Speed
    this.speed = 200;
  }

  update() {
    //Random move
    this.x += this.speed * this.game.clockTick * ((Math.random() - 0.5) * 2);
    this.y += this.speed * this.game.clockTick * ((Math.random() - 0.5) * 2);

    //Center if reach edge
    if (this.x < 0 || this.x > CANVAS_WIDTH ||
        this.y < 0 || this.y > CANVAS_HEIGHT) {
      this.x = CANVAS_WIDTH/2;
      this.y = CANVAS_HEIGHT/2;
    }
    if (this.game.keys[" "]) {
      this.x += this.speed * ((Math.random() - 0.5) * 2) * this.game.clockTick * 7;
      this.y += this.speed * ((Math.random() - 0.5) * 2) * this.game.clockTick * 7;
      ASSET_MANAGER.playAsset("./assets/audio/audio_vineBoom.mp3");
      ASSET_MANAGER.playAsset("./assets/audio/audio_sortingAlgorithms.mp3");
    }
  }

  draw(ctx) {
    this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
  }
}