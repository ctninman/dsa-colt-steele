// ELEMENTARY SORTING ALGORITHMS
/*
	What is sorting?

		-process of rearranging the items in a collection 
		 so that items are in some sort of order

		-ex:  numbers small to large
					names alphabetically
					movies based on release year
					movies based on revenue

	Why learn sorting?

		- incredibly common task
		- many different ways to sort, different techniques have advantages/disadvantages
		- good challenge that comes up in interviews

	3 ELEMENTARY SORTING ALGORITHMS
		simpler, but not as efficient
		BUBBLE SORT, SELECTION SORT, INSERTION SORT
*/

/*
	JavaScript's built-in sort method

		- if function returns a negative number, a comes before b
		- if function returns a positive number, b comes before a
		- if function returns 0, a and b are the same as far as the sort is concerned

*/

function numberCompare(num1, num2) {
	return num1 - num2;
}

[6,4,15,10].sort(numberCompare);
// [4,6,10,15]

function numberCompareReverse(num1, num2) {
	return num2 - num1;
}

[6,4,15,10].sort(numberCompareReverse);
// [15,10,6,4]

function compareByLength (str1,str2) {
	return str1.length - str2.length
}

['happy', 'baby', 'rubber', 'buckles'].sort(compareByLength)
// ['baby', 'happy', 'rubber', 'buckles']

function compareByLengthReverse (str1,str2) {
	return str2.length - str1.length
}

['happy', 'baby', 'rubber', 'buckles'].sort(compareByLength)
// ['buckles','rubber', 'happy', 'baby']


// BUBBLE SORT
/*
	largest values bubble to the top
	start from left, 
	compare two elements
		if element on left is greater, swap the elements



*/

function swap (arr, idx1, idx2) {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}

function bubbleSort (arr) {
	for (let i = arr.length; i > 0; i--) {
		for (j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + i]) {
				// SWAP!
				let temp = arr[j];
				arr[j] = arr [j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

function bubbleSortOptimized (arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + i]) {
				// SWAP!
				let temp = arr[j];
				arr[j] = arr [j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		// Break out of loop if an iteration of i with no swaps occurs
		if (noSwaps) break;
	}
	return arr;
}