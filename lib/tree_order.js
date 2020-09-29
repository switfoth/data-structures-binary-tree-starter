function inOrderArray(root) {
  let treeArray = [];
  let node = this.root
  if (node.left || node.right){
    node.left.parent = node
    node.right.parent = node
  }

  if (root === null) return treeArray;

  while (node.left){
    node = node.left
  }
  treeArray.push(node);
  // get the array for visiting the right node

  treeArray.push(inOrderArray(root.left))
  treeArray.push(this.root)
  treeArray.push(inOrderArray(root.right))
  return treeArray
  // return the left array concatenated with the root value
  //   concatenated with the right array
}

function postOrderArray(root) {
  // if the root is null, return an empty array

  // get the array for visiting the left node
  // get the array for visiting the right node

  // return the left array concatenated with the right array
  //   concatenated with the root value
}


module.exports = {
  inOrderArray,
  postOrderArray
};
