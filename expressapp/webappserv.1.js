// 1. load express
var express = require("express");
// 1a. load the 'path' module. This will be used by "static" middleware
// of express. The 'path' is standard node module
var path = require("path");

// 1b. import the data-module
var dataModel = require("./datamodel");
// 1c. load the body-parser
var bodyParser = require("body-parser");

// 1d. loading mongoose driver
var mongoose = require("mongoose");
// 1e. set the global promise to manage all async calls
// made by application using mongoose driver
mongoose.Promise = global.Promise;

// 2. define an instance of express
var instance = express();

// 3. configure all middlewares, call "use()" method on express instance
// 3a. static files
instance.use(
  express.static(path.join(__dirname, "./../node_modules/jquery/dist/"))
);

// 3b. define express-router, for seggrigating
// urls for html page web requests and rest api requests
var router = express.Router();
// 3c. add the router object in the express middleware
instance.use(router);
// 3d. configure the body-parser middleware
// 3d.1 use urlencoded as false to read data from http url
// as querystring,formmodel etc.
instance.use(bodyParser.urlencoded({ extended: false }));
// 3d.2 use the json() parser for body-Parser
instance.use(bodyParser.json());

// 4. create web request handlers
// 4a. This will return the home.html from views folder
router.get("/home", function(req, resp) {
  resp.sendFile("home.html", {
    root: path.join(__dirname, "./../views")
  });
});

// 5. Model-Schema-Mapping with collection on Mongo DB and
// establishing collection with it.'
mongoose.connect(
  "mongodb://localhost/ProductsAppDb",
  { useNewUrlParser: true }
);

// 5a. get the connection object
// if dbConnect is not undefined then the connection is successful
var dbConnect = mongoose.connection;
if (!dbConnect) {
  console.log("Sorry Connection is not established");
  return;
}
// 5b. define schema (recommended to have same
// attributes as per the collection)
var productsSchema = mongoose.Schema({
  ProductId: Number,
  ProductName: String,
  CategoryName: String,
  Manufacturer: String,
  Price: Number
});
// 5c. map the schema with the collection
//                                name        schema          collection
var productModel = mongoose.model("Products", productsSchema, "Products");
// 6. create rest api request handlers
instance.get("/api/products", function(request, response) {
  // 5a. read headers for AUTHORIZATION values
  var authValues = request.headers.authorization;
  // 5b. Process Values
  var credentials = authValues.split(" ")[1]; // take only username:pwd
  var data = credentials.split(":");
  var username = data[0];
  var password = data[1];
  // 5c. May access UserModel from Database(?)
  if (username == "mahesh" && password == "mahesh") {
    response.send(JSON.stringify(dataModel.getData()));
  } else {
    response.statusCode = 401;
    response.send({
      status: response.statusCode,
      message: "UnAuthorized Access"
    });
  }
});
instance.post("/api/products", function(request, response) {
  var data = request.body; // read the request body
  console.log(data);
  var responseData = dataModel.addData(data);
  response.send(JSON.stringify(responseData));
});

instance.get("/api/products/:id", function(request, response) {
  // use "params" property of request object to read
  // url parameter
  var id = request.params.id;
  console.log("Received id =" + id);
  var record = dataModel.getData().filter(function(v, idx) {
    return v.id == id;
  });
  response.send(JSON.stringify(record));
});

instance.put("/api/products/:id", function(request, response) {
  // read the request id parameter
  // read the body
  // update matched record from array
  // respond array
});

instance.delete("/api/products/:id", function(request, response) {
  // read the request id parameter
  // delete matched record array
  // respond array
});

// 6. start listening
instance.listen(4070, function() {
  console.log("started listening on port 4070");
});
