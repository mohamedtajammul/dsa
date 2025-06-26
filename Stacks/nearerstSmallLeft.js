
// Q. Find the index of nearest smallest element in left.

let arr = [4,5,2,10,3,12]

// exp output - [-1,0,-1,2,2,4]
// stack - [0,1,2 ]
function nearest_small(arr) {
    let ans = [];
    let stack = [];
    
    for(let i=0; i<arr.length; i++) {
        if(stack.length === 0) {
            ans.push(-1)
            stack.push(i)
        } else {
            // let stackTop = stack[stack.length-1]
            if(arr[stack[stack.length-1]] < arr[i]) {
                ans.push(stack[stack.length-1])
                stack.push(i);
            } else {
                
                while(arr[stack[stack.length-1]] >= arr[i]) {
                    stack.pop()
                }
                if(stack.length === 0) {
                    ans.push(-1);
                    stack.push(i)
                } else {
                    ans.push(stack[stack.length-1])
                    stack.push(i)
                }
            }
        }
        
    }
    
    return ans;
}

console.log(nearest_small(arr))