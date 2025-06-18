

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// 7 3 9 2 6 10 14 2 10 15
class LRU {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(0,0);
        this.tail = new Node(0,0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insert(node) {
        node.next = this.tail;
        node.prev = this.tail.prev;
        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    get(key) {
        if(!this.cache.has(key)) {
            console.log('-1');
            return -1;
        }
        let node = this.cache.get(key);
        this.remove(node);
        this.insert(node);
        console.log(node.val)
        return node.val;
    }

    set(key, val) {
        if(this.cache.has(key)) {
            this.remove(this.cache.get(key));
            const node = new Node(key, val);
            this.insert(node)
            this.cache.delete(key)
        } 
        if(this.cache.size >= this.capacity) {
            let lru = this.head.next;
            this.remove(lru);
            this.cache.delete(lru.key)
        }
        const node = new Node(key, val);
        this.insert(node);
        this.cache.set(key, node)
    }

    print() {
        let cur = this.head.next;
        while (cur !== this.tail) {
            console.log(`[${cur.key}: ${cur.val}]`);
            cur = cur.next;
        }
    }
}

const lru = new LRU(5);

lru.get(1)

lru.set(7,'a');
lru.set(3,'b');
lru.set(9,'c');
lru.set(1,'d');
lru.set(2,'e');
lru.get(7)
lru.set(8,'f')

lru.get(11)

lru.print();




// Constructor : Initializes the LRUCache with capacity  
// module.exports = {
//     LRUCache: function(capacity){
//       let cache = new Map();
//       let list = new DLL();
//       return {
//         // get function returns an integer
//         get: function(key){
//             if(!cache.has(key)) return -1;
//             const node = cache.get(key);
//             list.remove(node);
//             list.insert(node);
//             return node.val;
//         },
//         // set returns nothing
// 	    set: function(key, value){
//             if(cache.has(key)) {
//                 const node = cache.get(key);
//                 list.remove(node);
//                 node.val = value;
//                 list.insert(node);
//                 return;
//             }
//             if(cache.size >= capacity) {
//                 const node = list.head.next;
//                 list.remove(node);
//                 cache.delete(node.key);
//             } 
//             let newNode = new Node(key, value);
//             list.insert(newNode);
//             cache.set(key, newNode);
//         }
//       }
//     }
// }

// class Node {
//     constructor(key, val) {
//         this.key = key;
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DLL {
//     constructor() {
//         this.head = new Node(0,0);
//         this.tail = new Node(0,0);
//         this.head.next = this.tail;
//         this.tail.prev = this.head;
//     }

//     insert(node) {
//         node.next = this.tail;
//         node.prev = this.tail.prev;
//         this.tail.prev.next = node;
//         this.tail.prev = node;
//     }

//     remove(node) {
//         node.prev.next = node.next;
//         node.next.prev = node.prev;
//     }
// }




