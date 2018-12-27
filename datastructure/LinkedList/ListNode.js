export default class ListNode {
    
    constructor(val) {
        if (val != undefined) {
            this.val = val;
            this.next = null;  
            this.prev = null;    
        } else {
            console.log("Undefined Value")
        }
    }
}
