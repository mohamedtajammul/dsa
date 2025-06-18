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

// 1,3,5,7,9
// 2,4,6,8,10

function merge(head1, head2) {
    if (!head1) return head2;
    if (!head2) return head1;

    let head = null;

    if (head1.data < head2.data) {
        head = head1;
        head1 = head1.next;
    } else {
        head = head2;
        head2 = head2.next;
    }

    let temp = head;

    while (head1 && head2) {
        if (head1.data < head2.data) {
            temp.next = head1;
            head1 = head1.next;
        } else {
            temp.next = head2;
            head2 = head2.next;
        }

        temp = temp.next;
    }

    if(head1) temp.next = head1;
    if(head2) temp.next = head2;

    return head;
}

// console.log(merge(list1, list2))

export default merge;