// Q. Given an integer array with distinct values, find the sum of (max-min) ele of all subarrays as the answer.



function sumOfDiffOfMaxMinSubarray(A) {
    let len = A.length;

    if(len === 0) return 0;
    let ans = BigInt(0);
    let mod = BigInt(1000000007);

    let smallLeft = smallestNearLeft(A);   // [-1,0,0]
    let smallRight = smallestNearRight(A); // [3,3,3]
    let largeLeft = largestNearLeft(A);    // [-1,-1,1]
    let largeRight = largestNearRight(A);  // [1,3,3]

    for(let i=0; i<len; i++) {
        let contributionOfMin = (i-smallLeft[i]) * (smallRight[i] - i);
        let contributionOfMax = (i-largeLeft[i]) * (largeRight[i] - i);
        let sum = (contributionOfMax - contributionOfMin) * A[i]
        ans = ans + BigInt(sum);
    }

    return Number(ans%mod);
}

// 2,5,3
function smallestNearLeft(arr) {
    let len = arr.length;
    let stack = [], ans = new Array(len);

    for(let i=0; i<len; i++) {

        while(stack.length > 0 && arr[i] <= arr[stack[stack.length-1]]) {
            stack.pop();
        }

        ans[i] = stack.length === 0 ? -1 : stack[stack.length-1];
        stack.push(i);

    }   
    return ans;
}

function smallestNearRight(arr) {
    let len = arr.length;
    let stack = [], ans = new Array(len);

    for(let i=len-1; i>=0; i--) {

        while(stack.length > 0 && arr[i] <= arr[stack[stack.length-1]]) {
            stack.pop();
        }

        ans[i] = stack.length === 0 ? len : stack[stack.length-1];
        stack.push(i)
    }
    return ans;
}

function largestNearLeft(arr) {
    let len = arr.length;
    let stack = [], ans = new Array(len);

    for(let i=0; i<len; i++) {

        while(stack.length > 0 && arr[i] >= arr[stack[stack.length-1]]) {
            stack.pop();
        }

        ans[i] = stack.length === 0 ? -1 : stack[stack.length-1];
        stack.push(i)
    }
    return ans;
}

function largestNearRight(arr) {
    let len = arr.length;
    let stack = [], ans = new Array(len);

    for(let i=len-1; i>=0; i--) {

        while(stack.length > 0 && arr[i] >= arr[stack[stack.length-1]]) {
            stack.pop();
        }

        ans[i] = stack.length === 0 ? len : stack[stack.length-1];
        stack.push(i)
    }
    return ans;
}

console.log(sumOfDiffOfMaxMinSubarray([2,5,3]))
