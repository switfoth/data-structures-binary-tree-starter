function inOrderArray(root, treeArray = new Array) {
 
  if (root === null) return treeArray;

  if (root.left) inOrderArray(root.left, treeArray);
  treeArray.push(root.val);
  if (root.right) inOrderArray(root.right, treeArray);

  return treeArray;
}

function postOrderArray(root, treeArray = new Array) {
  // if the root is null, return an empty array
  if (root === null) return treeArray;

  // get the array for visiting the left node
  // get the array for visiting the right node
  if (root.left) postOrderArray(root.left, treeArray);
  if (root.right) postOrderArray(root.right, treeArray);
  treeArray.push(root.val);

  return treeArray;

  // return the left array concatenated with the right array
  //   concatenated with the root value
}



module.exports = {
  inOrderArray,
  postOrderArray
};
