// 1. create a linked lis class with 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// 1 
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(data) {

        if (this.length == 0) {
            this.head = new Node(data);
            this.length++;
            return;
        }

        let cur = this.head;

        while (cur.next) {
            cur = cur.next;
        }
        const newNode = new Node(data);
        cur.next = newNode;
        this.length++;
        return;
    }

    insertAt(data, pos) {
        if (pos < 0 || pos > this.length) return console.log("Invalid Position");

        if (this.length === 0) {
            this.head = new Node(data);
            this.length++;
            return;
        }

        if (pos == 0) {
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return;
        }

        let cur = this.head;
        for (let i = 0; i < pos - 1; i++) {
            cur = cur.next;
        }
        const newNode = new Node(data);
        newNode.next = cur.next;
        cur.next = newNode;
        this.length++;
        return;

    }

    delete() {
        if (this.length === 0) return console.log("No items found");
        if (this.length === 1) {
            this.head = null;
            this.length--;
            return;
        }
        let cur = this.head;
        while (cur.next.next) {
            cur = cur.next;
        }
        cur.next = null;
        this.length--;
        return;
    }

    deleteAt(pos) {
        if (pos < 0 || pos > this.length) return console.log("Invalid position");
        if (pos == 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        let cur = this.head;
        for (let i = 0; i < pos - 1; i++) {
            cur = cur.next;
        }
        cur.next = cur.next.next;
        this.length--;
        return;
    }

    print() {
        let cur = this.head;
        while (cur) {
            console.log(cur.data + ' ele')
            cur = cur.next;
        }
        return;
    }

    size() {
        console.log(this.length);
    }
}

const list1 = new LinkedList();
list1.insert(10);
list1.insert(20);
list1.insert(30);
list1.insert(40);

// list1.insertAt(25, 5);

// list1.delete();

list1.deleteAt(2);

list1.size();
list1.print();