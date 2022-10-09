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
 * 迭代遍历，while控制上到下遍历，for控制左到右的遍历
 */
var levelOrder = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        const len = queue.length;
        let path = [];
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            path.push(cur.val);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        res.push(path);
    }
    return res;
};
console.log(levelOrder(root));

/**
 * 递归，利用前序遍历(DFS)思路，得到层序遍历(BFS)的结果
 * 这个解法更像是从左到右的「列序遍历」，而不是自顶向下的「层序遍历」
 */
 var levelOrder2 = function(root) {
    let res = [];
    if (!root) {
        return res;
    }
    traverse(root, 0);
    return res;
    function traverse(root, depth) {
        if (root == null) {
            return;
        }
        if (res.length <= depth) {
            res.push([]);
        }
        res[depth].push(root.val);
        traverse(root.left, depth + 1);
        traverse(root.right, depth + 1);
    }
};
console.log(levelOrder2(root));