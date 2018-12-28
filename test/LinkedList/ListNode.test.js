import ListNode from '../../datastructure/LinkedList/ListNode';

var expect = require('expect.js');

describe('List Node', () => {
    // Happy Path
    it('should create a node with value and pointers', () => {
        const node = new ListNode(0);

        expect(node.val).to.be(0);
        expect(node.prev).to.be(null);
        expect(node.next).to.be(node.prev);
    });

});