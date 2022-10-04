// HEAPS

/*



*/

class MaxBinaryHeap {
	constructor () {
		this.values = [];
	}

	insert (value) {
		this.values.push(value);

		let idx = this.values.length - 1;
		const element = this.values[idx];
		
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2)
			let parent = this.values[parentIdx];

			if (element <= parent) break;
			
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	extractMax () {
		const max = this.values[0];
		const lastElement = this.values.pop();
		
		if (this.values.length > 0) {
			this.values[0] = lastElement;
			this.sinkDown();
		}

		return max;
	}

	sinkDown () {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild > element) {
					swap = leftChildIdx
				}
 			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild) 
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

let newHeap = new MaxBinaryHeap()
newHeap.insert(50)
newHeap.insert(40)
newHeap.insert(60)
newHeap.insert(80)
newHeap.insert(70)
newHeap.insert(10)
newHeap.insert(20)
newHeap.insert(30)
newHeap.insert(90)
newHeap.insert(85)
newHeap.insert(75)
newHeap.insert(45)
newHeap.insert(95)

class PQNode {
	constructor (val, priority) {
		this.val = val;
		this.priority = priority;
	}
}
class PriorityQueue {
	constructor () {
		this.values = [];
	}

	enqueue (val, priority) {
		let newNode = new PQNode(val,priority)
		this.values.push(newNode);

		let idx = this.values.length - 1;
		const element = this.values[idx];
		
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2)
			let parent = this.values[parentIdx];

			if (element.priority >= parent.priority) break;
			
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	dequeue () {
		const min = this.values[0];
		const lastElement = this.values.pop();
		
		if (this.values.length > 0) {
			this.values[0] = lastElement;
			this.sinkDown();
		}

		return min;
	}

	sinkDown () {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx
				}
 			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority) 
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

let ER = new PriorityQueue ();

ER.enqueue('common cold', 5)
ER.enqueue('head wound', 1)
ER.enqueue('high fever', 4)
ER.enqueue('broken arm', 2)
ER.enqueue('gash', 3)