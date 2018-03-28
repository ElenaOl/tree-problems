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
root.right = new Node (5);
root.right.right = new Node (6);
// console.log(root);

function printTree (node){
  if(node === null){
    return;
  }
  console.log(node.value);
  printTree (node.left);
  printTree (node.right);
}
printTree (root);

function search (node, value){
  if(node === null){
    return false;
  }
  if(node.value === value){
    return true;
  }
  if(node.value > value){
    var result = search (node.left, value)
  }else{
    result = search (node.right, value)
  }
  
 return result; 
}
search (root, 5);

function search2 (node,value){
    
    while(node !== null){
      if(node.value === value){
        return true;
      }
      if(node.value > value){
        node = node.left;
      }else{
        node = node.right;
      }
    }
    return false;
  }
  search2 (root,20)