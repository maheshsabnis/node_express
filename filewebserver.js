var http = require("http");
var fs = require("fs");
var resources = [
  { id: "/home", page: "./home.html" },
  { id: "/about", page: "./about.html" }
];
// 1. Create a server object with listener
var server = http.createServer(function(request, response) {
  // receive the value of the url
  var id = request.url;
  console.log(id);
  var page;
  for (var i = 0; i < resources.length; i++) {
    if (resources[i].id === request.url) {
      page = resources[i].page;
      console.log(page);
      break;
    }
  }

  fs.readFile(page.toString(), function(err, data) {
    if (err) {
      response.writeHead(401, { "Content-Type": "text/html" });
      response.write("Rource You are looking for is not available");
      response.end();
    }
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data.toString());
    response.end();
  });
  // 2. parse the request and read url
  //   if (request.url === "/home") {
  //     // 2a. read for home page
  //     fs.readFile("./home.html", function(err, data) {
  //       if (err) {
  //         response.writeHead(401, { "Content-Type": "text/html" });
  //         response.write("Rource You are looking for is not available");
  //         response.end();
  //       }
  //       response.writeHead(200, { "Content-Type": "text/html" });
  //       response.write(data);
  //       response.end();
  //     });
  //   } else {
  //     if (request.url === "/about") {
  //       // 2b. read for about page
  //       fs.readFile("./about.html", function(err, data) {
  //         if (err) {
  //           response.writeHead(401, { "Content-Type": "text/html" });
  //           response.write("Rource You are looking for is not available");
  //           response.end();
  //         }
  //         response.writeHead(200, { "Content-Type": "text/html" });
  //         response.write(data);
  //         response.end();
  //       });
  //     }
  //  }
});

server.listen(4060);
console.log("Server Started on port 4060");
