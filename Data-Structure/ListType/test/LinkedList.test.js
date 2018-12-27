import LinkedList from '../LinkedList';
import ListNode from '../ListNode';

describe('Linked List', () => {
    
    // Happy Path 
    it('should be created empty', () => {
        const l1 = new LinkedList();
        
        expect(l1.head).toBeNull();
        expect(l1.tail).toBe(l1.head);
        expect(l1.size).toBe(0);
    });

    it('should append values correctly', () => {
        const l1 = new LinkedList();
        
        for (i = 0; i < 10; i ++) {
            l1.append(i);
        }

        expect(l1.head).toBe(0);
        expect(l1.tail).toBe(9);
        expect(l1.size).toBe(10);
    });

    it('should prepend values correctly', () => {
        const l1 = new LinkedList();

        for (i = 0; i < 10; i ++) {
            l1.prepend(i);
        }

        expect(l1.head).toBe(9);
        expect(l1.tail).toBe(0);
        expect(l1.size).toBe(10);
    });

    it('should insert values correctly', () => {
        const l1 = new LinkedList();
        
        for (i = 0; i < 10; i ++) {
            l1.append(i);
        }
        
        l1.insert(10, 5);

        expect(l1.findAt(5)).toBe(10);
        expect(l1.findAt(4)).toBe(4);
        expect(l1.findAt(6)).toBe(6);
    });

    it('should remove values correctly', () => {
        const l1 = new LinkedList();

        for (i = 0; i < 10; i ++) {
            l1.append(i);
        }

        l1.remove(5);

        expect(l1.findAt(5)).toBe(6);
        expect(l1.findAt(6)).toBe(7);
        expect(ll.findAt(4)).toBe(4);
    })
});