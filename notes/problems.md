- Rules:
    - Do not solve version 2 or 3 if you have not solved version 1 first
    - Look at constraints first — they hint at the expected complexity
        - n <= 10^4 → O(n log n) or O(n) is fine
        - n <= 10^3 → O(n^2) is acceptable
        - n <= 20 → O(2^n) or O(n!) is fine (backtracking, permutations)
    - Simplify the problem statement in your own words before coding
    - Identify the pattern before jumping to code
        - sliding window, two pointers, hash map, binary search, etc.
    - Start with brute force mentally, then optimize
    - Check edge cases before submitting
        - empty input, single element, all duplicates, negative numbers
    - After solving, always check other solutions and note:
        - what pattern they used
        - what you missed
        - cleaner ways to express the same logic
    - If stuck for more than 15-20 min, look at hints not the solution
    - Document every solution with your format (problem, constraints, algorithm)
- Codestyle:
    - Avoid multiple returns except guard clauses at the top
    - Always specify `public`, `private`, `protected` in classes
    - Prefer declarative methods (map, filter, reduce) over manual loops where readable
    - Give meaningful names — avoid single letters except `i`, `j` in loops
    - Omit curly braces in single-line if/else blocks
    - Extract repeated logic into helper functions
    - Keep functions focused on one responsibility

