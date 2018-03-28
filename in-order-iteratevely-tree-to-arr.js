//in-order iteratevely tree to arr.

class Node {
  constructor (value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
} 

var root = new Node (4);
root.left = new Node (2);
root.right = new Node (5);
root.left.left = new Node (1);
root.left.right = new Node (3);
root.right = new Node (5);
root.right.right = new Node (6);

function iteratevelyTreeToArr (node){
  var stack = [];
  var result = [];
  while(node !== undefined){
    if(node !== null){
      result.push(node.value);
      if(node.right !== null){
        stack.push(node.right);
      }
      node = node.left;
    }else{
      node = stack.pop();
    }
    
  }
  return result;
}
iteratevelyTreeToArr(root);











