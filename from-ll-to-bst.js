// 20. Given a singly linked list which has data sorted in ascending order, construct a balanced BST

class ListNode {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
    
    var head = new ListNode(1);
    var n1 = new ListNode(2);
    var n2 = new ListNode(3);
    var n3 = new ListNode(4);
    var n4 = new ListNode(5);
    var n5 = new ListNode(6);
    var n6 = new ListNode(7);
    
    head.next = n1;
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    n5.next = n6;
  // console.log(n3)
  class TreeNode {
    constructor (value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function fromListToTree (head, count){
    if(count === undefined){
      // console.log(head.value);
      var currentCount = head;
      count = 0;
      while(currentCount !== null){
        currentCount = currentCount.next;
        count = count +1;
      }
    }
    
    if(count === 0){
      return null;
    }
    if(count === 1){
      return new TreeNode (head.value);
    }
    var current = head;
    var countTillMiddle = 1;
    while (countTillMiddle < Math.floor(count/2)){
     current = current.next;
     countTillMiddle = countTillMiddle + 1;
     
    }
    
    var valueAtMiddleNode = current.next.value; 
    var root = new TreeNode (valueAtMiddleNode);
    var right = current.next.next;
    root.left = fromListToTree(head, countTillMiddle);
    root.right = fromListToTree(right, (count - (countTillMiddle +1)));
    
    
    
    
    return root;
  }
  
  fromListToTree(head);
  
  
  
  
  
  
  