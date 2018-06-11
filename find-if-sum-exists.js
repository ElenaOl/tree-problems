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
root.right.left = new Node (9);
root.right.right = new Node (6);

function findIfSum (root, sum){//return true/false
  if(root === null){
    if(sum === 0){
      return true;
    }
    return false;
  }
  var left = findIfSum (root.left, sum - root.value);
  if(left){
    return true;
  }
  var right = findIfSum (root.right, sum - root.value);
  if(right){
    return true;
  }
  return false;
}
findIfSum (root, 18)