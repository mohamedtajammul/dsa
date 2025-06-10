

let list = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: {
                data: 3,
                next: {
                    data: 2,
                    next: null
                }
            }
        }
    }
}

//even
// 1 2 3 3 2 1
// 

//odd
// 1 2 3 2 1

function palindrome(list) {
    let head = list;
    let slow = head, fast = head;

    // 1. Find mid
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(slow)
    // 2. Reverse from mid to last
    let prev = null, cur = slow, fwd = null;

    while (cur) {
        fwd = cur.next;
        cur.next = prev;
        prev = cur;
        cur = fwd;
    }
    console.log(prev)
    // 3. compare head1 and head2
    let head2 = prev;
    while (head && head2) {
        if (head.data !== head2.data) return false;
        head = head.next;
        head2 = head2.next;
    }

    return true;

}

console.log(palindrome(list))