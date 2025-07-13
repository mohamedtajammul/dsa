class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
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

// [
//     [15],
//     [10,20], 
//     [8,12,17,25]
// ]
function nextPointer(root) {
    if(!root) return null;
    
    let q = [root];
    while(q.length > 0) {
        let qSize = q.length;
        for(let i=0; i<qSize; i++) {
            let firstNode = q.shift();
            
            if(firstNode.left) {
                q.push(firstNode.left)
            }
            
            if(firstNode.right) {
                q.push(firstNode.right)
            }
            
            if(i<qSize-1) {
                firstNode.next = q[0]
            }
            
        }
        
    }
    
    return root
}

console.log(nextPointer(a))