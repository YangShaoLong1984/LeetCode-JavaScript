// 参考链接：https://labuladong.gitee.io/algo/
// 定义二叉树节点
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// 以下构造出了一个完全二叉树：root = [1, 2, 3, 4, 5, 6, 7]
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

/**
 * 遍历二叉树的思路
 */
var maxDepth = function(root) {
    let res = 0, depth = 0;
    traverse(root);
    function traverse(node) {
        if (node == null) {
            return;
        }
        depth++;
        if (node.left == null && node.right == null) {
            res = Math.max(res, depth);
        }
        traverse(node.left);
        traverse(node.right);
        depth--;
    }
    return res;
};
console.log(maxDepth(root));

/**
 * 分解问题计算答案的思路
 */
 var maxDepth2 = function(root) {
    if (root == null) {
        return 0;
    }
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    let res = Math.max(leftMax, rightMax) + 1;
    return res;
};
console.log(maxDepth2(root));