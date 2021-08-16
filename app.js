/** @format */

window.onload = function () {
	main();
};

function main() {
	document.getElementById('submit-btn').addEventListener('click', function (e) {
		const text = document.getElementById('input').value;
		document.getElementById('words').innerText = wordCount(text);
		document.getElementById('spaces').innerText = spaceCount(text);
		document.getElementById('sentences').innerText = sentenceCount(text);
		document.getElementById('letters').innerText = charCount(text);
		document.getElementById('special-char').innerText = specialCount(text);
	});

	document.getElementById('reset-btn').addEventListener('click', function (e) {
		document.getElementById('input').value = '';
		document.getElementById('words').innerText = 0;
		document.getElementById('spaces').innerText = 0;
		document.getElementById('sentences').innerText = 0;
		document.getElementById('letters').innerText = 0;
		document.getElementById('special-char').innerText = 0;
	});
}

// count word
function wordCount(text) {
	return text.split(' ').length;
}

// count sentence
function sentenceCount(text) {
	return text.split(/[\.\?]+/).length - 1;
}

// count characters
function charCount(text) {
	return text.length;
}

// count spaces
function spaceCount(text) {
	return wordCount(text) - 1;
}

// count special characters
function specialCount(text) {
	const special = text.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);
	if (special == null) return 0;
	return special.length;
}
