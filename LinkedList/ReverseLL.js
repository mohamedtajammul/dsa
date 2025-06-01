

// 1 2 3 4 5 6 - LL
// 6 5 4 3 2 1

let list = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: {
                data: 4,
                next: {
                    data: 5,
                    next: {
                        data: 6,
                        next: null
                    }
                }
            }
        }
    }
}

function reverseLL(head) {
    let prev = null;
    let cur = head;
    let next = null;

    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
}

console.log(reverseLL(list))