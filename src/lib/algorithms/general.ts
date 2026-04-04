import { ListNode } from "..";

export const sameType = function (a: any, b: any) {
	return typeof a === typeof b;
};

export const isPrimitive = function (a: any) {
	const type = typeof a;
	return (
		type === "number" ||
		type === "string" ||
		type === "boolean" ||
		type === "bigint" ||
		type === "symbol" ||
		type === "undefined" ||
		a === null
	);
};

export const deepEqual = function (a: any, b: any): boolean {
	if (a === b) return true;
	if (!sameType(a, b)) return false;
	if (isPrimitive(a) || isPrimitive(b)) return false;
	if (a === null || b === null) return false;
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false;
		for (let i = 0; i < a.length; i++) {
			if (!deepEqual(a[i], b[i])) return false;
		}
		return true;
	}
	if (typeof a === "object") {
		const keysA = Object.keys(a);
		const keysB = Object.keys(b);

		if (keysA.length !== keysB.length) return false;

		for (const key of keysA) {
			if (!keysB.includes(key)) return false;
			if (!deepEqual(a[key], b[key])) return false;
		}
		return true;
	}
	return false;
};

export const countOccurrence = <T extends string | number>(
	arr: T[] | string,
): Map<T | string, number> => {
	const map = new Map<T | string, number>();
	for (const item of arr) {
		map.set(item, (map.get(item) ?? 0) + 1);
	}
	return map;
};

export const listSize = function (head: ListNode | null) {
	if (head === null) {
		return 0;
	}

	let currentNode: ListNode | null = head;
	let length = 0;

	while (currentNode) {
		length++;
		currentNode = currentNode.next;
	}

	return length;
};
