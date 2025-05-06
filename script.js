//your JS code here. If required.
const output = document.getElementById("output");

// Helper to create a promise that resolves after a random delay (1–3 seconds)
function createPromise(name) {
  const delay = Math.random() * 2 + 1; // Between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: delay });
    }, delay * 1000); // Convert to milliseconds
  });
}

// Start time tracking
const startTime = performance.now();

// Generate the three promises
const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

// When all promises resolve
Promise.all(promises).then((results) => {
  const endTime = performance.now();
  const totalTime = (endTime - startTime) / 1000; // Convert ms to s

  // Clear loading row
  output.innerHTML = "";

  // Add each promise result as a row
  results.forEach((res) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = res.name;

    const timeCell = document.createElement("td");
    timeCell.textContent = res.time.toFixed(3);

    row.appendChild(nameCell);
    row.appendChild(timeCell);
    output.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement("tr");

  const totalLabel = document.createElement("td");
  totalLabel.textContent = "Total";

  const totalValue = document.createElement("td");
  totalValue.textContent = totalTime.toFixed(3);

  totalRow.appendChild(totalLabel);
  totalRow.appendChild(totalValue);
  output.appendChild(totalRow);
});
