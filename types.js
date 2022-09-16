// PROBLEM SOLVING PATTERNS

// FREQUENCY COUNTER
// Uses objects or sets to collect values/frequencies of values
// Can avoid need for nested loops O(N^2) operations with arrays/strings
// Usually O(N)

// input: 2 arrays, output: true if every value in array has corresponding value in 2nd array, same frequency

// NAIVE SOLUTION   O(N^2)
function same (arr1, arr2) {
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

// REFACTORED FREQUENCY COUNTER
function sameBetter (arr1, arr2) {
		// if arrays not the same length, can't be true
		if (arr1.length !== arr2.length) {
			return false;
		}
		let frequencyCounter1 = {}
		let frequencyCounter2 = {}
		// loop of each arr (not nested so O(N) ) and create an object which hold the count of each
		for (let val of arr1) {
			frequencyCounter1[val] = (frequencyCounter1 || 0) + 1
		}
		for (let val of arr2) {
			frequencyCounter2[val] = (frequencyCounter2 || 0) + 1
		}
		for(let key in frequencyCounter1) {
			// is the square of each value in array1 present in array2?
			if (!(key ** 2 in frequencyCounter2)) {
				return false
			}
			// does the number of squared values in array2 equal those of array1
			if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
				return false
			}
		}
		return true
}

// SOLVE ANAGRAM WITH FREQUENCY COUNTER METHOD

function validAnagram (str1, str2) {
	if (str1.length !== str2.length) {
		return false
	}

	const lookup = {}

	for (let i = 0; i < str1.length; i++) {
		let letterStr1 = str1[i];
		lookup[letterStr1] ? lookup[letterStr1] += 1 : lookup[letterStr1] = 1
	}
	
	for (let i = 0; i < str2.length; i++) {
		let letterStr2 = str2[i];
		if (!lookup[letterStr2]) {
			return false;
		} else {
			lookup[letterStr2] -= 1
		}
		return true
	}
}

console.log(validAnagram('naanba', 'banana'))
console.log(validAnagram('naanba', 'bananac'))

// MULTIPLE POINTERS

// given an ordered array of numbers (must be ordered for better solution to work)
// return the first two numbers that add up to equal zero

// NAIVE SOLUTION
// O(n^2) nested loop

function naiveSumZero (arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]]
			}
		}
	}
}

function fasterSumZero (arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]]
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

console.log(naiveSumZero([-7, -3, -2, -1, 2, 5, 6]))
console.log(fasterSumZero([-7, -3, -2, -1, 2, 5, 6]))

// SLIDING WINDOW






// DIVIDE AND CONQUER






// DYNAMIC PROGRAMMING







// GREEDY ALGORITHMS






// BACKTRACKING