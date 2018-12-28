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
        let temp = this.peek();
        this.remove(this.head.val);
        return temp;
    }

    peek() {
        return this.head.val;
    }
}