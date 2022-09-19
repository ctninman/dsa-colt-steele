function sameFrequency (num1, num2) {
	let numString1 = num1.toString()
	let numString2 = num2.toString()
	if (numString1.length !== numString2.length) return false;
	let digitFreqObj = {};
	for (let i = 0; i < numString1.length; i++) {
		let digitInNum1 = numString1[i]
		digitFreqObj[digitInNum1] ? digitFreqObj[digitInNum1] += 1 : digitFreqObj[digitInNum1] = 1;
		console.log(digitFreqObj)
	}

	for (let j = 0; j < numString2.length; j++) {
		let digitInString2 = numString2[j];
		if (!digitFreqObj[digitInString2]) {
			return false
		} else {
			digitFreqObj[digitInString2] -= 1
		}
	}
	return true
}

// console.log(sameFrequency(321144321221,3221))
// console.log(sameFrequency(1223,3221))
// console.log(sameFrequency(1,3221))
// console.log(sameFrequency(32221,3221))
// console.log(sameFrequency(9876,3221))
// console.log(sameFrequency(1233,3221))
// console.log(sameFrequency(1223,3211))

function areThereDuplicates() {
	// console.log('begin');
	// if (arr.length <= 1) return false;
	let collection = {}
	for (let val in arguments) {
		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
	}
	for (let key in collection) {
		if (collection[key] > 1) return true
	}
	return false
}

// console.log(areThereDuplicates(1,2,3))
// console.log(areThereDuplicates(1,2,3,1))
// console.log(areThereDuplicates(1,2,3,'w','2'))
// console.log(areThereDuplicates(1))


// MULTIPLE POINTERS AVERAGE PAIR CHALLENGE
// given sorted array and target average, determine if there is a pair of numbers who have average of target
// return true or false

function averagePair (arr, targetAvg) {
	let firstIndex = 0;
	let lastIndex = arr.length - 1;
	let middle = Math.floor(arr.length / 2)
		if (targetAvg > arr[middle]) {
			console.log('1');
			firstIndex = middle + 1;
		} else if (targetAvg < arr[middle]) {
			console.log('2');
			lastIndex = middle - 1;
		}
		
	if ((arr[middle] + arr[middle + 1]) / 2 === targetAvg){
		console.log('3');
		return true
	} else if ((arr[middle] + arr[middle - 1]) / 2 === targetAvg){
		console.log('4');
		return true
	}
	return false
}

console.log(averagePair([1,2,4,5,6,7,8,9,11,12,13,14], 12.5));

function yoAverage (arr, targetAvg) {
	let start = 0;
	let end = arr.length - 1;
	let avg = (arr[start] + arr[end]) / 2
	while (start < end) {
		avg = (arr[start] + arr[end]) / 2
		console.log('avg = ', avg, 'targ = ', targetAvg);
		console.log(arr[start], arr[end])
		if (avg === targetAvg) {
			return true;
		} else if (avg < targetAvg) {
			start++;
		} else {
			end--;
		}
	}
	return false;
}

console.log(yoAverage([1,2,4,5,6], 4.5));