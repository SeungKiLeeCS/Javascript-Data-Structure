"use strict";

var _LinkedList = _interopRequireDefault(require("../LinkedList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('expect.js');

describe('Linked List', () => {
  before('Set Up test', () => {
    let i = 0;
    const l1 = new _LinkedList.default();
    const l2 = new _LinkedList.default();
    const l3 = new _LinkedList.default();
    const l4 = new _LinkedList.default();
    const l5 = new _LinkedList.default();

    for (i = 0; i < 10; i++) {
      l2.append(i);
      l3.prepend(i);
      l4.append(i);
      l5.append(i);
    }
  }); // Happy Path 

  it('should be created empty', () => {
    expect(l1.head).to.be(null);
    expect(l1.tail).to.be(l1.head);
    expect(l1.size).to.be(0);
  });
  it('should append values correctly', () => {
    expect(l2.head).to.be(0);
    expect(l2.tail).to.be(9);
    expect(l2.size).to.be(10);
  });
  it('should prepend values correctly', () => {
    expect(l3.head).to.be(9);
    expect(l3.tail).to.be(0);
    expect(l3.size).to.be(10);
  });
  it('should insert values correctly', () => {
    l4.insert(10, 5);
    expect(l4.findAt(5)).to.be(10);
    expect(l4.findAt(4)).to.be(4);
    expect(l4.findAt(6)).to.be(6);
  });
  it('should remove values correctly', () => {
    l5.remove(5);
    expect(l5.findAt(5)).to.be(6);
    expect(l5.findAt(6)).to.be(7);
    expect(l5.findAt(4)).to.be(4);
  });
});