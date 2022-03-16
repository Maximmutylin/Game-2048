import { colorCell } from './script.js'

export class Board {
    constructor() {
        this.widthBoard = 4;
        this.squares = [];
        this.wrapper = document.querySelector('.grid');
    }

    init() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            const square = document.createElement('div');
            square.innerHTML = '';
            square.className = 'cell';
            fragment.appendChild(square);
            this.squares.push(square);
        }
        this.wrapper.appendChild(fragment);
    }
    
    generateNewCell() {
        const randomNumber = Math.floor(Math.random() * this.squares.length);
        if (this.squares[randomNumber].innerHTML === '') {
            this.squares[randomNumber].innerHTML = 2;     
        } else {
            this.generateNewCell();
        }
    }

    addColours() {
        this.squares.forEach(e => {
            e.style.backgroundColor = colorCell[Math.trunc(Math.sqrt(e.innerHTML))];
        })
    }
}
