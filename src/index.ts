import Phaser from 'phaser';
import {GameScene} from "./GameScene";

const config = {
    title: "Phaser3 Typescript Starter",
    width: 800,
    height: 600,
    pixelArt: true,
    type: Phaser.AUTO,
    parent: "game",
    scene: [GameScene],
    input: {
        keyboard: true,
        mouse: false,
        touch: false,
        gamepad: false
    },
    physics: {
        default: 'arcade'
    },
    backgroundColor: "#000000"
};

window.onload = () => {
    const game = new Phaser.Game(config);
};
