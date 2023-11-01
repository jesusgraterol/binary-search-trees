// eslint-disable-next-line import/extensions
import Node from './node.js';

/**
 * Binary Tree
 * The following class implements the Binary Tree Data Structure as well as the search algorithm.
 */
class BinaryTree {
  // the root node
  #root = null;

  constructor(arr) {
    // if a valid array was provided, insert all the items
    if (Array.isArray(arr) && arr.length) arr.forEach(this.insert.bind(this));

    // ...
  }

  /**
   * Insers a piece of data into the tree.
   * @param {*} data
   */
  insert(data) {
    // init the instance of the new node
    const newNode = new Node(data);

    // if the root has been set, find the node's location. Otherwise, initialize the root node
    if (this.#root) {
      let current = this.#root;
      let locationFound = false;
      while (locationFound === false) {
        /**
         * Continue looking for the node's location until:
         * - confirmed the data is already in the tree
         * - the data is less than the current data and there are no left children
         * - the data is greater than or equals to the current data and there are no right children
         */
        if (data === current.data) {
          locationFound = true;
        } else if (data < current.data) {
          if (!current.left) {
            current.left = newNode;
            locationFound = true;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            locationFound = true;
          }
          current = current.right;
        }
      }
    } else {
      this.#root = newNode;
    }
  }

  /**
   * Traverses the tree until the given piece of data is found and returns the node. If the data
   * is not found, it returns null.
   * @param {*} data
   * @returns object|null
   */
  find(data) {
    // init the query result
    let queryResult = null;

    // find the node only if the root has already been set
    if (this.#root) {
      let current = this.#root;
      while (current !== null && queryResult === null) {
        if (data === current.data) {
          queryResult = current;
        } else if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }

    // finally return the result
    return queryResult;
  }

  /**
   * Checks if the tree contains a given piece of data
   * @param {*} data
   * @returns boolean
   */
  contains(data) {
    return this.find(data) !== null;
  }

  /**
   * Prints the tree recursively in a debuggable way.
   * @param {*} node
   * @param {*} prefix
   * @param {*} isLeft
   */
  prettyPrint(node = this.#root, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}

/**
 * Module Exports
 */
export default BinaryTree;
