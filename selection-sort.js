// SELECTION SORT
/*
	similar to bubble sort
	but instead of first placing large values in to sorted position
	it places small values into sorted position

	not used often, but uses fewer swaps than bubble sort, not efficient
*/

function selectionSort(arr) {
	
	for (let i = 0; i < arr.length; i++){

		let lowest = i;

			for (let j = i + 1; j < arr.length; j++) {
				if (arr[j] < arr[lowest]) {
					lowest = j;
				} 
			}
			if (i !== lowest) {
				let temp = arr[i];
				arr[i] = arr[lowest];
				arr[lowest] = temp;
			}
	}

	return arr;
}