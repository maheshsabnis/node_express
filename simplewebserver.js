var http = require("http");
var fs = require("fs");

var data = [
  { id: 101, name: "A" },
  { id: 102, name: "B" },
  { id: 103, name: "C" },
  { id: 104, name: "D" }
];

// 1. create server

var server = http.createServer(function(request, response) {
  fs.readFile("./home.html", function(err, data) {
    if (err) {
      response.writeHead(400, { "Content-Type": "text/html" });
      response.write("Resource Not Found");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data.toString());
      response.end();
    }
  });
  //   response.writeHead(200, { "Content-Type": "text/html" });
  //   response.write("Hello World!!");
  //   response.writeHead(200, { "Content-Type": "application/json" });
  //   response.write(JSON.stringify(data));
});

// 2. listen on port
server.listen(4050);
console.log("server started on port 4050");
