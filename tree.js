/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let total = this.root.val;

    function sumHelp(node) {
      for (let child of node.children) {
        total += child.val;
        if (child.children.length > 0) {
          sumHelp(child);
        }
      }
    }

    sumHelp(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let count = 0;

    this.root.val % 2 === 0 ? (count += 1) : 0;

    function countHelp(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) {
          count += 1;
        }
        if (child.children.length > 0) {
          countHelp(child);
        }
      }
    }

    countHelp(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = 0;

    this.root.val > lowerBound ? (count += 1) : 0;

    function countHelp(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) {
          count += 1;
        }
        if (child.children.length > 0) {
          countHelp(child);
        }
      }
    }

    countHelp(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
