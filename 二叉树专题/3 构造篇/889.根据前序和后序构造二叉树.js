// 参考链接：https://labuladong.gitee.io/algo/
// 定义二叉树节点
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1];

/**
 * 分解问题的思路
 */

 var constructFromPrePost = function(preorder, postorder) {
    if (preorder.length == 0) return null;
    let cur = preorder.shift();
    postorder.pop();
    let leftCur = preorder[0]; // 这里会导致结果不唯一
    let leftIndex = postorder.indexOf(leftCur);
    let curRoot = new TreeNode(cur);
    curRoot.left = constructFromPrePost(preorder.slice(0, leftIndex + 1), postorder.slice(0, leftIndex + 1));
    curRoot.right = constructFromPrePost(preorder.slice(leftIndex + 1), postorder.slice(leftIndex + 1));
    return curRoot;
};
console.log(constructFromPrePost(preorder, postorder));