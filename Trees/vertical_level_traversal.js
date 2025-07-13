// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return a array of array of integers
	verticalOrderTraversal : function(A){

        if(!A) return [];
        let q = [new Pair(A, 0)];
        let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER; 
        let map = new Map();

        while(q.length > 0) {
            let topNode = q.shift();
            min = Math.min(min, topNode.level);
            max = Math.max(max, topNode.level);
            if(topNode.node.left) {
                q.push( new Pair(topNode.node.left, topNode.level-1));
            } 
            if(topNode.node.right) {
                q.push(new Pair(topNode.node.right, topNode.level+1));
            }

            if(map.has(topNode.level)) {
                map.get(topNode.level).push(topNode.node.data)
            } else {
                map.set(topNode.level, [topNode.node.data])
            }
        }

        let ans = []
        for(let i=min; i<=max; i++) {
            ans.push(map.get(i))
        }

        return ans;
	}
};

class Pair {
    constructor(node, level) {
        this.node = node;
        this.level = level;
    }
}