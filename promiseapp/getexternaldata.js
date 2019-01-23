// 1. load q
var q = require("q");
// 2. load http to make external calls
var http = require("http");

// 3. define module
module.exports = {
  // 3a. function to make http calls using 'http' object
  // this function must accept server information
  // server info will be a.) host, b.) path, c.) method
  // host --> host address IP/NAME
  // path --> uri path aka resource name or REST-API address
  // method --> GET/POST/PUT/DELETE
  // headers --> {AUTHORIZATION}
  // this function will return 'promise'
  // if the method receive success the defer will be
  // resolve else rejected
  getData: function(options) {
    console.log(JSON.stringify(options));
    // 4. create deferrer object using q
    var defer = q.defer();
    var request; // represent response
    var responseData; // represent response data
    if (!options) {
      defer.reject("Server information is not available");
    } else {
      request = http.request(options, function(response) {
        // 4a. start receiving data
        response.on("data", function(data) {
          responseData += data;
          console.log("data" + JSON.stringify(responseData));
        });
        // 4b. once data processing is done end the call
        response.on("end", function() {
          try {
            // if end successfully the resolve
            var responsedData = JSON.parse(responseData);
            defer.resolve(responsedData);
          } catch (err) {
            // else reject and return error
            defer.reject(`Some Error Occured ${err}`);
          }
        });
      });
    }
    // 5. end the response
    request.end();

    // 6 return the promise
    console.log(defer.promise);
    return defer.promise;
  }
};
