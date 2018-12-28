import ListNode from './ListNode';

// have Size as a member var
export default class LinkedList {

    // Keep both head and tail for insertion/removal efficiency
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(val) {
        const node = new ListNode(val);

        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.size += 1;

        return this;
    }

    // remove by value
    // removes the first value encountered in the list that matches param
    remove(val) {
        let index = this.head;

        while (index != null) {
            if (index.val == val) {
                index.prev.next = index.next;
                index.next.prev = index.prev;
                this.size -= 1;
                return this;
            }

            index = index.next;
        }
    }

    removeTail() {
        this.tail.prev.next = null;
        this.size -= 1;
        return this;
    }

    prepend(val) {
        const node = new ListNode(val);

        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size += 1;

        return this;
    }

    // Insert after an index
    insert(val, loc) {
        const node = new ListNode(val);

        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            if (this.size - loc > this.size / 2) {
                let index = this.head;
                for (i = 0; i < loc; i++) {
                    index = index.next;
                }
            } else {
                let index = this.tail;
                for (i = 0; i < this.size - loc; i--) {
                    index = index.prev;
                }
            }
            const node = new ListNode(val);
            index.next.prev = node;
            node.next = index.next;
            index.next = node;
            node.prev = index;
        }
        this.size += 1;

        return this;
    }

    print() {
        let index = this.head;
        while (index != null) {
            console.log(index.val);
            index = index.next;
        }
    }

    printReverse() {
        let index = this.tail;
        while (index != null) {
            console.log(index.val);
            index = index.prev;
        }
    }

    // Reverse a linked list.
    // keep prev -> set prev to next -> set next to prev -> move to prev (that was next)
    reverseList() {
        let index = this.head;
        prevHolder = null;
        while (index != null) {
            prevHolder = index.prev;
            index.prev = index.next;
            index.next = prevHolder;
            index = index.prev;
        }

        return this;
    }

    findAt(loc) {
        let index = this.head;
        for (i = 0; i < loc; i++) {
            index = index.next;
        }

        return index.val;
    }

    isEmpty() {
        return !this.head;
    }

    asArray() {
        let index = this.head;
        let counter = 0;
        let retArray = [];

        while (counter < this.size) {
            retArray.push(index.val);
            index = index.next;
            counter += 1;
        }

        return retArray;
    }

    length() {
        return this.size;
    }

}