'use strcit'

// В начале игры создать цифру 2 в рандомном блоке, через поиск всех cell что то типа такой комбинации 
// (предварительно их найти с querySelectorAll) allcell[(Math.round(Math.random()*15)].textContent = 2 и я так полагаю давать класс number
// и после каждого события проверять если блок не занят то добавлять двойку
// Дальше повесить событие на блок grid клавиш стрелок
// Придумать логику передвижения блока
// для каждого события кнопки писать проверки, по передвижению блока
// (Я думаю будут довольно большие проверки по всем клеткам направления движения кнопки)
// Если текст соседних блоков будет совпадает при движении (событии) то в одной клетке число удваивать а в другой его удалять
// Подсчет очков записывать в блок счета
// сделать проверку на окончание игры

// Примерное далекое понимание как писать код есть трудновато только изложить

function clickControl(event) {
    if(event.key === 'ArrowUp'){
        console.log('Вверх')
    }else if(event.key === 'ArrowDown') {
        console.log('Вниз')
    }else if(event.key === 'ArrowRight') {
        console.log('Вправо')
    }else if(event.key === 'ArrowLeft') {
        console.log('Влево')
    } else {
        console.log('Other')
    }
}


const scoreDisplay =  document.querySelector('.score');
const resultDisplay = document.querySelector('.result');
const colorCell = [
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
        this.board = new Board()
        this.board.init()
		document.addEventListener('keyup', clickControl);
    }
    checkIsGameOver() {
        console.log('checkIsGameOver')
    }
}

class Board {
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
            square.className = 'number';
            fragment.appendChild(square);
            this.squares.push(square);
        }
        this.wrapper.appendChild(fragment);
    }
    
    generateNewCell() {
        console.log('generateNewCell')
    }
    
    addColours() {
        console.log('addColours')
    }
}

class Cell {
    constructor() {
        this.value = '';
        this.dom = null;
    }
    getValue() {
        return this.value;
    }
    setValue() {
        console.log('setValue');
    }
    getNewElement() {
        console.log('getNewElement');
    }

}

const start = new GameManager();
start.init();