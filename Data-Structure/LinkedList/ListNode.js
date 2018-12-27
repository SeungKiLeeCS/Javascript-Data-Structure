export default class ListNode {
    
    constructor(val) {
        if (val) {
            this.val = val;
            this.next = null;  
            this.prev = null;      
        } else {
            console.log("Please input a value.");
        }
    }
}
