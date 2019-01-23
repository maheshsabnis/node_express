var util = require("./utilitymodule");
var math = require("./wholemodule");

var str = "Node.js";

console.log(`Case with upper for ${str} is ${util.caseUtility(str, "U")}`);
console.log(`Case with lower for ${str} is ${util.caseUtility(str, "L")}`);

console.log(`Reverse of ${str} = ${util.reverse(str)}`);

console.log(`Add = ${math.add(3, 4)}`);
console.log(`Mult = ${math.mult(3, 4)}`);
