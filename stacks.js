// STACKS

// LIFO
// Last in first out
// Pringles

// Think about the call stack
// Undo/ Redo
// Managing function invocations
// Routing (the history objects)

// Creating a stack with an array

let stack = [];

stack.push('google')
stack.push('instagram')
stack.push('youtube')

stack.pop();
// youtube
stack.pop();
// instagram
stack.pop();
// google

// shift and unshift also act as a stack

// Stack implementation with a linked list

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	firstIn (val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.first;
			this.head = newNode;
			newNode.next = temp;
		}
		return ++this.size;
	}

	firstOut () {
		if (!this.first) return null;
		let temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}

}