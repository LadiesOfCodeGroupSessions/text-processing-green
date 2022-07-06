const text = require("./index.js");

describe("index", () => {
	it("removes punctuation from the text string", () => {
		const textString = "hello, hello you!";

		expect(text.stripPunctuation(textString)).toBe("hello hello you");
	});

	it("punctuation stripped text is parsed into wordsArray", () => {
		const textString = "hello, hello you!";

		const wordsArray = text.getWords(textString);
		console.log(wordsArray);
		expect(wordsArray).toStrictEqual(["hello", "hello", "you"]);
	});

	// it("evaluates the text and returns a list of the top 10 used words", () => {
	// 	const text = "Hello, hello you";

	// 	expect(topTenList(text)).toBe("1. hello\n 2. you");
	// });

});
