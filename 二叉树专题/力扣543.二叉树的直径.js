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
 * 遍历
 */
var diameterOfBinaryTree = function(root) {
    let res = 0;
    function traverse(node) {
        if (node == null) {
            return;
        }
        let curMax = maxDepth(node.left) + maxDepth(node.right);
        res = Math.max(res, curMax);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return res;
};

function maxDepth(root) {
    if (root == null) {
        return 0;
    }
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    return Math.max(leftMax, rightMax) + 1;
}
console.log(diameterOfBinaryTree(root));

/**
 * 分解问题的思路：当前节点 + 左右子树的子问题
 * 后序遍历，把计算知己经的逻辑放在后序位置，因为前序位置无法获取子树信息
 */
 var diameterOfBinaryTree2 = function(root) {
    let res = 0;
    traverse(root);
    function traverse(node) {
        if (node == null) {
            return 0;
        }
        let leftMaxDepth = traverse(node.left);
        let rightMaxDepth = traverse(node.right);
        res = Math.max(res, leftMaxDepth + rightMaxDepth);
        return Math.max(leftMaxDepth, rightMaxDepth) + 1;
    }
    return res;
};
console.log(diameterOfBinaryTree2(root));