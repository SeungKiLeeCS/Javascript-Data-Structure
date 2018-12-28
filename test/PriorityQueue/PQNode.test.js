import PQNode from '../../datastructure/PQNode/PQNode';

var expect = require('expect.js');

describe('Priority Queue Node', () => {
    it('should be created correctly', () => {
        const n1 = new PQNode(1, 2);

        expect(n1.val).to.be(1);
        expect(n1.priority).to.be(2);
    });
});