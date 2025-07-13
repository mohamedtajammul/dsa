class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let tree = new Node(20);
tree.left = new Node(10);
tree.right = new Node(30);
tree.left.left = new Node(5);
tree.left.right = new Node(15);
tree.right.right = new Node(35);

console.log(tree)

function deleteNode(root, k) {
    if(!root) return null;
    else if(k < root.data) {
        root.left = deleteNode(root.left, k)
    } else if(k > root.data) {
        root.right = deleteNode(root.right, k)
    } else {
        if(!root.left && !root.right) return null;
        else if(!root.left && root.right) return root.right;
        else if(root.left && !root.right) return root.left;
        else {
            let predecessor = findMax(root.left);
            root.data = predecessor.data;
            root.left = deleteNode(root.left, root.data)
        }
    }
    return root;
    
}

function findMax(root) {
    let cur = root;
    while(cur.right) cur = cur.right;
    return cur;
}

let res = deleteNode(tree, 10);

console.log(res)


