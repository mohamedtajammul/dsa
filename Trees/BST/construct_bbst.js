class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let arr = [5,10,15,20,25,30];

function construct_bbst(arr, s, e) {
    // base condition
    if(s>e) return null;
    
    let mid = Math.floor((s+e)/2);
    let node = new Node(arr[mid]);
    
    node.left = construct_bbst(arr, s, mid-1);
    node.right = construct_bbst(arr, mid+1, e);
    
    return node;
}

let output = construct_bbst(arr, 0, arr.length-1)
console.log(output)