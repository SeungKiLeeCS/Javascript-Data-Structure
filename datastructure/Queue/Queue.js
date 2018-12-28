import LinkedList from '../LinkedList/LinkedList';

export default class Queue extends LinkedList {
    constructor() {
        super();
    }

    push(val) {
        this.append(val);
        return this;
    }

    pop() {
        this.remove(this.head.val);
        this.peek();
    }

    peek() {
        return this.head.val;
    }
}