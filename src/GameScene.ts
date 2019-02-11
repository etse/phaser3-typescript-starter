import {Scene} from 'phaser';

export class GameScene extends Scene {
    constructor() {
        super({
            key: "GameScene"
        });
    }

    preload() {
        this.load.image("logo", "assets/logo.png");
    }

    create() {
        this.add.sprite(400, 300, "logo");
    }
}
