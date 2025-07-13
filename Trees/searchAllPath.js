class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Create nodes
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);

//      1
//  2       3
//    5
let arr = [], ans = [];
function searchPath(root, str) {
    if(!root) return;
    // arr.push(root.val)
    str = str+root.val
    if(!root.left && !root.right) {
        // ans.push([...arr])
        ans.push(str)
        return;
    }
    str = str+"->"
    if(root.left) {
        searchPath(root.left, str);
    }
    if(root.right) {
        searchPath(root.right, str);
    }
    // arr.pop()
}

let res = searchPath(root, "")
console.log(ans)

