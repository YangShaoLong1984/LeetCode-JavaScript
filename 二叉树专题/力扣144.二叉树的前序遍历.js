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
var preorderTraversal = function(root) {
    let res = [];
    traverse(root);
    function traverse(node) {
        if (node == null) {
            return;
        }
        res.push(node.val);
        traverse(node.left);
        traverse(node.right);
        return res;
        
    }
    return res;
};
console.log(preorderTraversal(root));

/**
 * 分解问题的思路
 * 一棵二叉树的前序遍历结果 = 根节点 + 左子树的前序遍历结果 + 右子树的前序遍历结果
 */
 var preorderTraversal2 = function(root) {
    let res = [];
    if (root == null) {
        return res;
    }
    res.push(root.val);
    res.push(...preorderTraversal(root.left));
    res.push(...preorderTraversal(root.right));
    return res;
};
console.log(preorderTraversal2(root));
