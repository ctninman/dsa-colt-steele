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

// Multiple pointers
// countUniqueValues of a ** sorted array **

function countUniqueValues (arr) {
	if (arr.length === 0) {return 0}
	let left = 0;
	let right = 1;
	let uniqueValueCount = 1;
	while (right < arr.length) {
		if (arr[left] === arr[right]) {
			right++
		} else if (arr[left] !== arr[right]) {
			uniqueValueCount++
			left = right
			right++
		}
	}
	return uniqueValueCount
}

// OR COLT'S SOLUTION

function coltPointers (arr) {
	if (arr.length === 0) return 0
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j]
		}
	}
	return i + 1
}

// console.log(countUniqueValues([1,2,3,4,5]))
// console.log(countUniqueValues([1,2,3,3,3,4,5]))
// console.log(countUniqueValues([1,2,2,3,3,4,5]))
// console.log(countUniqueValues([1,1,1,1,1]))

// console.log(coltPointers([1,2,3,4,5]))
// console.log(coltPointers([1,2,3,3,3,4,5]))
// console.log(coltPointers([1,2,2,3,3,4,5]))
// console.log(coltPointers([1,1,1,1,1]))

// SLIDING WINDOW
// useful for keeping track of a subset of data in a larger set of data

// function maxSubarraySum
// accepts array of integers, and a number/
// calculates the maximum sum of n consecutive elements in the array

// NAIVE SOLUTION
// loop through array, count 4 elements, add them, check if greater than previous high, increase i
function naiveMaxSubarraySum (arr, num) {
	if (num >  arr.length) return null;
	let max = -Infinity;
	for (let i = 0; i < arr.length - num + 1; i++) {
		let temp = 0;
		for (j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
	}
	return max;
}

function fasterMaxSubarraySum (arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i]
	}
	tempSum = maxSum;
	for (let j = num; j < arr.length; j++) {
		tempSum = tempSum - arr[j - num] + arr[j];
		maxSum = Math.max(maxSum, tempSum)
	}
	return maxSum;
}

// console.log(naiveMaxSubarraySum([1,2,3,4,5,6,7,8,9,10], 4));
// console.log(fasterMaxSubarraySum([1,2,3,4,5,6,7,8,9,10], 4));


// DIVIDE AND CONQUER

// quick sort and merge sort
// binary search trees

// take a larger set of data, instead of going from left to right, divide it into smaller groups
// binary search, must be sorted


// given an array of numbers and a value, find index of element that matches value given 

// NAIVE SEARCH O(n)
function naiveSearch (arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1
}

// BINARY SEARCH O(log(n))
function binarySearch (arr, val) {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2)
		let currentElement = arr[middle];
		console.log('ce', currentElement)
		if (arr[middle] < val) {
			min = middle + 1;
		} else if (arr[middle] > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1
}

console.log(binarySearch([1,2,4,5,6,7,8,12,13,15,17,21,23,25,26,32,34,36,37,38,41,42,43,45,46,47], 5))




// DYNAMIC PROGRAMMING







// GREEDY ALGORITHMS






// BACKTRACKING