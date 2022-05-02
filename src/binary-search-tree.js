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

  find(data) {
    const findInner = (node, data) => {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      } else if (node.data < data) {
        return findInner(node.right, data);
      } else if (node.data > data) {
        return findInner(node.left, data);
      }
    }

    return findInner(this.rootNode, data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return null;
      }

      if (node.data < data) {

        node.right = removeNode(node.right, data);
        return node;

      } else if (node.data > data) {

        node.left = removeNode(node.left, data);
        return node;

      } else {

        if (!node.right && !node.left) {

          return null;

        } else if (!node.right) {

          node = node.left;
          return node;

        } else if (!node.left) {

          node = node.right;
          return node;

        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;

      }
    }

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};