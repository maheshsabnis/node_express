// 1. Create a file and add data in it

// 2. Load the fs module
var fs = require("fs");

// 3. Write File with Sync call

fs.writeFileSync("./myfile.txt", "I am the Text File");
console.log("File is Written");

// 4. Read file with Sync call
var data = fs.readFileSync("./myfile.txt");
console.log(data.toString());
