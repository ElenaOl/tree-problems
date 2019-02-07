Write an algorithm to find the next node (i.e in-order successor) of a given node in a binary 
search tree. You may assume that each node has a link to its parent

class TreeNode {
  constructor (value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
var root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.parent = root;
root.left.left = new TreeNode(1);
root.left.left.parent = root.left;
root.left.right = new TreeNode(3);
root.left.right.parent = root.left;
root.right = new TreeNode(6);
root.right.parent = root;
root.right.left = new TreeNode(5);
root.right.left.parent = root.right;
root.right.right = new TreeNode(7);
root.right.right.parent = root.right;

function search (node, value){
  if(node === null){
    return null;
  }
  if(node.value === value){
    return node;
  }
  if(node.value > value){
    var result = search (node.left, value)
  }else{
    result = search (node.right, value)
  }
  
 return result; 
}

function FindNextNode (root, val){
  var node = search (root, val);
  
  if(node === null){
    return null;
  }
  if(node.left === null && node.right === null && node.parent !== null){
    return node.parent.value;
  }
  if(node.right !== null){
    var curr = node.right;
    while(curr.left !== null){
      curr = curr.left;
    }
    return curr.value;
  }
  return null;
}
FindNextNode (root, 1);
