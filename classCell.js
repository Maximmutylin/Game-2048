export class Cell {
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

