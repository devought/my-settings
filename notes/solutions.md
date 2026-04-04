### Code Solutions of Leetcode / Codeforces / CSAcademy

---

#### [Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)

```typescript
export const isAnagram = (s: string, t: string): boolean => {
	const lenS = s.length;
	const lenT = t.length;

	if (lenS != lenT) return false;

	const frequencyCount = Array.from({ length: 26 }, () => 0);

	for (let i = 0; i < lenS; i++) {
		frequencyCount[s.charCodeAt(i) - 97]++;
		frequencyCount[t.charCodeAt(i) - 97]--;
	}

	return frequencyCount.every((value) => value === 0);
};
```

---

#### [Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)

```typescript
export const lengthOfLastWord = (s: string): number => {
	let length = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		const char = s[i];
		if (char == " " && length > 0) break;
		else if (char == " ") continue;
		else length++;
	}

	return length;
};
```

---

#### [String Matching in an Array](https://leetcode.com/problems/string-matching-in-an-array/description/)

```typescript
export const stringMatching = (strs: string[]): string[] => {
	// 1. Sort strings by their length
	strs.sort((a, b) => a.length - b.length);

	// 2. Collect all strings that could be substring of other strings from incoming array
	const matches = [] as string[];

	for (let i = 0; i < strs.length; i++) {
		// 3. Flag to mark current string as match to push it into result array
		let includes = false;
		for (let j = i + 1; j < strs.length; j++) {
			if (strs[j].includes(strs[i])) {
				includes = true;
				break;
			}
		}
		if (includes) {
			matches.push(strs[i]);
		}
	}

	return matches;
};
```

---

#### [Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

```typescript
import { keyBuilder } from "./lib";

export const groupAnagrams = (strs: string[]): string[][] => {
	// Handle edge cases
	if (strs.length === 0) return [];
	if (strs.length === 1) return [strs];

	const groups = new Map<string, string[]>();

	for (const str of strs) {
		// Use keyBuilder utility to get frequency histogram of current string
		const key = keyBuilder(str, 97);

		let group = groups.get(key);

		if (!group) {
			group = [];
			groups.set(key, group);
		}

		group.push(str);
	}

	return Array.from(groups.values());
};
```

---

#### [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/)

```typescript
export const generate = (n: number): number[][] => {
	if (n === 0) return [];
	if (n === 1) return [[1]];

	const rows: number[][] = [[1]];

	for (let i = 1; i < n; i++) {
		const last = rows[rows.length - 1];
		const current: number[] = [];

		current.push(1);

		for (let j = 1; j < last.length; j++) {
			current.push(last[j] + last[j - 1]);
		}

		current.push(1);
		rows.push(current);
	}

	return rows;
};
```

---

#### [Can Place Flowers](https://leetcode.com/problems/can-place-flowers/description/)

```typescript
export const canPlaceFlowers = (nums: number[], n: number): boolean => {
	const size = nums.length;

	// We're checking if n is bigger than all plantable positions and all elements are 0
	if (n > Math.ceil(size / 2)) return false;

	// Count how many flowers you can plant
	let count = 0;

	for (let i = 0; i < size; i++) {
		if (nums[i] !== 0) continue;

		const leftEmpty = i === 0 || nums[i - 1] === 0;
		const rightEmpty = i === size - 1 || nums[i + 1] === 0;

		if (leftEmpty && rightEmpty) {
			nums[i] = 1;
			count++;

			if (count >= n) return true;
		}
	}

	return false;
};
```
