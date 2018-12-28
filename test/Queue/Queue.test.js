import Queue from '../../datastructure/Queue/Queue';

const expect = require('chai').expect;

describe('Queue', () => {
    it('should correctly inherit Linked List', () => {
        const q1 = new Queue();
        const q2 = new Queue(1);

        expect(q1.isEmpty()).to.be(true);
        expect(q2.head.val).to.be(1);
    });

    it('should push correct value', () => {
        const q3 = new Queue();

        let i = 0;
        while (i < 3) {
            q3.push(i);
            i += 1;
        }

        expect(q3.head.val).to.be(2);
        expect(q3.head.next.val).to.be(1);
        expect(q3.tail.val).to.be(0);
    });

    it('should be FIFO Data Structure', () => {
        const q4 = new Queue();

        let i = 0;
        while (i < 3) {
            q4.push(i);
        }

        expect(q4.peek()).to.be(0);
        expect(q4.pop()).to.be(0);
        expect(q4.pop()).to.be(1);
        expect(q4.pop()).to.be(2);
        expect(q4.isEmpty()).to.be(true);
    });

});