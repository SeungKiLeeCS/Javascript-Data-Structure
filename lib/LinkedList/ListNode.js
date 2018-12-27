"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ListNode {
  constructor(val) {
    if (val != undefined) {
      this.val = val;
      this.next = null;
      this.prev = null;
    } else {
      console.log("Undefined Value");
    }
  }

}

exports.default = ListNode;