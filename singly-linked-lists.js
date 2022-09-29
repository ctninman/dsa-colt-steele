// LINKED LIST
// keep track of 
// 	- head
// 	- tails
// 	- length
//	- next

// good for insertion and deletion


class Node {
	constructor(val){
		this.val = val;
		this.next = null
	}
}

class SinglyLinkedList{
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while(current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}

	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
		newNode.next = this.head;
		this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(indx) {
		if(indx < 0 || indx >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter !== indx) {
			current = current.next;
			counter++;
		}
		return current;
	}

	set(indx, val) {
		let foundNode = this.get(indx);
		if(foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(indx, val){
		if(indx < 0 || indx > this.length) return false;
		if(indx === this.length) return this.push(val);
		if(this.length === 0) return this.unshift(val);
		
		let prev = this.get(indx - 1);
		let newNode = new Node(val);
		let temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}

	remove(indx) {
		if(indx <= 0) return undefined;
		if(indx === 0) return this.shift();
		if(indx === this.length - 1) return this.pop();

		let previousNode = this.get(indx - 1);
		let removedNode = previousNode.next;
		previousNode.next = removedNode.next;
		this.length--;
		return removedNode;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;

		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}

}


/*
BIG O of Singly linked lists

insertion O(1)
removal 0(1) or O(n) DEPENDS
searching O(n)
access O(n)

excel at insertion and deletion at beginning are frequently required
no index
foundation for stack and queues

*/