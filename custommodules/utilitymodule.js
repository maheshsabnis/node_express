exports.caseUtility = function(str, choice) {
  if (choice === "U") {
    return str.toUpperCase();
  }
  if (choice === "L") {
    return str.toLowerCase();
  }
  return str;
};

exports.reverse = function(str) {
  var res = "";
  for (var i = str.length; i >= 0; i--) {
    res += str[i];
  }
  return res;
};
