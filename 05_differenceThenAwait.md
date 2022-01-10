### What's the difference between _then_ and _await_?

then and await are very similar, as the objective of both is to fulfill promises. 

The main difference is that _async_ blocks the code execution until the promise is resolved, while with _next_ the code flow continues and, when the promise is resolved, a callback is invoked.  

Another difference resides in the error management: while _then_, with its callback-style syntax, invokes the `catch()` callback on an error, a fail with _await_ can be catched by a catch statement.

Finally, the syntax of _await_ makes it simpler to handle general cases for the promises, like executing a promise in a loop. 