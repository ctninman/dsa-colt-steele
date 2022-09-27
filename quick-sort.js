// QUICK SORT
// Like merge sort, in that it uses the fact that arrays of 0 or 1 are sorted
// works by selecting one element ("Pivot") and finding the index where the pivot should end up in the sorted array
// once the pivot is positioned appropriately, quick sort can be applied to either side of the pivot

// ideally, the closer to the median the element is, the more efficient

// Pivot finder function

function findPivot (arr, startIndex, endIndex) {
	let pivotNumber = arr[startIndex]
	let pivotIndex = 0
	for (let i = 1; i < endIndex; i++) {
		if (arr[i] < pivotNumber) {
			pivotIndex ++
			let temp = arr[i];
			arr[i] = arr[pivotIndex];
			arr[pivotIndex] = temp;
			console.log(arr)
		} 
	}
	if (pivotIndex > 0) {
		let temp = arr[pivotIndex]
		arr[pivotIndex] = pivotNumber
		arr[0] = temp;
		console.log(arr)
	}
}

function pivotColt (arr, start = 0, end = arr.length) {
	let pivot = arr[start];
	let swapIndex = start;
	for ( let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			let temp = arr[i];
			arr[i] = arr [swapIndex] 
			arr[swapIndex] = temp
		}
	}
}

console.log(findPivot([4,8,7,6,2,3,5,1], 0, 8))


function quickSort (arr, left = 0, right = arr.length - 1) {
	if (left < right) {
	 let pivotIndex = pivotColt(arr, left, right);
	 quickSort(arr, left, pivotIndex - 1);
	 quickSort(arr.pivotIndex + 1, right)
	}
}