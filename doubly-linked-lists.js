// DOUBLY LINKED LISTS
// 2 pointers, previous and next
// Drawback, more memory
// but has more flexibility
/*
Node
	-value
	-next
	-previous

Doubly Linked List
	-head
	-tail
	-length

*/


class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}


class DoublyLinkedList {
	constructor () {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let popNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = popNode.prev;
			this.tail.next = null;
			popNode.prev = null;
		}
		this.length--;
		return popNode;
	}

	shift () {
		if (!this.head) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}	

	get(idx) {
		if (idx < 0 || idx >= this.length) return null;
		if (idx <= this.length / 2) {
			let counter = 0;
			let current = this.head;
			while (counter !== idx) {
				current = current.next;
				counter++;
			}
		} else {
			let counter = this.length - 1;
			let current = this.tail;
			while (count !==idx) {
				current = current.prev;
				counter--;
			}
		}
		return current;
	}

	set(idx, val) {
		let foundNode = this.get(idx);
		if (found != null) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

}

