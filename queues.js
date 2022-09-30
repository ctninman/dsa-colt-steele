// QUEUES

// FIFO
// First in first out

// Background tasks
// Print queue

// Creating a queue with an array

let q = [];

q.push('1st')
q.push('2nd')
q.push('3rd')

q.shift()
// 1st
q.shift()
// 2nd
q.shift()
// 3rd

// OR unshift and then pop

// Creating a queue with a linked list

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor () {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		let newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}

	dequeue() {
		if (!this.first) return null;

		let temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.val;
	}
}