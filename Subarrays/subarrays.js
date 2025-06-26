let arr = [2,5,3]


// O(n3)
function subarrays(arr) {
    let len = arr.length;
    
    for(let i=0; i<len ;i++) {
        for(let j=i; j<len; j++) {
            for(let k=i; k<=j; k++) {
                console.log(arr[k])
            }
            console.log(' ')
        }
    }
}

// O(n2)
function subarrays(arr) {
    let len = arr.length;
    let subarrays = [];
    for(let i=0; i<len ;i++) {
        let subarray = []
        for(let j=i; j<len; j++) {
            subarray.push(arr[j])
            subarrays.push(subarray)
        }
    }
    return subarrays;
}

console.log(subarrays(arr))