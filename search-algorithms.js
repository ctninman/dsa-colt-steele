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