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


function middle(head) {

    if (!head) return null;
    let slow = head, fast = head;

    // 1 2 3 4 5 6 7 -> 4

    // 1 2 3 4 5 6 -> 3
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}

console.log(middle(list))