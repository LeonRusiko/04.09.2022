function getNumbers(num) {
	let res = []
	let base = 10
	let currNum = Math.abs(num)
	do {
		let baseShiftedNum = Math.floor(currNum / base)
		let diff = currNum - baseShiftedNum * base
		res.unshift(diff)
		currNum = baseShiftedNum
	} while (currNum > 0)
	return res
}
