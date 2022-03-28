'use strict';

// import { Cell } from './cell.js';
import { Board } from './board.js';

const scoreDisplay =  document.querySelector('.score');
const resultDisplay = document.querySelector('.result');

export const  colorCell = [
    '#C5C6BE',
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
        this.board.generateNewCell();
		document.addEventListener('keyup', this.clickControl.bind(this));
    }

    checkIsGameOver() {
        console.log('checkIsGameOver');
    }

    clickControl(event) {
        if (event.key === 'ArrowUp') {
            this.board.combineColumn();
            this.board.movingColumn('up');
            this.board.generateNewCell(); 
        } else if (event.key === 'ArrowDown') {
            this.board.combineColumn();
            this.board.movingColumn('down');
            this.board.generateNewCell();
        } else if (event.key === 'ArrowRight') {
            this.board.combineRow();
            this.board.movingRow('right');
            this.board.generateNewCell();
        } else if (event.key === 'ArrowLeft') {
            this.board.combineRow();
            this.board.movingRow('left');
            this.board.generateNewCell();
        }
    }
}

const start = new GameManager();
start.init();

