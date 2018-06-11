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


function maxMinHeight (root){
  if(root === null){
    return {min:0, max:0};
  }
  var left = maxMinHeight(root.left);
  var right = maxMinHeight(root.right);
  var max = Math.max (left.max, right.max) + 1;
  var min = Math.min (left.min, right.min) + 1;
  return {min:min, max:max};
}

function isBalanced (root){
  var left = maxMinHeight (root.left); //{max,min}
  var right = maxMinHeight (root.right); //{max,min}
  if(Math.abs(left.max - right.min) <=1 && 
  Math.abs(right.max - left.min) <=1){
    return true;
  } 
  return false;
}
isBalanced (root);