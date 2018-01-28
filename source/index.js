// What is a closure?

/*
A function bundled with its lexical environment.
*/


/*
Data privacy

Encapsulation.
Message passing. (calling methods)
*/
const safe = secret => ({
  getSecret: () => secret
});


const fun = secret => () => secret;

// curried function
const add2 = a => b => a + b;

// partial applications of add2
const inc = add2(1);
const inc10 = add2(10);
const inc20 = add2(20);

export {safe, fun, add2, inc, inc10, inc20 };
