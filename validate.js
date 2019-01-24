var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/ProductsAppDb",
  { useNewUrlParser: true }
);

var db = mongoose.connection;
if (!db) {
  console.log("connection error");
  return;
}
var userSchema = mongoose.Schema({ UserName: String, Password: String });
var userModel = mongoose.model("Users", userSchema, "Users");
exports.checkUser = function(user) {
  console.log("In Auth " + JSON.stringify(user));
  return userModel.find({
    $and: [{ UserName: user.username }, { Password: user.password }]
  });
  // .exec(function(err, res) {
  //   if (err) {
  //     return false;
  //   }
  //   return true;
  // });
};
