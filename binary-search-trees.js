// TREES

/*
Non-linear vs lists which are linear

Parent-child relationship

ROOT - top node in a tree
CHILD - A node directly connected to another node when moving away from the Root
PARENT - The converse notion of a child
SIBLINGS - A group of nodes with the same parents
LEAF - A node with no children
EDGE - The connection between one node and another

Examples -
	HTML DOM
	Network routing
	Abstract syntax trees
	Artificial intelligence
	Computer File Systems - Folder
	JSON - Child nodes of parents with single root

KINDS OF TREES

	Trees
	Binary trees
		Each parent can have only two children per node
	Binary search trees
	Heaps

*/

/*

BINARY SEARCH TREES

	Every parent has at most 2 children
	Anything to the left is less than
	Anything to the right is greater than

*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let newNode = new Node(val)

		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (val === current.val) return undefined;
			if (val < current.val) {
				if(current.left === null) {
					current.left = newNode;
					return this;
				} else {
					current = current.left;
				}
			} else if (val > current.val) {
				if(current.right === null) {
					current.right = newNode;
					return this;
				} else {
					current = current.right;
				}
			} 
		}
	}

	find(val) {
		if (!this.root) return false;

		let current = this.root;
		let found = false

		while (current && !found) {
			if (val === current.val) return true;
			if (val < current.val) {
				current = current.left
			} else if (val > current.val) {
				current = current.right;
			} else {
				found = true;
				return found;
			}
		}
		return false;
	}

}

let tree = new BinarySearchTree();

tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);