export const isSorted = function (arr: number[]) {
	if (arr.length <= 1) return true;
	let inc = true;
	let dec = true;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) dec = false;
		if (arr[i] < arr[i - 1]) inc = false;
		if (!inc && !dec) return false;
	}

	return true;
};

export const search = function (arr: number[], v: number) {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let middle = (start + end) >> 1;
		if (arr[middle] == v) return middle;
		else if (arr[middle] > v) end = middle - 1;
		else start = middle + 1;
	}
	return -1;
};

export const filterDuplicates = function <T>(arr: T[]) {
	return Array.from(new Set(arr));
};

export const bubbleSort = function (arr: number[]) {
	if (arr.length === 0) return [];
	const n = arr.length;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (arr[i] > arr[j]) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
	return arr;
};
