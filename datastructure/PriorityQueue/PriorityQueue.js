import PQNode from './PQNode';

export default class PriorityQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.container.length() === 0;
    }

    // Lower the Numerical Value of Priority, Higher the Priority
    // Ex: Priority 1 > Priority 2.
    enque(val, priority) {
        const node = new PQNode(val, priority);

        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            let index = this.head;
            while (this.index.priority < node.priority) {
                index = index.next;
            }

            index.next.prev = node;
            node.next = index.next;
            index.next = node;
            node.prev = index;
        }

        this.size += 1;

        return this;
    }

    peekHead() {
        return this.head.val;
    }

    peekTail() {
        return this.tail.val;
    }

    deque() {
        let temp = this.peekHead();
        this.removeHead();
        return temp;
    }

    eject() {
        let temp = this.peekTail();
        this.removeTail();
        return temp;
    }

    removeHead() {
        this.head.next.prev = null;
        this.size -= 1;
        return this;
    }

    removeTail() {
        this.tail.prev.next = null;
        this.size -= 1;
        return this;
    }

    // Make an insertion with highest priority
    forceEnque(val) {
        this.enque(val, Number.NEGATIVE_INFINITY);
        return this;
    }

    forceEnqueLast(val) {
        this.enque(val, Number.POSITIVE_INFINITY);
        return this;
    }

}