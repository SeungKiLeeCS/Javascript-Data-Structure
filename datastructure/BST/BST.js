import TreeNode from './TreeNode';

export default class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new TreeNode(val);

        if (!this.root) {
            this.root = node;
        } else {
            let curr = this.root;

            while (curr) {
                if (val < curr.val) {
                    if (curr.left) {
                        curr = curr.left;
                    } else {
                        curr.left = node;
                        break;
                    }
                } else {
                    if (curr.right) {
                        curr = curr.right;
                    } else {
                        curr.right = node;
                        break;
                    }
                }
            }
        }
        return this;

    }

    isEmpty() {
        return !this.root;
    }

    search(val) {
        if (this.isEmpty()) {
            return null;
        } else {
            let curr = this.root;

            while (curr) {
                if (val < curr.val) {
                    if (val === curr.val) {
                        return curr;
                    } else {
                        curr = curr.left;
                    }
                } else {
                    if (val === curr.val) {
                        return curr;
                    } else {
                        curr = curr.right;
                    }
                }
            }
        }
    }

    // remove(val) {
    //     if (!this.search(val)) {
    //         console.log("The Value does not exist in this tree");
    //     } else {

    //     }
    // }

    contains(val) {
        return this.search(val);
    }

    min() {
        if (!this.root) {
            return null;
        } else {
            let curr = this.root;
            while (curr) {
                curr = curr.left;
            }

            return curr.val;
        }
    }

    max() {
        if (!this.root) {
            return null;
        } else {
            let curr = this.root;
            while (curr) {
                curr = curr.right;
            }

            return curr.val;
        }
    }

    preorder() {
        if (this.root) {
            let curr = this.root;

            console.log(curr.val);
            this.preorder(curr.left);
            this.preorder(curr.right);
        } else {
            console.log("Empty Tree");
        }

        return this;
    }

    inorder() {
        if (this.root) {
            let curr = this.root;

            this.inorder(curr.left);
            console.log(curr.val);
            this.inorder(curr.right);
        } else {
            console.log("Empty Tree");
        }

        return this;
    }

    postorder() {
        if (this.root) {
            let curr = this.root;

            this.postorder(curr.left);
            this.postorder(curr.right);
            console.log(curr.val);
        } else {
            console.log("Empty Tree");
        }

        return this;
    }
}