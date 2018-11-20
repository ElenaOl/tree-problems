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


function mirrorTree(root){
  if(root === null){
    return null;
  }
  var left =  mirrorTree(root.left);
  var right =  mirrorTree(root.right);
  temp = left;
  root.left = right;
  root.right = temp;
  return root;
}
mirrorTree(root);
