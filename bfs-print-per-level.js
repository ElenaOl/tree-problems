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

//BFS print per level
function perLevel (root){
  var result = [];
  var queue = [];
  queue.push(root);
  queue.push(null);
  var i = 0;
  while (i< queue.length){
    var curr = queue[i];
    if(curr === null){
      if(i<queue.length-1){
        queue.push(null);
      }
      console.log(result);
      result = [];
      i++;
      continue;
    }
    if(curr.left !== null){
      var left = curr.left;
      queue.push(left);
    }
    if(curr.right !== null){
      var right = curr.right;
      queue.push(right);
    }
    result.push(curr.value);
    i++;
  }
  return result;
}
perLevel (root);

