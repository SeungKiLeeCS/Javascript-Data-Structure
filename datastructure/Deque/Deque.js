import Queue from '../Queue/Queue';

export default class Deque extends Queue {
    constructor() {
        super();
    }

    inject(val) {
        this.prepend(val);
    }

    eject() {
        let temp = this.peekLast();
        this.removeTail();
        return temp;
    }

    peekLast() {
        return this.tail.val;
    }
}