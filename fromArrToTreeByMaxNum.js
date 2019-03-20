class TreeNode {
  constructor (value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findIndexOfMaxNum(arr, si, ei){
  var indexOfMax = si;
  var max = arr[si];
  for(var i=si+1; i<=ei; i++){
    if(arr[i] > max){
      max = arr[i];
      indexOfMax = i;
    }
  }
  return indexOfMax;
}

function fromArrToTreeByMaxNum(arr, si=0, ei=arr.length-1){
  if(si>ei){
    return null;
  }
  if(si===ei){
    return new TreeNode(arr[si]);
  }
  var indexOfMax = findIndexOfMaxNum(arr, si, ei);
  var node = new TreeNode(arr[indexOfMax]);
  var left = fromArrToTreeByMaxNum(arr, si, indexOfMax-1);
  console.log(ei);
  var right = fromArrToTreeByMaxNum(arr, indexOfMax+1, ei);
  node.left = left;
  node.right = right;
  return node;
}


var constructMaximumBinaryTree = function(nums) {
  return fromArrToTreeByMaxNum(nums, 0, nums.length-1);
};

constructMaximumBinaryTree([3,2,1,6,0,5]);
