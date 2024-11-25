

export class GameScene extends Phaser.Scene {
    
    constructor(key) {
        super(key);
        this.isGameRunning = false;
    }


    get gameHeight() {
        return this.game.config.height;
    }

    get gameWidth() {
        return this.game.config.width;
    }
}