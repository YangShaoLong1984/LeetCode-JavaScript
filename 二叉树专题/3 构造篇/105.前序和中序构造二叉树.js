// 参考链接：https://labuladong.gitee.io/algo/
// 定义二叉树节点
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];

/**
 * 分解问题的思路
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length == 0) return null;
    let cur = preorder.shift();
    let index = inorder.indexOf(cur);
    let curRoot = new TreeNode(cur);
    curRoot.left = buildTree(preorder.slice(0, index), inorder.slice(0, index));
    curRoot.right = buildTree(preorder.slice(index), inorder.slice(index + 1));
    return curRoot;
};
console.log(buildTree(preorder, inorder));