

class Pair {
    constructor(node,  state) {
        this.node = node;
        this.state = state;
    }
}

function iterative_node(head) {
    const pair = new Pair(head, 0);
    let stack = [];
    stack.push(pair);
    
    while(stack.length > 0) {
        let top = stack[stack.length-1];
        if(top.state === 0) {
            if(top.node.left) {
                let temp = new Pair(top.node.left, 0);
                stack.push(temp);
            }
            top.state++;
        } else if(top.state === 1) {
            console.log(top.node.data)
            top.state++;
        } else if(top.state === 2) {
            if(top.node.right) {
                let temp = new Pair(top.node.right, 0);
                stack.push(temp)
            }
            top.state++;
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


iterative_node(head);

