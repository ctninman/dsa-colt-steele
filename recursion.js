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

// console.log(recursiveCountDown(10))

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

// console.log(nonRecursiveFactorial(10))
// console.log(recursiveFactorial(10))


// HELPER METHOD RECURSION

function collectOddValues (arr) {
	let result = [];

	function helper(helperInput) {
		if (helperInput.length <= 0) return;
		if(helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		helper(helperInput.slice(1));
	}
	helper(arr);
	return result;
}

function collectOddsPureRecursion (arr) {
	let newArr = [];

	if (arr.length === 0) return newArr;

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddsPureRecursion(arr.slice(1)));
	return newArr;
}

// console.log(collectOddValues([1,2,3,4,5,5,7,9,8,9]))
// console.log(collectOddsPureRecursion([1,2,3,4,5,5,7,9,8,9]))

// console.log(5 ** 4);

// Recursive function which takes array of numbers and returns the product of them all
function productOfArray (arr) {
	if (arr.length === 0) return 0;
	if (arr.length === 1) return arr[0];
	return arr[arr.length - 1] * productOfArray(arr.slice(0,-1))
}

// Recursive function that add up all numbers from 0 to the passed in number
function recursiveRange (num) {
	if (num === 1) return 1;
	return num + recursiveRange(num -1)
}

// console.log(recursiveRange(10))


// RECURSIVE REVERSE
// accepts a string and reverses it using recursion

function recursiveReverse (str) {
	let strArr = str.split('')
	let reversedString = ''
	function helperReverse (arr, str) {
		if (strArr.length === 0) return str
		reversedString = arr[0] + str
		arr.shift()
		return helperReverse(strArr, reversedString)
	}
	return helperReverse(strArr, reversedString)
}

function coltRecursiveReverse (str) {
	if (str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// console.log(recursiveReverse('ebup'))

// RECURSIVE ISPALINDROME?
// accepts a string and returns true if same forward and backward, else false

function recursiveIsPalindrome (str) {
	let strArr = str.split('')
	let reversedString = ''
	function helperPalindrome (arr, str) {
		if (strArr.length === 0) return str
		reversedString = arr[0] + str
		arr.shift()
		return helperPalindrome(strArr, reversedString)
	}
	helperPalindrome(strArr, reversedString)
	return str === reversedString ? true : false;
}

// console.log(recursiveIsPalindrome('bobebob'))

function coltRecursivePalindrome (str) {
	if (str.length === 1) return true;
	if (str.length === 2) return str[0] === str[1];
	if (str[0] === str.slice(-1)) return coltRecursivePalindrome(str.slice(1,-1));
	return false;
}

function isOdd(arr, num) {
	if (arr.length === 0) return false
	if (num % 2 === 1) return true;
	arr.pop()
	return isOdd(arr, arr[arr.length - 1])
}

function someRecursive (arr, callbackFun) {
	return callbackFun(arr, arr[arr.length - 1])
}

console.log(someRecursive([2,4,6], isOdd))

function coltSomeRecursive (arr, callback) {
	if (arr.length === 0) return false;
	if (callback(arr[0])) return true;
	return coltSomeRecursive(arr.slice(1), callback)
}