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

	insert(idx, val) {
		if(idx < 0 || idx > this.length) return false;
		if(idx === this.length) return this.push(val);
		if(this.length === 0) return this.unshift(val);

		let beforeNewNode = this.get(idx - 1);
		let afterNewNode = beforeNewNode.next
		let newNode = new Node(val);
	
		beforeNewNode.next = newNode;
		newNode.prev = beforeNewNode;
		afterNewNode.prev = newNode;
		newNode.next = afterNewNode;
		this.length++;
		return true;
	}

	remove(idx) {
		if(idx < 0 || idx >= this.length) return undefined;
		if(idx === 0) return this.shift();
		if(idx === this.length - 1) return this.pop();

		let removedNode = this.get(idx);
		let beforeNode = removedNode.prev;
		let afterNode = removedNode.next;

		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;

		removedNode.next = null;
		removedNode.prev = null;

		this.length--;
		return removedNode;
	}

}

