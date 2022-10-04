// TREE TRAVERSALS
 /*

For any type of tree, not just binary search trees
2 main methods

	:Breadth First Search

	:Depth First Search

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

		BFS () {
			let data = [],
					queue = [],
					node = this.root;
			queue.push(this.root);
			// while there is something in the queue
			while(queue.length) {
				node = queue.shift();
				data.push(node);
				if(node.left) queue.push(node.left);
				if(node.right) queue.push(node.right);
			}
			return data;
		}
	
	}
	
	let tree = new BinarySearchTree();
	
	tree.root = new Node(10);
	tree.root.right = new Node(15);
	tree.root.left = new Node(7);
	tree.root.left.right = new Node(9);

	// Breadth-first, check all siblings before children

// Create a queue, (can use array), and a variable to store the values of nodes visited
// Place the root node in the queue
// Loop as long as there is anything in the queue
//		Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
//    If there is a left property on the node dequeued - add it to the queue
//		If there is a right property on the node dequeued - add it to the queue

