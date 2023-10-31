/**
 * Node
 * The following class implements a Node Element that can be used within a Binary Tree.
 */
class Node {
  constructor(data, leftChild = null, rightChild = null) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

/**
 * Module Exports
 */
export default Node;
