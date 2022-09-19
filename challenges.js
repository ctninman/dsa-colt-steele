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

console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(1,2,3,1))
console.log(areThereDuplicates(1,2,3,'w','2'))
console.log(areThereDuplicates(1))