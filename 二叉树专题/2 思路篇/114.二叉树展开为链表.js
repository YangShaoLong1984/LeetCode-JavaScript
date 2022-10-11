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
 * 遍历一遍二叉树的方法，结果是对的，但是LeetCode不通过，因为题目想要原地拉成链表
 */
var flatten = function(root) {
    let dummy = new TreeNode(-1,null,root);
    let p = dummy;
    traverse(root);
    return dummy.right;

    function traverse(root) {
        if (root == null) {
            return;
        }
        p.right = new TreeNode(root.val);
        p = p.right;
        traverse(root.left);
        traverse(root.right);
    }
};
console.log(flatten(root));

/**
 * 分解问题的思路，递归定义：输入节点root，然后root为根的二叉树就会被拉平为一条链表
 */
 var flatten2 = function(root) {
    if (root == null) {
        return;
    }
    flatten2(root.left);
    flatten2(root.right);

    // 左右子树已经被拉平成一条链表
    let left = root.left;
    let right = root.right;
    // 将左子树作为右子树
    root.left = null;
    root.right = left;
    // 将原先的右子树接到当前右子树的末端
    let p = root;
    while (p.right != null) { // p指向当前右子树末端
        p = p.right;
    }
    p.right = right; // 接上原先右子树到末端
};
flatten2(root);
console.log(root);
