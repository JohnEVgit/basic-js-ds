const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const addInner = (node, data) => {
      if (!node) {
        return new Node(data);
      }

      if (node.data < data) {
        node.right = addInner(node.right, data);
      } else if (node.data > data) {
        node.left = addInner(node.left, data);
      }

      return node;
    }

    this.rootNode = addInner(this.rootNode, data);
  }

  has(data) {
    const searchInner = (node, data) => {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      } else if (node.data < data) {
        return searchInner(node.right, data);
      } else if (node.data > data) {
        return searchInner(node.left, data);
      }
    }

    return searchInner(this.rootNode, data);
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};