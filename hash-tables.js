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
		console.log(total, 'is total')
	}
}

numberAddHash('abcd')
numberAddHash('bdfh')
numberAddHash('bbbbbbbbbbbb')

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