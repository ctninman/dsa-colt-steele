// MERGE SORT

/*
	O(n log n)

	combination of splitting, sorting, and merging
	takes advantage that arrays with length 0 or 1 are already sorted
	works by decomposing an array into smaller arrays of 0 or 1 elements, then building
		up a newly sorted array

*/

/*

	Writing a function to merge to sorted arrays

*/

function merge (arr1, arr2) {
	let results = [];
	let arr1index = 0;
	let arr2index = 0;
	while (arr1index < arr1.length && arr2index < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
		while (arr1index < arr1.length) {
			results.push(arr1[i]);
			i++
		}
		while (arr2index < arr2.length) {
			results.push(arr2[j]);
			j++;
		}
	}
	return results;
}

function mergeSort (arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0,mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right)
}