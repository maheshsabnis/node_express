var caller = require("./getexternaldata");

// 1. define server options
var options = {
  host: "apiapptrainingservice.azurewebsites.net",
  path: "/api/Products",
  method: "GET"
};

// 2. call the method from module and subscribe to promise
caller
  .getData(options)
  .then(function(receivedData) {
    console.log(JSON.stringify(receivedData));
  })

  .catch(function(err) {
    console.log(err);
  });
for (var i = 0; i < 20; i++) {
  console.log("Done");
}
