// 参考链接：https://labuladong.gitee.io/algo/
// 定义二叉树节点
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let nums = [3,2,1,6,0,5];

/**
 * 分解问题的方法
 */

var constructMaximumBinaryTree = function(nums) {
    let res = build(0, nums.length - 1);

    function build(low, high) {
        if (low > high) {
            return null;
        }
        // 找到low-high区间的最大元素及其下标
        let max = -Infinity;
        let maxIndex = -1;
        for (let i = low; i <= high; i++) {
            if (nums[i] > max) {
                maxIndex = i;
                max = nums[i];
            }
        }
        let root = new TreeNode(max);
        root.left = build(low, maxIndex - 1);
        root.right = build(maxIndex + 1, high);
        return root;
    }
    return res;
};

console.log(constructMaximumBinaryTree(nums));