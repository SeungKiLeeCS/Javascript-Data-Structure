import Deque from '../../datastructure/Deque/Deque';

var expect = require('expect.js');

describe('Deque', () => {
    it('should inject correctly', () => {
        const d1 = new Deque();

        let i = 0;
        for (i = 0; i < 3; i++) {
            d1.inject(i);
        }

        expect(d1.head.val).to.be(2);
        expect(d1.head.next.val).to.be(1);
    });

    it('should eject correctly', () => {
        const d2 = new Deque();

        let i = 0;
        for (i = 0; i < 3; i++) {
            d2.inject(i);
        }

        expect(d2.eject).to.be(0);
        expect(d2.peekLast).to.be(1);
        expect(d2.eject).to.be(1);
    });
});