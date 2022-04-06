'use strict';

import { Cell } from './cell.js';
import { scoreDisplay } from './script.js';
export class Board {
    constructor() {
        this.widthBoard = 4;
        this.squares = [];
        this.wrapper = document.querySelector('.grid');
        this.score = 0;
    }

    init() {
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            const square = new Cell();
            
            fragment.appendChild(square.getNewElement());
            this.squares.push(square);
        }
        
        this.wrapper.appendChild(fragment);
    }
    
    generateNewCell() {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * this.squares.length);
        if (this.squares[randomNumber].getValue() === '') {
            this.squares[randomNumber].setValue(2);     
        } else {
            this.generateNewCell();
        }
        }, 30)
        
    }

    movingColumn(direction) {
        for (let i = 0; i < this.widthBoard; i++) {
            this.fillColumn(i, direction === 'up');
        }
    }

    movingRow(direction) {
        for (let i = 0; i < this.widthBoard * this.widthBoard; i++) {
            if (i % 4 === 0) {
                this.fillRow(i, direction === 'left');
            }
            
        }
    }

    fillColumn(indexColumn, isUp) {
        const column = [];
    
        for (let i = 0; i < this.widthBoard; i++) {
            column.push(this.squares[indexColumn + this.widthBoard * i ].getValue());
        }
    
        const filteredColumn = column.filter(num => num);
        const emptyCellInColumnSize = this.widthBoard - filteredColumn.length;
    
        const newColumn = this.makeNewSequence(filteredColumn, emptyCellInColumnSize, isUp);
    
        newColumn.forEach((value, i) => {
            this.squares[indexColumn + (this.widthBoard * i)].setValue(value);
        });
    }
    fillRow(rowIndex, isLeft) {
        const row = [];
    
        for (let i = 0; i < this.widthBoard; i++) {
            row.push(this.squares[rowIndex + i].getValue());
        }
    
        const filteredRow = row.filter(num => num);
        const emptyCellInRowSize = this.widthBoard - filteredRow.length;
    
        const newRow = this.makeNewSequence(filteredRow, emptyCellInRowSize, isLeft);
    
        newRow.forEach((value, i) => {
            this.squares[rowIndex + i].setValue(value);
        });
    }

    makeNewSequence(numbers, emptySequensSize, isReverse) {
        const emptySequence = Array(emptySequensSize).fill('');
    
        return isReverse ? numbers.concat(emptySequence) : emptySequence.concat(numbers);
    }

    combineColumn() {
        for (let i = 15; i >= 4; i--) {
            if ((this.squares[i].getValue() === this.squares[i - this.widthBoard].getValue()) && this.squares[i].getValue() !== '') {
                const combinedTotal = parseInt(this.squares[i].getValue()) + parseInt(this.squares[i - this.widthBoard].getValue());
                
                this.squares[i].setValue(combinedTotal);
                this.squares[i - this.widthBoard].setValue('');
                
                this.score += combinedTotal;
                scoreDisplay.innerHTML = this.score;
            }
        }
    }
    
    combineRow() {
        for (let i = 15; i > 0; i--) {
            if ((this.squares[i].getValue() === this.squares[i - 1].getValue()) && this.squares[i].getValue() !== '' && i % 4 !== 0) {
                const combinedTotal = parseInt(this.squares[i].getValue()) + parseInt(this.squares[i - 1].getValue());
                
                this.squares[i].setValue(combinedTotal);
                this.squares[i - 1].setValue('');

                this.score += combinedTotal;
                scoreDisplay.innerHTML = this.score;
            }
        }
    }

    
}
