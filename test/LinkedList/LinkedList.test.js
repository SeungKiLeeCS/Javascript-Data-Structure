import LinkedList from '../../datastructure/LinkedList/LinikedList';

var expect = require('expect.js');

describe('Linked List', () => {

    // Happy Path 
    it('should be created empty', () => {
        const l1 = new LinkedList();

        expect(l1.head).to.be(null);
        expect(l1.tail).to.be(l1.head);
        expect(l1.size).to.be(0);
    });

    it('should append values correctly', () => {
        const l2 = new LinkedList();

        let i = 0;
        while (i < 10) {
            l2.append(i);
            i += 1;
        }

        expect(l2.head).to.be(0);
        expect(l2.tail).to.be(9);
        expect(l2.size).to.be(10);
    });

    it('should prepend values correctly', () => {
        const l3 = new LinkedList();

        let i = 0;
        while (i < 10) {
            l3.prepend(i);
            i += 1;
        }

        expect(l3.head).to.be(9);
        expect(l3.tail).to.be(0);
        expect(l3.size).to.be(10);
    });

    it('should insert values correctly', () => {
        const l4 = new LinkedList();

        let i = 0;
        while (i < 10) {
            l2.append(i);
            i += 1;
        }

        l4.insert(10, 5);

        expect(l4.findAt(5)).to.be(10);
        expect(l4.findAt(4)).to.be(4);
        expect(l4.findAt(6)).to.be(6);
    });

    it('should remove values correctly', () => {
        const l5 = new LinkedList();

        let i = 0;
        while (i < 10) {
            l2.append(i);
            i += 1;
        }

        l5.remove(5);

        expect(l5.findAt(5)).to.be(6);
        expect(l5.findAt(6)).to.be(7);
        expect(l5.findAt(4)).to.be(4);
    })
});