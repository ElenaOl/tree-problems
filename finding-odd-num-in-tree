class TreeNode {
  constructor (value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
var root = new TreeNode(2);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(8);
root.right = new TreeNode(6);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

function findOddNumbers (root){
  if(root === null){
    return [];
  }
  if(root.value % 2 !== 0 && root.left === null && root.right === null){
    return [root.value];
  }
  var left = findOddNumbers (root.left);
  var right = findOddNumbers (root.right);
  if(root.value % 2 !== 0){
    return [root.value].concat(left,right);
  }else{
    return left.concat(right);
  } 
}
findOddNumbers(root);
