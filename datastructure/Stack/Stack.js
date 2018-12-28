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
        this.removeTail();
        this.peek();
    }

    peek() {
        return this.tail.val;
    }
}