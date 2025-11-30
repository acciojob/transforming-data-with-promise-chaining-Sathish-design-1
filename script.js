//your JS code here. If required.
// script.js

// helper to create a promise that resolves after `ms` milliseconds with value `val`
function delayResolve(val, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), ms);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("ip");
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", () => {
    // Read and parse input value
    const raw = input.value;
    const start = Number(raw);

    // If input is not a number, show error and stop
    if (Number.isNaN(start)) {
      output.innerText = "Please enter a valid number.";
      return;
    }

    // Clear output before starting
    output.innerText = "";

    // 1) Initial promise: resolves after 2 seconds with the input number
    delayResolve(start, 2000)
      .then((val) => {
        output.innerText = `Result: ${val}`;
        // 2) Second promise: after 2 seconds multiply by 2
        return delayResolve(val * 2, 2000);
      })
      .then((val) => {
        output.innerText = `Result: ${val}`;
        // 3) Third promise: after 1 second subtract 3
        return delayResolve(val - 3, 1000);
      })
      .then((val) => {
        output.innerText = `Result: ${val}`;
        // 4) Fourth promise: after 1 second divide by 2
        return delayResolve(val / 2, 1000);
      })
      .then((val) => {
        output.innerText = `Result: ${val}`;
        // 5) Fifth promise: after 1 second add 10 and that's the final result
        return delayResolve(val + 10, 1000);
      })
      .then((finalVal) => {
        output.innerText = `Final Result: ${finalVal}`;
      })
      .catch((err) => {
        // Shouldn't normally happen here, but good to have
        output.innerText = `Error: ${err}`;
      });
  });
});