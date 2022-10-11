// 参考链接：https://labuladong.gitee.io/algo/
// 定义二叉树节点
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let inorder = [9,3,15,20,7], postorder = [9,15,7,20,3];

/**
 * 分解问题的思路
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length == 0) return null;
    let cur = postorder.pop();
    let index = inorder.indexOf(cur);
    let curRoot = new TreeNode(cur);
    curRoot.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
    curRoot.right = buildTree(inorder.slice(index + 1), postorder.slice(index));
    return curRoot;
};

console.log(buildTree(inorder, postorder));