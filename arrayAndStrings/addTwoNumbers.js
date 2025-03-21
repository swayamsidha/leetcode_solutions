/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode();
    let current = dummyNode;
    let carry = 0;
    while (l1 || l2 || carry) {
        let l1_val = l1 ? l1.val : 0;
        let l2_val = l2 ? l2.val : 0;
        // find the sum
        let sum = l1_val + l2_val + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        // move foreward
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

    }
    return dummyNode.next;
};