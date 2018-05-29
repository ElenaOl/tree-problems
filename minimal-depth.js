
// find minimal depth
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
// root.right = new TreeNode(6);
// root.right.left = new TreeNode(5);
// root.right.right = new TreeNode(7);

function minimalDepth (root){
  if(root === null){
    return 0;
  }
  var left = minimalDepth(root.left);
  var right = minimalDepth(root.right);
  if(left<=right){
    return left + 1;
  }else{
    return right + 1;
  }
}
minimalDepth (root);