import Stack from '../../datastructure/Stack/Stack';

var expect = require('expect.js');

describe('Stack', () => {
    it('should correctly inherit Linked List', () => {
        const s1 = new Stack();
        const s2 = new Stack(1);

        expect(s1.isEmpty()).to.be(true);
        expect(s2.head.val).to.be(1);
    });

    it('should push correct value', () => {
        const s3 = new Stack();

        let i = 0;
        while (i < 3) {
            s3.push(i);
            i += 1;
        }

        expect(s3.head.val).to.be(0);
        expect(s3.head.next.val).to.be(1);
        expect(s3.tail.val).to.be(2);
    });

    it('should be FILO Data Structure', () => {
        const s4 = new Stack();

        let i = 0;
        while (i < 3) {
            s4.push(i);
            i += 1;
        }

        expect(s4.peek()).to.be(2);
        expect(s4.pop()).to.be(2);
        expect(s4.pop()).to.be(1);
        expect(s4.pop()).to.be(0);
        expect(s4.isEmpty()).to.be(true);
    });

});