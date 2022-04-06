'use strict';

import { Board } from './board.js';

export const scoreDisplay =  document.querySelector('.score');
const bestResult = document.querySelector('.best-result');
const button = document.querySelector('.restart-button');

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

export class GameManager {
    constructor() {
        this.isGameOver = false; 
        this.board = new Board();
        this.url = 'https://api.kazanina-online.ru/api/point';
    }
    
    init() {
        this.board.init();
        this.board.generateNewCell();
        this.board.generateNewCell();
	    document.addEventListener('keyup', this.clickControl.bind(this));
        this.restartGame();
        this.getRecord()
    }

    getRecord() {
        fetch(this.url)
        .then(res => res.json())
        .then(data => processingDate(data))
        .catch(error => console.log(error, 'Error'))

        const processingDate = date => {
            // allCount = [];
            date.forEach(el => {
                bestResult.innerHTML = el.count;
                // el.count = allCount;
            })
            // bestResult.innerHTML = Math.max(...allCount);
        }
    }

    checkIsGameOver() {
        let counter = 0;

        this.board.squares.forEach(e => {
            if (e.value !== '') {
                counter++;
            }

            if (counter === 16) {
                alert('Поражение')
                this.isGameOver = true;
                //Заблочить кнопки вывести вы проиграли
            }

            if (e.value === 2048) {
                alert('Вы победили')
            }
        })
    }

    clickControl(event) {
        if (event.key === 'ArrowUp') {
            this.board.movingColumn('up');
            this.board.combineColumn();
            this.board.movingColumn('up');
            this.checkIsGameOver();
            this.board.generateNewCell(); 
        } else if (event.key === 'ArrowDown') {
            this.board.movingColumn();
            this.board.combineColumn();
            this.board.movingColumn();
            this.checkIsGameOver();
            this.board.generateNewCell();
        } else if (event.key === 'ArrowRight') {
            this.board.movingRow();
            this.board.combineRow();
            this.board.movingRow();
            this.checkIsGameOver();
            this.board.generateNewCell();
        } else if (event.key === 'ArrowLeft') {
            this.board.movingRow('left');
            this.board.combineRow();
            this.board.movingRow('left');
            this.checkIsGameOver();
            this.board.generateNewCell();
            
        }
    }

    restartGame() {
        const reset = () => {
            const cells = document.querySelectorAll('.cell');

            cells.forEach(el => {
                el.remove();
            })
            
            this.isGameOver = false; 
            this.board = new Board();

            this.board.init();
            this.board.generateNewCell();
            this.board.generateNewCell();
            this.restartGame();

            this.board.score = 0;
            scoreDisplay.innerHTML = 0;
        }
        button.addEventListener('click', reset); 
    }
}

const start = new GameManager();
start.init();