- [Score of a String](https://leetcode.com/problems/score-of-a-string/description/):
    - Given an string `s` and goal is calculate the score. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

- Constraints
    - `2 <= s.length <= 100`
    - `s` consists only of lowercase English letters.

- Algorithm:
    - Take each 2 adjacent chars
    - Get their absolute ASCII difference
    - Sum it to the resulting variable

```typescript
const scoreOfString = function (s: string) {
	let score = 0
	for (let i = 0; i < s.length - 1; i++) {
		score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
	}
	return score
}
```

----------------------------------------- Divider -----------------------------------------

- [Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/description/):
    - Given an array of integers `ints` and we asked to concatenate it with itself

- Constraints
    - `n == nums.length`
    - `1 <= n <= 1000`
    - `1 <= nums[i] <= 1000`

- Algorithm:
    - use `.concat()` method

```typescript
const getConcatenation = function (nums: number[]): number[] {
	return nums.concat(nums)
}
```

----------------------------------------- Divider -----------------------------------------

- [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/):
    - Given an integer array `nums`, return `true` if any value appears at least twice, otherwise return `false`

- Constraints:
    - `1 <= nums.length <= 10^5`
    - `-10^9 <= nums[i] <= 10^9`

- Algorithm:
    - Iterate over each element
    - Check if it already exists in a Set
    - If yes, duplicate found — return `true`, otherwise add to Set

```typescript
const containsDuplicate = function (nums: number[]): boolean {
	const seen = new Set()
	for (const n of nums) {
		if (seen.has(n)) return true
		seen.add(n)
	}
	return false
}
```

----------------------------------------- Divider -----------------------------------------

- [Valid Anagram](https://leetcode.com/problems/valid-anagram/description/):
    - Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, otherwise return `false`

- Constraints:
    - `1 <= s.length, t.length <= 5 * 10^4`
    - `s` and `t` consist of lowercase English letters

- Algorithm:
    - Early return if lengths differ
    - Use a frequency array of size 26 (one slot per letter)
    - Increment for each char in `s`, decrement for each char in `t`
    - If all slots are zero, every character balanced out → anagram

```typescript
const isAnagram = function (s: string, t: string) {
	if (s.length !== t.length) return false
	const array = Array(26).fill(0) as number[]
	for (let i = 0; i < s.length; i++) {
		array[s.charCodeAt(i) - 97]++
		array[t.charCodeAt(i) - 97]--
	}
	return array.every((v) => v === 0)
}
```

----------------------------------------- Divider -----------------------------------------

- [Replace Elements with Greatest Element on Right Side](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/):
    - Given an array `arr`, replace every element with the greatest element among the elements to its right, and replace the last element with `-1`

- Constraints:
    - `1 <= arr.length <= 10^4`
    - `1 <= arr[i] <= 10^5`

- Algorithm:
    - Iterate from right to left, tracking the running `max`
    - At each position, store the current `max` as the result
    - Update `max` with the current element before moving left
    - Initialize `max` as `-1` to handle the last element automatically

```typescript
const replaceElements = function (array: number[]) {
	let max = -1

	const n = array.length
	const res = [] as number[]

	for (let i = n - 1; i >= 0; i--) {
		res[i] = max
		max = Math.max(max, array[i])
	}

	return res
}
```

----------------------------------------- Divider -----------------------------------------

- [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/):
    - Given an integer `n`, return the first `n` rows of Pascal's triangle, where each element is the sum of the two elements directly above it

- Constraints:
    - `1 <= n <= 30`

- Algorithm:
    - Seed the result with `[[1]]` and early return if `n == 1`
    - For each new row, start and end with `1`
    - Fill the middle values by summing adjacent elements from the previous row
    - Append the completed row to the result

```typescript
const generate = function (n: number) {
	const array = [[1]] as number[][]
	if (n == 1) return array

	for (let i = 2; i <= n; i++) {
		const current = [1] as number[]
		const previous = array[array.length - 1]

		for (let j = 1; j < previous.length; j++) {
			current[j] = previous[j] + previous[j - 1]
		}

		current.push(1)
		array.push(current)
	}

	return array
}
```

----------------------------------------- Divider -----------------------------------------

- [Can Place Flowers](https://leetcode.com/problems/can-place-flowers/):
    - Given a flowerbed array of `0`s and `1`s and an integer `n`, return `true` if `n` new flowers can be planted without any two flowers being adjacent

- Constraints:
    - `1 <= flowerbed.length <= 2 * 10^4`
    - `flowerbed[i]` is `0` or `1`
    - There are no two adjacent flowers in the initial flowerbed
    - `0 <= n <= flowerbed.length`

- Algorithm:
    - Iterate over each plot, skip if already occupied
    - A plot is plantable if both its left and right neighbors are empty
    - Treat out-of-bounds neighbors as empty
    - Plant greedily by mutating the array to prevent adjacent placements
    - Return `true` if the planted count reaches `n`

```typescript
const canPlaceFlowers = function (ints: number[], n: number) {
	let count = 0

	for (let i = 0; i < ints.length; i++) {
		if (ints[i] == 0) {
			let leftEmpty = i == 0 || ints[i - 1] == 0
			let rightEmpty = i == ints.length - 1 || ints[i + 1] == 0

			if (leftEmpty && rightEmpty) {
				ints[i] = 1
				count++
			}
		}
	}

	return count >= n
}
```

----------------------------------------- Divider -----------------------------------------

- [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/):
    - Given an array `nums` of `n` integers where each element is in range `[1, n]`, return all integers in that range that do not appear in the array

- Constraints:
    - `n == nums.length`
    - `1 <= n <= 10^5`
    - `1 <= nums[i] <= n`

- Algorithm:
    - Use values as indices by mapping `value → index` via `abs(val) - 1`
    - Negate the element at that index to mark it as visited
    - Use `abs()` when computing the index since values may already be negated
    - In the second pass, indices that still hold positive values were never visited → their `index + 1` is a missing number

```typescript
const findDisappearedNumbers = function (ints: number[]) {
	const array = [] as number[]

	for (let i = 0; i < ints.length; i++) {
		const index = Math.abs(ints[i]) - 1
		if (ints[index] > 0) ints[index] *= -1
	}

	for (let i = 0; i < ints.length; i++) {
		if (ints[i] > 0) array.push(i + 1)
	}

	return array
}
```

----------------------------------------- Divider -----------------------------------------

- [Check if Array is Sorted and Rotated](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/):
    - Given an array `nums`, return `true` if it was originally sorted in non-decreasing order and then rotated some number of positions, otherwise return `false`

- Constraints:
    - `1 <= nums.length <= 100`
    - `1 <= nums[i] <= 100`

- Algorithm:
    - A sorted and rotated array can only have at most one "spike" — a point where a value is greater than the next
    - Iterate circularly using `(i + 1) % length` to also compare the last element back to the first
    - Count how many times `ints[i] > ints[i + 1]` occurs
    - If spikes exceed `1`, the array could not have been sorted and rotated

```typescript
const check = function (ints: number[]) {
	if (ints.length === 0) return true
	if (ints.length === 1) return true

	let countSpikes = 0

	for (let i = 0; i < ints.length; i++) {
		if (ints[i] > ints[(i + 1) % ints.length]) {
			countSpikes++
		}
	}

	return countSpikes <= 1
}
```

----------------------------------------- Divider -----------------------------------------

- [Monotonic Array](https://leetcode.com/problems/monotonic-array/description/):
    - Given an array `nums`, return `true` if it is monotonic — either entirely non-increasing or entirely non-decreasing

- Constraints:
    - `1 <= nums.length <= 10^5`
    - `-10^5 <= nums[i] <= 10^5`

- Algorithm:
    - Track two flags: `ascending` and `descending`, both starting as `true`
    - For each adjacent pair, falsify the flag that the current pair violates
    - Early return `false` as soon as both flags are falsified
    - If the loop completes, at least one direction held throughout → monotonic

```typescript
const isMonotonic = function (ints: number[]) {
	let ascending = true
	let descending = true

	for (let i = 1; i < ints.length; i++) {
		const current = ints[i]
		const previous = ints[i - 1]

		ascending = ascending && current >= previous
		descending = descending && current <= previous

		if (!ascending && !descending) return false
	}
	return true
}
```

----------------------------------------- Divider -----------------------------------------

- [Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/description/):
    - Given an integer `rowIndex`, return the `rowIndex`th row of Pascal's triangle (0-indexed)

- Constraints:
    - `0 <= rowIndex <= 33`

- Algorithm:
    - Early return `[1]` for row `0`
    - Seed `base` as `[1, 1]` for row `1` and iterate from there
    - For each new row, start with `[1]` and fill middle values by summing adjacent elements from `base`
    - Push trailing `1` and replace `base` with the new row
    - Return `base` after `rowIndex` iterations

```typescript
const getRow = function (int: number) {
	if (int == 0) return [1]
	let base = [1, 1]

	for (let i = 1; i < int; i++) {
		const current = [1] as number[]

		for (let j = 1; j < base.length; j++) {
			current[j] = base[j] + base[j - 1]
		}

		current.push(1)
		base = current
	}

	return base
}
```

----------------------------------------- Divider -----------------------------------------

- [Largest Good Integer](https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/):
    - Given a string `num` representing a large integer, return the largest "good" integer — a substring of three consecutive identical digits. Return an empty string if none exist

- Constraints:
    - `3 <= num.length <= 1000`
    - `num` consists only of digits `0-9`
    - `num` does not have leading zeros except for `0` itself

- Algorithm (approach 1 — linear scan):
    - Slide a window of 3 over the string
    - Check if all three characters are identical
    - Track the largest digit seen across all valid triplets
    - Return the digit repeated 3 times, or `''` if none found

- Algorithm (approach 2 — search from largest):
    - Hardcode all triplets from `999` down to `000`
    - Return the first one found in the string
    - Naturally returns the largest since we search in descending order

```typescript
const largestGoodInteger = function (str: string) {
	let largest = -1

	for (let i = 0; i < str.length - 2; i++) {
		const sameDigit = str[i] == str[i + 1] && str[i] == str[i + 2]
		if (sameDigit) {
			largest = Math.max(largest, parseInt(str[i]))
		}
	}

	return largest == -1 ? '' : String(largest).repeat(3)
}

const largestGoodInteger2 = function (str: string) {
	const digits = [
		'999',
		'888',
		'777',
		'666',
		'555',
		'444',
		'333',
		'222',
		'111',
		'000'
	] as const

	for (let digit of digits) {
		if (str.includes(digit)) return digit
	}

	return ''
}
```

----------------------------------------- Divider -----------------------------------------

- [Destination City](https://leetcode.com/problems/destination-city/description/):
    - Given a list of paths where `paths[i] = [cityA, cityB]` means there is a direct path from `cityA` to `cityB`, return the destination city — the city with no outgoing path

- Constraints:
    - `1 <= paths.length <= 100`
    - `1 <= cityA.length, cityB.length <= 10`
    - All strings consist of lowercase and uppercase English letters and spaces
    - All city names are unique

- Algorithm:
    - Store all source cities in a map
    - Iterate over all destination cities
    - The first destination that does not exist as a source has no outgoing path → that is the answer

```typescript
const destCity = function (strs: [string, string][]) {
	const map = new Map<string, string>()

	for (let [a, b] of strs) {
		map.set(a, b)
	}

	for (let [_, b] of strs) {
		if (!map.has(b)) return b
	}

	return ''
}
```

----------------------------------------- Divider -----------------------------------------

- [Maximum Product Difference](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/):
    - Given an integer array `nums`, choose four distinct indices such that the product difference between two pairs is maximized. Return `(nums[w] * nums[x]) - (nums[y] * nums[z])` where the first pair is the two largest and the second pair is the two smallest

- Constraints:
    - `4 <= nums.length <= 10^4`
    - `1 <= nums[i] <= 10^4`

- Algorithm:
    - Track the two largest and two smallest values in a single pass
    - For maximums: if the new value exceeds `firstMax`, demote `firstMax` to `secondMax` and promote the new value. If it only exceeds `secondMax`, replace it
    - For minimums: same pattern in reverse — demote and promote when a smaller value is found
    - Return `firstMax * secondMax - firstMin * secondMin`

```typescript
const maxProductDifference = function (ints: number[]) {
	let firstMin = 10_000
	let secondMin = 10_000

	let firstMax = 1
	let secondMax = 1

	for (let i = 0; i < ints.length; i++) {
		const int = ints[i]

		if (int >= firstMax) {
			secondMax = firstMax
			firstMax = int
		} else if (int > secondMax) {
			secondMax = int
		}

		if (int <= firstMin) {
			secondMin = firstMin
			firstMin = int
		} else if (int < secondMin) {
			secondMin = int
		}
	}

	return firstMax * secondMax - firstMin * secondMin
}
```

----------------------------------------- Divider -----------------------------------------

- [Circular Sentence](https://leetcode.com/problems/circular-sentence/description/):
    - Given a string `sentence`, return `true` if it is circular — the last character of each word must match the first character of the next word, and the last character of the last word must match the first character of the first word

- Constraints:
    - `1 <= sentence.length <= 500`
    - `sentence` consists only of uppercase and lowercase English letters and spaces
    - There are no leading, trailing, or consecutive spaces

- Algorithm:
    - Split the sentence into words
    - Iterate circularly using `(i + 1) % length` to wrap the last word back to the first
    - At each step, compare the last char of the current word with the first char of the next
    - Early return `false` on any mismatch

```typescript
const isCircularSentence = function (sentence: string) {
	const words = sentence.split(' ')

	for (let i = 0; i < words.length; i++) {
		const currentWord = words[i]
		const nextWord = words[(i + 1) % words.length]
		if (currentWord[currentWord.length - 1] !== nextWord[0]) return false
	}

	return true
}
```

----------------------------------------- Divider -----------------------------------------

- [Path Crossing](https://leetcode.com/problems/path-crossing/description/):
    - Given a string `path` of cardinal directions `N/S/E/W`, return `true` if the path crosses itself at any point, including the starting position

- Constraints:
    - `1 <= path.length <= 10^4`
    - `path` consists only of `N`, `S`, `E`, `W`

- Algorithm:
    - Track current position as `(x, y)` coordinates, starting at `(0, 0)`
    - Store each visited position as a `"x,y"` string in a Set
    - For each direction, update coordinates accordingly
    - If the new position already exists in the Set → path crossed itself, return `true`
    - Otherwise add the position to the Set and continue

```typescript
const isPathCrossing = function (str: string) {
	let x = 0
	let y = 0

	const set = new Set<string>()
	set.add(`${x},${y}`)

	for (let char of str) {
		if (char == 'N') y++
		else if (char == 'E') x++
		else if (char == 'S') y--
		else x--

		const point = `${x},${y}`
		if (set.has(point)) return true
		set.add(point)
	}

	return false
}
```

----------------------------------------- Divider -----------------------------------------

- [Longest Palindrome](https://leetcode.com/problems/longest-palindrome/description/):
    - Given a string `s` of lowercase and/or uppercase English letters, return the length of the longest palindrome that can be built from those letters

- Constraints:
    - `1 <= s.length <= 2000`
    - `s` consists of lowercase and/or uppercase English letters

- Algorithm:
    - Count frequency of each character using a map
    - Characters with even frequency contribute fully to the palindrome
    - Characters with odd frequency can only contribute their `count - 1` (trimming the leftover)
    - If any odd-frequency character exists, one can be placed in the center → add `1`

```typescript
const longestPalindrome = function (str: string) {
	let longest = 0
	let oddCount = 0
	let oddSum = 0

	const map = new Map<string, number>()
	for (let char of str) {
		map.set(char, (map.get(char) ?? 0) + 1)
	}

	for (let [_, v] of map) {
		if (v % 2 == 0) longest += v
		else {
			oddSum += v
			oddCount += 1
		}
	}

	return oddCount > 0 ? longest + oddSum - oddCount + 1 : longest
}
```

----------------------------------------- Divider -----------------------------------------

- [Permutation in String](https://leetcode.com/problems/permutation-in-string/description/):
    - Given two strings `s` and `t`, return `true` if any permutation of `s` is a substring of `t`

- Constraints:
    - `1 <= s.length, t.length <= 10^4`
    - `s` and `t` consist of lowercase English letters

- Algorithm:
    - Early return if `s` is longer than `t`
    - Use two frequency arrays of size 26 (one per letter) for `s` and the first window of `t`
    - Check if the initial window is an anagram of `s`
    - Slide the window across `t` — decrement the outgoing character, increment the incoming character
    - After each slide, compare frequency arrays — if equal, a permutation exists

```typescript
const isAnagram = function (sCount: number[], tCount: number[]) {
	for (let i = 0; i < 26; i++) {
		if (sCount[i] !== tCount[i]) return false
	}
	return true
}

const checkInclusion = function (s: string, t: string) {
	if (s.length > t.length) return false

	const sCount = Array(26).fill(0) as number[]
	const tCount = Array(26).fill(0) as number[]

	for (let i = 0; i < s.length; i++) {
		sCount[s[i].charCodeAt(0) - 97]++
		tCount[t[i].charCodeAt(0) - 97]++
	}

	if (isAnagram(sCount, tCount)) return true

	for (let i = s.length; i < t.length; i++) {
		tCount[t[i - s.length].charCodeAt(0) - 97]--
		tCount[t[i].charCodeAt(0) - 97]++

		if (isAnagram(sCount, tCount)) return true
	}

	return false
}
```

```typescript
const checkInclusion = function (s: string, t: string) {
	if (s.length > t.length) return false

	const sCount = Array(26).fill(0) as number[]
	const tCount = Array(26).fill(0) as number[]

	let matches = 0

	for (let i = 0; i < s.length; i++) {
		sCount[s.charCodeAt(i) - 97]++
		tCount[t.charCodeAt(i) - 97]++
	}

	for (let i = 0; i < 26; i++) {
		if (sCount[i] == tCount[i]) matches++
	}

	for (let i = s.length; i < t.length; i++) {
		if (matches == 26) return true

		const left = t[i - s.length].charCodeAt(0) - 97
		const right = t[i].charCodeAt(0) - 97

		tCount[right]++
		if (tCount[right] === sCount[right]) matches++
		else if (tCount[right] - 1 === sCount[right]) matches--

		tCount[left]--
		if (tCount[left] === sCount[left]) matches++
		else if (tCount[left] + 1 === sCount[left]) matches--
	}

	return matches == 26
}
```

----------------------------------------- Divider -----------------------------------------

- [Single Number](https://leetcode.com/problems/single-number/)
    - Given an array of integers `ints` that contains pair of duplicate elements and only one element appears only once. We need to find that single Element

- Constraints:
    - `1 <= nums.length <= 3 * 10^4`
    - `-3 * 10^4 <= nums[i] <= 3 * 10^4`
    - Each element in the array appears twice except for one element which appears only once.

- Key Insight:
    - XOR has two properties that make this problem trivial:
        - `n ^ n = 0` — any number XORed with itself cancels out
        - `n ^ 0 = n` — any number XORed with zero stays the same
    - Since all duplicates cancel out to `0`, only the single element remains

- Algorithm:
    - Start with `xor = 0`
    - XOR every element into `xor` — pairs will cancel each other out
    - Whatever is left in `xor` is the single element

```typescript
const singleNumber = function (ints: number[]) {
	let xor = 0
	for (let int of ints) {
		xor ^= int
	}
	return xor
}
```

----------------------------------------- Divider -----------------------------------------

- [Permutations](https://leetcode.com/problems/permutations/)
    - Given an integer array `ints` and we asked to return all possible permutations, we can return them in any order

- Constraints:
    - `1 <= nums.length <= 6`
    - `-10 <= nums[i] <= 10`
    - All the integers of nums are unique.

- Algorithm:
    - Use backtracking — fix one element at position `i` and recurse on the rest
    - At each position `i`, try placing every element from `i` to `n-1` there via swap
    - Once `i` reaches the end of the array, a full permutation is formed — store a copy
    - After recursing, swap back to restore the original order (backtrack)

- Complexity:
    - T: `O(n! * n)`
    - S: `O(n!)`

- Full Explanation:
    - https://www.youtube.com/watch?v=4FdPoW4Qzb4

```typescript
const permute = function (ints: number[]) {
	const permutations = [] as number[][]

	const backtrack = function (
		i: number,
		ints: number[],
		permutations: number[][]
	) {
		if (i >= ints.length) {
			permutations.push(ints.slice())
			return
		}

		for (let j = i; j < ints.length; j++) {
			;[ints[i], ints[j]] = [ints[j], ints[i]]
			backtrack(i + 1, ints, permutations)
			;[ints[i], ints[j]] = [ints[j], ints[i]]
		}
	}

	backtrack(0, ints, permutations)

	return permutations
}
```

----------------------------------------- Divider -----------------------------------------

- [Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/description/)
    - Given an integer `int`, return its corresponding column title as it appears in an Excel sheet.

- Constraints:
    - `1 <= columnNumber <= 2^31 - 1`

- Examples:
    - Input: columnNumber = 1
    - Output: "A"

    - Input: columnNumber = 28
    - Output: "AB"

- Algorithm:
    - While int > 0:
        - Decrement int by 1 to shift from 1-indexed (A=1) to 0-indexed (A=0)
        - Get the current letter: remainder = int % 26, then map to char ('A' + remainder)
        - Prepend char to title (we extract least significant letter first)
        - Drop the last letter: int = floor(int / 26)
    - Return title

```typescript
export const convertToTitle = function (int: number) {
	let title = ''

	while (int > 0) {
		const char = String.fromCharCode(65 + (--int % 26))
		title = char.concat(title)
		int = Math.floor(int / 26)
	}

	return title
}
```

### Алгоритм

#### Шаги

1. Вытащи последнюю букву:
    - `int--` — сдвиг чтобы `% 26` работал корректно
    - `remainder = int % 26` — получаем индекс буквы (0–25)
    - `char = 'A' + remainder` — маппинг: 0→'A', 25→'Z'

2. Добавь букву в **начало** строки

3. Отрежь последний разряд:
    - `int = floor(int / 26)`

4. Повторяй пока `int > 0`

#### Аналогия с base-10

Если бы ты переводил `123` в строку по цифрам:

```
123 % 10 = 3  →  '3' спереди  →  int = 12
12  % 10 = 2  →  '2' спереди  →  int = 1
1   % 10 = 1  →  '1' спереди  →  int = 0
готово → "123"
```

Здесь то же самое — `% 10` заменили на `% 26`, цифры заменили на буквы,
и добавили `int--` перед каждым шагом чтобы обойти отсутствие нуля.

#### Почему int-- на каждой итерации, а не один раз?

После `floor(int / 26)` рождается новое число — и оно снова 1-indexed.
Его снова нужно сдвигать.

```
итерация 1:
  int = 28  ← пришло снаружи, 1-indexed
  int--  →  27
  27 % 26 = 1  →  'B'
  int = floor(27 / 26) = 1  ← новое число, тоже 1-indexed!

итерация 2:
  int = 1  ← это не 0, это буква 'A' (1-indexed)
  int--  →  0
  0 % 26 = 0  →  'A'  ✓
```

#### base-10 vs base-26

|                  | base-10            | base-26                            |
| ---------------- | ------------------ | ---------------------------------- |
| остаток          | `% 10` → цифра 0–9 | `% 26` → буква 0–25                |
| сдвиг            | не нужен           | `int--` → приводим к 0-indexed     |
| маппинг          | `'0' + remainder`  | `65 + remainder` → заглавная буква |
| следующий разряд | `floor(n / 10)`    | `floor(n / 26)`                    |

----------------------------------------- Divider -----------------------------------------

- [Majority Element](https://leetcode.com/problems/majority-element/description/)
    - Дан массив целых чисел. В нём гарантированно есть элемент который встречается более `n/2` раз. Найти его.

- Constraints:
    - `n == nums.length`
    - `1 <= n <= 5 * 10^4`
    - `-10^9 <= nums[i] <= 10^9`
    - Majority element всегда существует (гарантировано условием)

- Algorithm (Boyer-Moore Voting):
    - Идея — majority element встречается больше n/2 раз, значит он "переживёт" все остальные элементы
    - Держим кандидата и счётчик. Если текущий элемент совпадает с кандидатом — плюсуем, иначе минусуем
    - Когда счётчик доходит до 0 — кандидат "уничтожен" другими элементами, берём следующий элемент как нового кандидата
    - В конце остаётся только majority element — его невозможно уничтожить так как он в большинстве

- Пример с `[2, 2, 1, 1, 2]`:

```
    i=0: candidate=2, count=1
    i=1: int=2 == candidate  →  count=2
    i=2: int=1 != candidate  →  count=1
    i=3: int=1 != candidate  →  count=0  →  candidate=1, count=1
    i=4: int=2 != candidate  →  count=0  →  candidate=2, count=1
    ответ → 2 ✓
```

```typescript
const majorityElement = function (ints: number[]) {
	const n = ints.length

	let candidate = ints[0]
	let count = 1

	for (let i = 1; i < n; i++) {
		const int = ints[i]

		if (int == candidate) count++
		else count--

		if (count == 0) {
			candidate = int // кандидат уничтожен, берём следующий
			count = 1
		}
	}

	return candidate // majority element не может быть уничтожен
}
```
