export const isDigit = function (n: string) {
	const ascii = n.charCodeAt(0);
	return ascii >= 48 && ascii <= 57;
};

export const isLowercase = function (n: string) {
	const ascii = n.charCodeAt(0);
	return ascii >= 97 && ascii <= 122;
};

export const isUppercase = function (n: string) {
	const ascii = n.charCodeAt(0);
	return ascii >= 65 && ascii <= 90;
};

export const isLetter = function (n: string) {
	return isLowercase(n) || isUppercase(n);
};

export const capitalize = function (s: string) {
	if (!s.length || !isLetter(s[0]) || isUppercase(s[0])) return s;
	const chars = Array.from(s);
	chars[0] = chars[0].toUpperCase();
	return chars.join("");
};

export const filterDuplicates = function (
	str: string,
	sorted: boolean = false,
) {
	const chars = new Set(str);
	return sorted
		? Array.from(chars).sort().join("")
		: Array.from(chars).join("");
};

export const unicodeSize = function (str: string) {
	return [...new Intl.Segmenter().segment(str)].length;
};

export const keyBuilder = function (str: string, ascii: number) {
	const count = Array.from({ length: 26 }, () => 0);
	for (let i = 0; i < str.length; i++) {
		count[str.charCodeAt(i) - ascii]++;
	}
	return count.join(".");
};
