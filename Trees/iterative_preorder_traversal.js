
//         1
//     2       3
//  4     5

// inorder -    4 2 5 1 3 
// preorder -   1 2 4 5 3
// postorder -  4 5 2 3 1
class Pair {
    constructor(node, state) {
        this.node = node;
        this.state = state;
    }
}

function iterative_preorder(root) {
    let stack = [];
    let node_top = new Pair(root, 0);
    stack.push(node_top);
    
    while(stack.length > 0) {
        let top_node = stack[stack.length -1 ];
        if(top_node.state === 0) {
            console.log(top_node.node.data)
            top_node.state++;
        } else if (top_node.state === 1) {
            if(top_node.node.left) {
                stack.push(new Pair(top_node.node.left, 0))
            }
            top_node.state++;
        } else if (top_node.state === 2) {
            if(top_node.node.right) {
                stack.push(new Pair(top_node.node.right, 0));
            }
            top_node.state++;
        } else {
            stack.pop();
        }
    }
}

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let head = new TreeNode(1);
head.left = new TreeNode(2);
head.right = new TreeNode(3);
head.left.left = new TreeNode(4);
head.left.right = new TreeNode(5);

iterative_preorder(head)



