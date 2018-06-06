// Write a function to check that a binary tree is a valid binary search tree. 
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
root.left.right = new TreeNode(8);
root.right = new TreeNode(6);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

function isBst (root, high, low){
  if(root === null){
    return true;
  }
  if(low !== null){
    if(root.value < low){
      return false;
    }
  }
  if(high !== null){
    if(root.value > high){
      return false;
    }
  }
  var left = isBst(root.left, root.value, low);
  if(!left){
    return false;
  }
  var right = isBst(root.right, high, root.value);
  return right;
}
isBst (root, null, null);