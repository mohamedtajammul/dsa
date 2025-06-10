let list1 = {
    data: 1,
    next: {
        data: 3,
        next: {
            data: 5,
            next: {
                data: 7,
                next: {
                    data: 9,
                    next: {
                        data: 11,
                        next: null
                    }
                }
            }
        }
    }
}

let list2 = {
    data: 2,
    next: {
        data: 4,
        next: {
            data: 6,
            next: {
                data: 8,
                next: {
                    data: 10,
                    next: {
                        data: 12,
                        next: null
                    }
                }
            }
        }
    }
}

function merge(head1, head2) {
    if (!head1) return head2;
    if (!head2) return head1;

    let head = null;

    if (head1.data < head2.data) head = head1;
    else head = head2;

    while (head1 && head2) {
        if (head1.data < head2.data) {
            let temp1 = head1.next;
            head1.next = head2;
            let temp2 = head2.next;
            head2.next = temp1;
        }
    }
}

console.log(merge(list1, list2))