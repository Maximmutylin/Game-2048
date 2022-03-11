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
        this.board.generateNewCell();
        this.board.addColours();
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
            // Здесь я так понял нужно вызвать этот же метод но с привязкой к экземпляру класса board, но не пойму как т.к он в другом классе и еще в методе
            // Пробовал привязать контекст через call, но не сработало
            // Думал еще вынести экземпляр board из метода init в глобальный контекст и запомнить в переменную, но не просто так он же создан в классе
            // Или создать новый экземпляр класса board тут но тогда наверное тут не будет предведущих методов которые взаимодействуют с прошлым экземпляром
            // Так что не до конца понятно как вызвать метод внутри него же
        }
    }

    addColours() {
        this.squares.forEach(e => {
            e.style.backgroundColor = colorCell[Math.trunc(Math.sqrt(e.innerHTML))];
        })
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