### Number Formats in TS

```typescript
const binary15 = 0b1111 // binary - двоичное
const octal15 = 0o17 // octal - восмиричное
const decimal15 = 15 // decimal - десятичное (префикс не нужен)
const hex15 = 0xf // hexadecimal - шестнадцатиричное
```

----------------------------------------- Divider -----------------------------------------

### Recursion vs Stack

- Factorial

```typescript
const factorialRecursion = function (int: number): number {
	if (int == 1) return 1
	return int * factorialRecursion(int - 1)
}

const factorialIteration = function (int: number) {
	let factorial = 1
	for (let i = 1; i <= int; i++) {
		factorial *= i
	}
	return factorial
}
```

- Fibonacci: 0, 1, 1, 2, 3, 5, 8

```typescript
const fibonacciRecursion = function (int: number): number {
	if (int == 1) return 0
	if (int == 2) return 1

	return fibonacciRecursion(int - 1) + fibonacciRecursion(int - 2)
}

const fibonacciIteration = function (int: number) {
	if (int == 1) return 0
	if (int == 2) return 1

	let a = 0
	let b = 1

	for (let i = 3; i <= int; i++) {
		let temp = a + b
		a = b
		b = temp
	}

	return b
}
```

- Collect node values in a tree

```typescript
const nodeCollectRecursion = function (root: TreeNode | null): number[] {
	if (root == null) return []

	return [
		root.value,
		...nodeCollectRecursion(root.left),
		...nodeCollectRecursion(root.right)
	]
}

const nodeCollectIteration = function (root: TreeNode | null) {
	if (root == null) return []

	const values = [] as number[]
	const stack = [root]

	while (stack.length > 0) {
		const node = stack.pop()
		if (node == undefined) continue
		values.push(node.value)
		if (node.left) stack.push(node.left)
		if (node.right) stack.push(node.right)
	}

	return values
}
```

- Quick sort

```typescript
export const quickSortRecursion = function (ints: number[]): number[] {
	if (ints.length <= 1) return ints

	const pivotIndex = Math.floor(Math.random() * ints.length)
	const pivot = ints[pivotIndex]

	const less = [] as number[]
	const equal = [] as number[]
	const great = [] as number[]

	for (const int of ints) {
		if (int < pivot) less.push(int)
		else if (int === pivot) equal.push(int)
		else great.push(int)
	}

	return [...quickSortRecursion(less), ...equal, ...quickSortRecursion(great)]
}
```

```typescript
export const quickSortIteration = function (ints: number[]) {
	if (ints.length <= 1) return ints

	const swap = (i: number, j: number) => {
		;[ints[i], ints[j]] = [ints[j], ints[i]]
	}

	const stack: number[] = []
	stack.push(0)
	stack.push(ints.length - 1)

	while (stack.length > 0) {
		const right = stack.pop()!
		const left = stack.pop()!

		if (left >= right) continue

		const randomIndex =
			left + Math.floor(Math.random() * (right - left + 1))
		swap(randomIndex, right)
		const pivot = ints[right]

		let less = left
		let great = right
		let i = left

		while (i <= great) {
			if (ints[i] < pivot) {
				swap(less, i)
				less++
				i++
			} else if (ints[i] > pivot) {
				swap(great, i)
				great--
			} else {
				i++
			}
		}

		stack.push(left)
		stack.push(less - 1)

		stack.push(great + 1)
		stack.push(right)
	}

	return ints
}
```

----------------------------------------- Divider -----------------------------------------

- Merge sort

```typescript
const merge = function (left: number[], right: number[]) {
	const array = [] as number[]

	let l = 0
	let r = 0

	while (l < left.length || r < right.length) {
		const leftItem = left[l] ?? Infinity
		const rightItem = right[r] ?? Infinity

		if (leftItem < rightItem) {
			array.push(leftItem)
			l++
		} else {
			array.push(rightItem)
			r++
		}
	}

	return array
}

const mergeSort = function (ints: number[]): number[] {
	if (ints.length <= 1) return ints

	const middle = ints.length >> 1
	const left = ints.slice(0, middle)
	const right = ints.slice(middle)

	return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([5, 4, 3, 2, 1, 1]))
```
