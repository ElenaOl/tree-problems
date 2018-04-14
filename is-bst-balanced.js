//23. Determine if a binary tree is balanced

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
root.right.left.left = new TreeNode(5);
// root.right.right = new TreeNode(7);

function treeHeight(root){
  if(root === null){
    return {max:0, min:0};
  }
  
  var leftHeight = treeHeight(root.left);
  var rightHeight = treeHeight(root.right);
  return {max: Math.max(leftHeight.max, rightHeight.max)+1, min: Math.min(leftHeight.min, rightHeight.min)+1};
}


function isBalanced (root){
  var height = treeHeight(root);
  
  if(height.max - height.min > 1){
    return false;
  }
  return true;
}
var balance = isBalanced(root);
console.log(balance);
