// 21. Given a BST, create a linkedlist of all the nodes at each depth
class TreeNode {
  constructor (value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
var root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(6);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);
// console.log(root);

class ListNode {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

function fromBstToList (root){
  var head = new ListNode(null);
  var current = head;
  var queue = [root];
  
  while(queue.length !== 0){
    current.next = new ListNode(queue[0].value);
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


function fromBstToList (root){
 if(root === null){
   return null;
 }
    var head = new ListNode(root.value);
    var current = head;
    
   
 
 var left = fromBstToList (root.left);
 var right = fromBstToList (root.right);
 if(left !== null){
   current.next = left;
   current.next.previous = current;
 }
  
 
 if(right !== null){
   while(current.next !== null){
      current = current.next;
   }
   current.next = right;
   current.next.previous = current;
 }
  return head;
}

fromBstToList (root);

function fromBstToList (root){
 if(root === null){
   return null;
 }
 var current = new ListNode(root.value);
 var left = fromBstToList (root.left);
 var right = fromBstToList (root.right);
 current.next = right;

 if(left !== null){
   var currLeft = left;
   while(currLeft.next !== null){
     currLeft = currLeft.next;
   }
   currLeft.next = current;   
   return left;
 }

  return current;
}

fromBstToList (root);


