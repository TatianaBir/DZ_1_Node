var fs = require("fs");

fs.appendFile("text.txt", "This is appended text", function (err) {
	if (err) throw err;
	console.log("Saved!");
});