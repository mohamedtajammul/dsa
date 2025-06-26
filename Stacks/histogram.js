let arr = [2,4,3,4,5,1];

// BruteForce
function histogramBF(arr) {
    let len = arr.length;
    
    let ans = 0;
    for(let i=0; i<len; i++) {
        let left = 0, right = 0;

        // i to 0
        for(let a=i; a>=0; a--) {
            if(arr[a] >= arr[i]) {
                left = left + arr[i]
            } else {
                break;
            }
        }
        
        // i+1 to len-1
        for(let b=i+1; b<len; b++) {
            if(arr[b] >= arr[i]) {
                right = right + arr[i]
            } else {
                break;
            }
        }
        
        ans = Math.max(ans, left+right)
    }
    
    return ans;
}

module.exports = { 
 //param A : array of integers
 //return an integer
	largestRectangleArea : function(A){
        
	}
};

function histogram(A) {
    if(A.length === 1) return A[0];

    let left = smallestNearLeft(A);
    let right = smallestNearRight(A);

    let ans = 0;

    for(let i=0; i<A.length; i++) {
        let temp = (right[i] - left[i] - 1) * A[i];
        ans = Math.max(ans, temp);
    }

    return ans;
}

function smallestNearLeft(arr) {
    let len = arr.length;
    let stack = [];
    let ans = [];

    for(let i=0; i<len; i++) {

        if(stack.length === 0) {
            ans.push(-1);
            stack.push(i)
        } else {
            if( arr[i] <= arr[stack[stack.length-1]]) {
                while(arr[i] <= arr[stack[stack.length-1]]) {
                    stack.pop();
                }
                if(stack.length === 0) {
                    ans.push(-1);
                    stack.push(i);
                } else {
                    ans.push(stack[stack.length-1]);
                    stack.push(i);
                }
            } else {
                ans.push(stack[stack.length-1]);
                stack.push(i)
            }
        }
    }

    return ans;

}

function smallestNearRight(arr) {
    let len = arr.length;
    let stack = [];
    let ans = new Array(len);

    for(let i=len-1; i>=0; i--) {
        
        while(stack.length > 0 && arr[i] <= arr[stack[stack.length-1]]) {
            stack.pop()
        }
        
        if(stack.length === 0) {
            ans[i] = len;
        } else {
            ans[i] = stack[stack.length-1]
        }
        stack.push(i)
    }

    return ans;
}


console.log(histogramBF(arr))

console.log(histogram(arr))