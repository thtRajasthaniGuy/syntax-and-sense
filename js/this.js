//this keyword is determined how we calling the this not where we define the this keyword.

function greet() {
  console.log(this);
}

//greet(); it will give us global windows or undefined

const user = {
  name: "govind",
  greet,
};
//user.greet() it will give the object property
const fn = user.greet;
//fn();  it will give us global windows or undefined

const user2 = {
  name: "mayank",
  greet: function () {
    console.log(this.name);
  },
};
//user2.greet();

const user3 = {
  name: "deepa",
  greet: user2.greet,
};

user3.greet();

const obj = {
  name: "ekaksh",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet();
//javascript maintain  this value by reference record. first js check its part of property value

// {
//     base -> user ,this -> user
//     the reference value  -> greet
// }

const fn1 = obj.greet;
// is part of property value if not then its environment record
console.log(fn1());
// {
//     base -> environment record , this -> undefined
//     name -> fn
// }

let fn2;
(fn2 = obj.greet)();
console.log(fn2());
