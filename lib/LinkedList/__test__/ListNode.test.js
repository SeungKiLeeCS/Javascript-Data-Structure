"use strict";

var _ListNode = _interopRequireDefault(require("../ListNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('expect.js');

describe('List Node', () => {
  // Happy Path
  it('should create a node with value and pointers', () => {
    const node = new _ListNode.default(0);
    expect(node.val).to.be(0);
    expect(node.prev).to.be(null);
    expect(node.next).to.be(node.prev);
  });
});