// RECURSIVE FUNCTIONS
// calls itself

// need 
// base case
// and
// different input

function nonRecursiveCountDown (num) {
	for (let i = num; i > 0; i--) {
		console.log(i);
	}
	console.log('blastoff')
}

// console.log(nonRecursiveCountDown(12))

function recursiveCountDown (num) {
	if ( num <= 0) {
		console.log('blasties')
		return
	}
	console.log(num)
	num--
	recursiveCountDown(num)
}

console.log(recursiveCountDown(10))