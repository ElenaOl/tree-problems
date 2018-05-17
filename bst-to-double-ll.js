// 22. Convert a BST into a doubly linkedlist.
class TreeNode {
  constructor (value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
var root = new TreeNode(4);
root.left = new TreeNode(2);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);
root.right = new TreeNode(6);
// root.right.left = new TreeNode(5);
// root.right.right = new TreeNode(7);
// console.log(root);

class ListNode {
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

function fromBstToList (root){
  var head = new ListNode(null);
  var current = head;
  var queue = [root];
  
  while(queue.length !== 0){
    current.next = new ListNode(queue[0].value);
    current.next.previous = current;
    current = current.next;
    if(queue[0].left !== null){
      queue.push(queue[0].left);
    }
    if(queue[0].right !== null){
      queue.push(queue[0].right);
    }
    queue.shift();
  }
  
  return head.next;  
}

var result = fromBstToList (root);
console.log(result)


