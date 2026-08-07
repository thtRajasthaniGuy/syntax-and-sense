// in js function are object. so call ,apply and bind are part of function prototype.

function hello() {}
hello.myName = "deepa";
console.log(hello.myName);

const user = {
  name: "govind",
  greet() {
    console.log(this.name);
  },
};

const greet = user.greet;
greet.call(user); // so this convert like this in internal function.prototype.call(greet,user) here this value is greet and argument are user
greet.call({ name: "mayank" });

function printInfo(age, palace) {
  console.log("name:", this.name);
  (console.log("age:", age), console.log("palace", palace));
}
printInfo.call(user, 30.5, "jaipur");

//Function.prototype.call = function (thisArg, ...args) {
// this      -> function to invoke
// thisArg   -> what 'this' should be inside that function
// args      -> arguments for that function
//};

printInfo.apply(user, ["Rajasthan", 31]);

// call and apply method does the same things. before es6 we if need pass more than one arguments we have to pass like args1,args2 so on. thats the issue  in apply method we can pass the arguments as array[].
// but in es6 js introduce spread operator so we can pass like this ...[items list] in the call as well

//ex:
let amounts = [100, 500, 200, 600];

function doSum(...args) {
  console.log(args);
  console.log("name", this.name);

  return args.reduce((acc, curr) => acc + curr);
}

console.log(doSum.call(user, ...amounts));

// bind function is same as call and apply but instead of invoke immediately its return new function.

const bindFn = printInfo.bind(user, "India");
bindFn("31");
