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

function sumRange (num) {
	if (num === 1) return 1;
	return num + sumRange(num - 1)
}

function nonRecursiveFactorial (num) {
	let total = 1;
	for (let i = num; i > 1; i--) {
		total *= i
	}
	return total;
}

function recursiveFactorial (num) {
  if (num === 1) return 1
	return num * recursiveFactorial(num - 1)
}

console.log(nonRecursiveFactorial(10))
console.log(recursiveFactorial(10))
