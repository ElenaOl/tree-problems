// Given a sorted array, create a binary search tree with minimal height
class Node {
  constructor (value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
var arr = [1,2,3,4,5,6,7];
function toTree(arr, si, ei){
  if(si === ei){
    return new Node(arr[si]);
  }
  if(si>ei){
    return null;
  }
  
  var mi = Math.floor((si+ei)/2);
  var root = new Node(arr[mi]);
  var left = toTree(arr, si, mi-1);
  var right = toTree(arr, mi+1, ei);
  root.left = left;
  root.right = right;
  return root;
}
var result = toTree(arr, 0, arr.length-1);
console.log(result);
