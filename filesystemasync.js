var fs = require("fs");

// 1. Write file using async call

fs.writeFile("./myasynfile.txt", "This is async file", function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("file written successfully....");
  fs.readFile("./myasynfile1.txt", function(err, data) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(data.toString());
  });
});

console.log("DONE");
