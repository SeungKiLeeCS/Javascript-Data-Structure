import PriorityQueue from '../../datastructure/PriorityQueue/PriorityQueue';

var expect = require('expect.js');

describe('Priority Queue', () => {
    it('should be created empty', () => {
        const p1 = new PriorityQueue();

        expect(p1.isEmpty()).to.be(true);
    });

    it('should enqueue according to priority', () => {
        const p2 = new PriorityQueue();

        p2.enque("Highest Priority", 1);
        p2.enque("Lowest Priority", 10);
        p2.enque("Medium Priority", 5);

        expect(p2.head.val).to.be("Highest Priority");
        expect(p2.head.next.val).to.be("Medium Priority");
        expect(p2.tail.val).to.be("Lowest Priority");

    });

    it('should deque the highest priority node and eject lowest priority node', () => {
        const p3 = new PriorityQueue();

        p3.enque("High", 3);
        p3.enque("Low", 7);
        p3.enque("Med", 5);
        p3.enque("Deque", 1);
        p3.enque("Eject", 10);

        expect(p3.deque()).to.be("Deque");
        expect(p3.eject()).to.be("Eject");
    });
});