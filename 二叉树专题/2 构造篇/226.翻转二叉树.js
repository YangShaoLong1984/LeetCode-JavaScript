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
 * 遍历一遍二叉树的思路，考虑两件事，每个二叉树节点，要做什么事？要在前/中/后哪个位置做这件事情
 */
var invertTree = function(root) {
    traverse(root);
    return root;

    function traverse(node) {
        if (node == null) {
            return;
        }
        [node.left, node.right] = [node.right, node.left];
        traverse(node.left);
        traverse(node.right);
    }
};
console.log(invertTree(root));

/**
 * 分解问题的思路，给递归函数赋一个定义：将以 root 为根的这棵二叉树翻转，返回翻转后的二叉树的根节点
 */
 var invertTree2 = function(root) {
    if (root == null) {
        return null;
    }
    // 翻转左右子树
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    // 交换左右子节点
    root.left = right;
    root.right = left;
    return root;
};
console.log(invertTree2(root));