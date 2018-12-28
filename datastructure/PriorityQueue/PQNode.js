export default class PQNode {
    constructor(val, priority) {
        if (val !== undefined && priority !== undefined) {
            this.val = val;
            this.priority = priority;
            this.next = null;
            this.prev = null;
        } else {
            console.log("Undefined Value")
        }
    }
}