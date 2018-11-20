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

function printLastNode(root){
  var q = [];
  q.push(root,null);
  
  var i=0;
  while(i<q.length){
    if(q[i] === null){
      if(i !== q.length-1){
        q.push(null);
        i++;
      }else{
        break;
      }
    }
    if(q[i].left !== null){
      q.push(q[i].left);
    }
    if(q[i].right !== null){
      q.push(q[i].right);
    }
    i++;
  }
  var j=q.length-3;
  var result = [];
  result.push(q[q.length-2].value);
  while(j>=0){
    if(q[j] === null){
      result.push(q[j-1].value);
      j--;
    }else{
      j--;
    }  
  }
  return result;
}
printLastNode(root);

