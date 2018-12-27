import ListNode from '../ListNode';

describe('List Node', () => {
    // Happy Path
    it('should create a node with value and pointers', () => {
        const node = new ListNode(0);

        expect(node.val).toBe(0);
        expect(node.prev).toBeNull();
        expect(node.next).toBe(node.prev);
    });
    
    // Error
    it('should tell the user to input a value when called with undefined parameter', () => {
        const node = new ListNode();

        expect(node).toBe(undefined);
    });

});