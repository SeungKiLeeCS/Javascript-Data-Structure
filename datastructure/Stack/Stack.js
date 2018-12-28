import LinkedList from '../LinkedList/LinkedList';

export default class Stack extends LinkedList {
    constructor() {
        super();
    }

    push(val) {
        this.append(val);
        return this;
    }

    pop() {
        let temp = this.peek();
        this.removeTail();
        return temp;
    }

    peek() {
        return this.tail.val;
    }
}