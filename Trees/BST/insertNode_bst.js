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


function insertNode(root, k) {
    if(!root) {
        return new Node(k);
    } 
    if(k < root.data) {
        root.left = insertNode(root.left, k)
    } else if (k > root.data) {
        root.right = insertNode(root.right, k)
    }
    
    return root;
    
}

console.log(insertNode(tree, 25))