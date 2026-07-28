// debounce work with closuer based technique

const debounce = (fn: any, delay: number = 500) => {
  let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
  function innerDebounce(this: unknown, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
  return innerDebounce;
};

function value(...args: any[]) {
  console.log("value", args);
}

const debounceFn = debounce(value, 1000);
const text = "react";
for (let i = 0; i < text.length; i++) {
  debounceFn(text[i]);
}

// throttle

//with out trailling
const throttle = (fn: any, delay: number) => {
  let lastTimeCalled = 0;

  function innerThrottle(this: unknown, ...args: any) {
    if (Date.now() - lastTimeCalled >= delay) {
      lastTimeCalled = Date.now();
      fn.apply(this, args);
    }
  }
  return innerThrottle;
};

const valueThrottle = (...args: any[]) => {
  console.log("..args", args);
};

const checkInterval = throttle(valueThrottle, 600);
for (let i = 0; i < text.length; i++) {
  checkInterval(text[i]);
}

// with trailling
const throttlewithTrailling = (fn: any, delay: number) => {
  let lastTimeCalled = 0;
  let lastTrailling: any = null;
  let trailingTimer: ReturnType<typeof setTimeout> | undefined = undefined;
  function innerThrottle(this: unknown, ...args: any) {
    if (Date.now() - lastTimeCalled >= delay) {
      lastTimeCalled = Date.now();
      lastTrailling = null;
      trailingTimer = undefined;
      fn.apply(this, args);
    } else {
      clearTimeout(trailingTimer);
      lastTrailling = args;
      trailingTimer = setTimeout(() => {
        fn.apply(this, lastTrailling);
        lastTimeCalled = Date.now();
        lastTrailling = null;
        trailingTimer = undefined;
      }, delay);
    }
  }
  return innerThrottle;
};

const valueTrailling = (...args: any[]) => {
  console.log("..args", args, "at", Date.now());
};

const checkIntervalTralilling = throttlewithTrailling(valueTrailling, 600);
for (let i = 0; i < text.length; i++) {
  checkIntervalTralilling(text[i]);
}
checkIntervalTralilling("x");

checkIntervalTralilling("r"); // fires at t≈0ms

setTimeout(() => {
  checkIntervalTralilling("x"); // fires at t≈300ms
}, 300);
