class Node {
  constructor (value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
} 

var root = new Node (4);
root.left = new Node (2);
root.right = new Node (6);
root.left.left = new Node (1);
root.left.right = new Node (3);
root.right.left = new Node (5);
root.right.right = new Node (7);

function isRootMiddle (root){
  if(root === null){
    return true;
  }
  if(root.left !== null && root.value < root.left.value){
    return false;
  }
  if(root.right !== null && root.value > root.right.value){
    return false;
  }
  if(root.left === null){
    var left = true;
  }else{
    left = isRootMiddle (root.left);
  }
  if(root.right === null){
    var right = true;
  }else{
    right = isRootMiddle (root.right);
  }
  if(left && right){
    return true;
  }
  return false;
}
isRootMiddle (root);
