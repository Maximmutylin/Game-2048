'use strict';

// import { Cell } from './classCell.js';
import { Board } from './classBoard.js';

function clickControl(event) {
    if (event.key === 'ArrowUp') {
        console.log('Вверх');
    } else if (event.key === 'ArrowDown') {
        console.log('Вниз');
    } else if (event.key === 'ArrowRight') {
        console.log('Вправо');  
    } else if (event.key === 'ArrowLeft') {
        console.log('Влево');
    } else {
        console.log('Other');
    }
}

const scoreDisplay =  document.querySelector('.score');
const resultDisplay = document.querySelector('.result');

export const  colorCell = [
    '#afa192',
    '#eee4da',
    '#ede0c8',
    '#f2b179',
    '#ffcea4',
    '#e8c064',
    '#ffab6e',
    '#fd9982',
    '#ead79c',
    '#76daff',
    '#beeaa5',
    '#d7d4f0',
];

class GameManager {
    constructor() {
        this.isGameOver = false; 
        this.score = 0;
        this.board = null;
    }
    init() {
        this.board = new Board();
        this.board.init();
        this.board.generateNewCell();
        this.board.addColours();
		document.addEventListener('keyup', clickControl);
    }
    checkIsGameOver() {
        console.log('checkIsGameOver');
    }
}

const start = new GameManager();
start.init();

