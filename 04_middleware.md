### What is a middleware?
The concept of middleware in Express is at the core of the request/response cycle. A middleware is a function that accepts 3 parameters:

* An object containing data about the request
* An object containing data about the response
* a callback (next)

If the callback is invoked without parameters, the next middleware in the stack is executed. If a parameter is passed, it is considered an error and the error middleware is executed. 

To terminate the queue of middleware execution, the response object offers some functions that send the response to the cliente (e.g. json() or send()).

As an example, the following middleware adds a new method to the response object (`sendHtml(filename)`) that allows to easily send HTML file from a static folder only passing the filename.

```
const fs = require("fs");
const path = require("path");

const htmlFolder = path.join(__dirname, "..", "public", "pages");
const indexFolder = path.join(htmlFolder, "..");

module.exports = (req, res, next) => {
  res.sendHtml = (fileName) => {
    const folder = fileName==="index.html" ? indexFolder : htmlFolder;
    const html = fs.readFileSync(path.join(folder, fileName+".html"), "utf-8");
    res.send(html);
  };
  next();
};
```