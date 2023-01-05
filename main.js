const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = 768;

//load sprites
ASSET_MANAGER.queueDownload("./assets/sprites/sprite_Amog.png");
ASSET_MANAGER.queueDownload("./assets/sprites/sprite_YePlayer.png");
//load audio
ASSET_MANAGER.queueDownload("./assets/audio/audio_plug.mp3");
ASSET_MANAGER.queueDownload("./assets/audio/audio_sortingAlgorithms.mp3");
ASSET_MANAGER.queueDownload("./assets/audio/audio_vineBoom.mp3");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = true;
	ctx.imageSmoothingQuality = "high";

	//add entities
	gameEngine.addEntity(new Ye(gameEngine)); //wth, is it reversed??
	for (i = 0; i < 10000; i++) {
		gameEngine.addEntity(new Amog(gameEngine));
	}

	gameEngine.init(ctx);

	gameEngine.start();
});
