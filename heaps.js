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
		console.log(this.values)
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
