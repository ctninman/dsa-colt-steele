// HASH TABLES

/*
1. Fast
2. Uniformly Distributes Values (not clustered)
3. Deterministic (same output every time based on same input)

*/

/*
code for number position of letter
.charCodeAt() - 96
"a".charCodeAt(0) - 96 // 1
"fib".charCodeAt(2) - 96 // 2
*/

function numberAddHash (string) {
	let total = 0;
	for (let i = 0; i < string.length; i++) {
		total += string.charCodeAt(i) - 96
	}
	return total;
}

// numberAddHash('abcd')
// numberAddHash('bdfh')
// numberAddHash('bbbbbbbbbbbb')

// Works on strings only
function fullNumberAddHash (key, arrayLength) {
	let total = 0;
	for (let char of key) {
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLength;
	}
	return total;
}
// Problems with this hash
	// 1. Only hashes strings
	// 2. Not constant time, depends on length of string
	// 3. Could be more random


	function slightlyImprovedFullNumberAddHash (key, arrayLength) {
		let total = 0;
		let WEIRD_PRIME = 31
		// minimizes number of characters to be looped through, never more than 100
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i]
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % arrayLength;
		}
		return total;
	}


// DEALING WITH COLLISIONS

// 1. Separate chaining
//   - store data at same hash location within a nested structure (array, linked list...)


// 2. Linear probing
//   - look for the next available slot


// HASH TABLE CLASS

class HashTable {
	constructor (size = 53) {
		this.keyMap = new Array(size)
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set (key, value) {
		let index = this._hash(key);
		// If there is nothing at that index, create an empty array
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		// push 
		this.keyMap[index].push([key,value]);
	}

	get (key) {
		let index = this._hash(key)
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i ++) {
				if(this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i][1]
				}
			}

		}
		return undefined;
	}

}

let ht = new HashTable(7);
ht.set('french', 'fries')
ht.set('american', 'burgers')
ht.set('british', 'chips')
ht.set('japanese', 'sushi')
ht.set('italian', 'pasta')
ht.set('thai', 'curry')
ht.set('korean', 'japchae')

// console.log(ht.set('helol world','...'))