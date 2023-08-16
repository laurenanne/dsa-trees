/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function helper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return helper(node.right) + 1;
      if (node.right === null) return helper(node.left) + 1;

      return Math.min(helper(node.left), helper(node.right)) + 1;
    }

    return helper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function helper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return helper(node.right) + 1;
      if (node.right === null) return helper(node.left) + 1;

      return Math.max(helper(node.left), helper(node.right)) + 1;
    }

    return helper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let max = 0;

    function sumHelper(node) {
      if (node === null) return 0;
      let leftSum = Math.max(0, sumHelper(node.left));
      let rightSum = Math.max(0, sumHelper(node.right));
      let currMax = leftSum + rightSum + node.val;
      max = Math.max(max, currMax);

      return Math.max(node.val + leftSum, node.val + rightSum);
    }

    sumHelper(this.root);
    return max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let min = lowerBound;
    let currNextLarger;

    if (this.root === null) return null;

    function traversal(node, val) {
      if (!node) return;
      traversal(node.left, val);
      val.push(node.val);
      traversal(node.right, val);
    }

    function helper(node) {
      const val = [];

      traversal(node, val);

      for (let i = 0; i < val.length; i++) {
        if (val[i] > min) {
          if (!currNextLarger || val[i] < currNextLarger) {
            currNextLarger = val[i];
          }
        }
      }
      return !currNextLarger ? null : currNextLarger;
    }
    return helper(this.root);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // function breadthFirst(node, level) {
  //   if (!node) return;
  //   breadthFirst(node.left, val);
  //   val.push(node.val);
  //   traversal(node.right, val);
  // }

  // function helper(node) {
  //   const val = [];

  //   traversal(node, val);

  //   for (let i = 0; i < val.length; i++) {
  //     if (val[i] > min) {
  //       if (!currNextLarger || val[i] < currNextLarger) {
  //         currNextLarger = val[i];
  //       }
  //     }
  //   }
  //   return !currNextLarger ? null : currNextLarger;
  // }
  // return helper(this.root);

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
