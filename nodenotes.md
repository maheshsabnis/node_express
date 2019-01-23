**Programming With Node.js**

- Server-Side JavaScript
  - Node Modules
    - Standard Node.js Object Model with pre-defined set of classes
  - Standard Modules
  - Developer designed Custom Modules
  - External Node.js application modules
    - https://www.npmjs.com

**Node.js Standard Modules**

- http
  - http2
  - http
    - define server
      - createServer(HttpRequestListener)
        - HttpRequestListener --> CallBack(Request,Response)
          - Request
            - uri property, used to read the requested uri for routing
          - Response
            - writeHead() --> write Response header values
              - Content-Type
                - text/html
                - application/json
                - image/bmp or image/jpg, image/png
            - write() --> Data to be written in Http Body
            - end() --> Send response and close the Http Session
    - define client for externally hosted services
      - createClient()
- fs
  - File System Management on Node.js Server for current application
    - readFile() --> Async
    - readFileSync()
    - writeFile() --> Async
    - writeFileSync()
- path
- util

**Module Loading**

- The "require('<MODULE-NAME>')" object
  - The 'MODULE-NAME', must be present in the current scope
    - Custom Module
    - Standard module
    - External Module must be installed
  - The "require()" will cache the module for the current workspace.

**Node.js Custom Modules**

- objects those exports functions/methods across other .js/.ts files
- Mandatory in case of seggrigating logic across multiple maintainable files
- Module file with separate exportable functions/method
  - exports.<FUNCTION-NAME> = function(){........}
- Module exporting whole object with several functions
- module.exports = {
  fx1:function(){.......},
  fx2:function(){........}
- }
- TO use module in other file use
  - var obj = require('<PATH of MODULE File>');

#===========================================================================================================================================================

Node.js with Promises

- Primise Module / library 'q'
  - npm install --save-dev q
- provides following methods
  - The 'defer()'
    - Starts Monitoring Promise Execution
    - The Promise execution uses the "then()" method to caller
    - for subscription
  - The 'resolve()'
    - The Promise successfully received success response
  - The 'reject()'
    - The method that listen to exception thrown by calle.
- http calls / long running processes / Sockets
- http request mechanism to call externally hosted REST Api's
  - http.request({server ot host details and request type}, callback for response) - HttpResponse object - The 'data' event - Data Received or being received - The 'error' event - Error Occured - The 'on()' method to handle event - response.on('data'); - response.on('error')
    ###########################################

# ================

mongod --> Command to connect to Data Folder where all "data pages"
mongod --dbpath <PATH of the DATA Folder>

MONGODB CLI
mongo --> Provide Mongo Shell CLI

MongoDB Connection String
mongodb://localhost/<CollectionName>

MongoDB Operators:

- Preceeds by \$ symbol
- $lt, $gt; \$eq;
- \$set --> set value of specific attribute for a searched record

the "cors()" node package to provide cross-domain-access. Configure cors() in express middleware
