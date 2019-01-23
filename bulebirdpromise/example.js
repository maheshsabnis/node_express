var bluebird = require("bluebird");
var calhttp = require("./../promiseapp/getexternaldata");
var options = {
  host: "apiapptrainingservice.azurewebsites.net",
  path: "/api/Products",
  method: "GET"
};

var promise = bluebird.promisifyAll(calhttp.getData(options));

promise
  .then(function(resp) {
    console.log(JSON.stringify(resp));
  })
  .catch(function(err) {
    console.log(err);
  });
