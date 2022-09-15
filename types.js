// PROBLEM SOLVING PATTERNS

// FREQUENCY COUNTER
// Uses objects or sets to collect values/frequencies of values
// Can avoid need for nested loops O(N^2) operations with arrays/strings
// Usually O(N)

// input: 2 arrays, output: true if every value in array has corresponding value in 2nd array, same frequency

// NAIVE SOLUTION   O(N^2)
function same (arr1) {
	// if arrays not the same length, can't be true
	if (arr1.length !== arr2.length) {
		return false;
	}
	// loop through first array
	for (let i = 0; i < arr1.length; i++) {
		// search for index of element that is equal to 1st array current iteration squared
		// if nothing is found, return is -1, so then return false
		let correctIndex = arr2.indexOf(arr1[i] ** 2)
		if (correctIndex === -1) {
			return false
		}
		// remove one element from 2nd array at the index found
		arr2.splice(correctIndex, 1)
	}
	// if we make it to the end of the function without returning false, return true
	return true
}



// MULTIPLE POINTERS






// SLIDING WINDOW






// DIVIDE AND CONQUER






// DYNAMIC PROGRAMMING







// GREEDY ALGORITHMS






// BACKTRACKING