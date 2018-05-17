// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.


class TreeNode {
    constructor (val){
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  var p = new TreeNode(1);
  p.left = new TreeNode(2);
  p.right = new TreeNode(3);
  var q = new TreeNode(1);
  q.left = new TreeNode(2);
  q.right = new TreeNode(3);
  
  var isSameTree = function(p, q) {
      if(p === null && q === null){
        return true;
      }
      if(p === null || q === null){
        return false;
      }
      if(p.val !== q.val){
          return false;
      }
      var left = isSameTree(p.left, q.left);
      if(!left){
        return false;
      }
      var right = isSameTree(p.right, q.right);
      if(left && right){
        return true;
      }else{
        return false;
      }
  };
  isSameTree(p, q);