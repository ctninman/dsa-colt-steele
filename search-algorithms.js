// LINEAR SEARCH
/*  check every single element of the array 
		if an element matches what we are searching for
		we return true/ do some action

		Javascript methods that perform linear search:
			-indexOf
			-includes
			-find
			-findIndex

		-indexOf('tom')
			check each element, return index of that element if found, else return -1
		-includes('tom')
			check each element, return true or false
*/	

function returnIndex (arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) return i;
	}
	return -1
}

// BINARY SEARCH

/*
	eliminate half of the remaining array at any point
	*** must be a sorted array
  *** DIVIDE AND CONQUER
*/

function homemadeBinarySearch (arr, val) {
	let left = 0;
	let right = arr.length - 1;
	let middle = Math.floor(right / 2)
	while (left <= right) {
		if (arr[middle] === val) {
			return middle;
		} else if (arr[middle] < val) {
			left = middle + 1;
		} else if (arr[middle] > val) {
			right = middle - 1;
		}
		middle = (left + right) / 2
	}
	return -1
}