export default class TreeNode {
    constructor(val) {
        if (val !== undefined) {
            this.val = val;
            this.left = null;
            this.right = null;
        } else {
            console.log("Undefined Value");
        }
    }
}