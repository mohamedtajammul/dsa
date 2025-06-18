import merge from "./mergeSortedLL.js";

let list1 = {
    data: 11,
    next: {
        data: 3,
        next: {
            data: 5,
            next: {
                data: 1,
                next: {
                    data: 9,
                    next: {
                        data: 2,
                        next: null
                    }
                }
            }
        }
    }
}

// 11, 3, 5, 1, 9. 2
function mergeSort(head) {
    if(!head || !head.next) return head;
    let slow = head, fast = head;
    
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let h1 = head, h2 = slow.next;
    slow.next = null;

    h1 = mergeSort(h1);
    h2 = mergeSort(h2);
    let res = merge(h1, h2);

    return res;
}

console.log(JSON.stringify(mergeSort(list1)))