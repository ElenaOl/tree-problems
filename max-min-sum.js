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

function maxMinSum (root){ //return {max, min}
  if(root === null){
    return {max:0, min:0}
  }
  var left = maxMinSum (root.left); //return {max,min}
  var right = maxMinSum (root.right); //return {max,min}
  var max = Math.max (left.max, right.max) + root.value;
  var min = Math.min (left.min, right.min) + root.value;
  return {max:max, min:min};
}
maxMinSum (root);