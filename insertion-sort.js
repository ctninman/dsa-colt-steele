// INSERTION SORT

/* 
	taking an element one at a time, and inserting it where it should go

	works well if you have live data coming in and just need to update one while rest is sorted
*/

function insertionSort (arr) {
	for (let i = 0; i < arr.length; i++) {
		let currentVal = arr[i]
		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}