function memoizedFn<A extends (number | string | boolean)[], R>(
  fn: (...args: A) => R,
): (...args: A) => R {
  const cache = new Map<string, R>();
  function innerMemozied(this: unknown, ...args: A): R {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("data found");
      return cache.get(key)!;
    }
    const result = fn.call(this, ...args);
    cache.set(key, result);
    return result;
  }
  return innerMemozied;
}

const add = (n1: number, n2: number) => {
  return n1 + n2;
};
const test = memoizedFn(add);
console.log(test(1, 23));
console.log(test(12, 3));
console.log(test(1, 23));
console.log(test(12, 3));

const obj = {
  multiplier: 10,
  calc(n: number) {
    return n * this.multiplier;
  },
};
// const memoizedCalc = memoizedFn(obj.calc);
// console.log(memoizedCalc(5));
// obj.calc = memoizedFn(obj.calc);
// console.log(obj.calc(5))

const memo = memoizedFn((obj: { a: number }) => obj.a);
console.log(memo({ a: 5 }));
