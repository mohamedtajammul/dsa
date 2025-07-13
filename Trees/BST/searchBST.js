class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Constructing the BST
let a = new TreeNode(15);
a.left = new TreeNode(10);
a.right = new TreeNode(20);
a.left.left = new TreeNode(8);
a.left.right = new TreeNode(12);
a.right.left = new TreeNode(17);
a.right.right = new TreeNode(25);

let k = 21;
function searchBST(root) {
    if(!root) {
        console.log('Not found')
        return;
    }
    
    if(k === root.val) {
        console.log('Found');
        return;
    } else if(k < root.val) {
        searchBST(root.left)
    } else {
        searchBST(root.right)
    }
    
}
searchBST(a)
