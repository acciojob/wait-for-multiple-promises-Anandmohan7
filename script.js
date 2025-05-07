const output = document.getElementById("output");

// Helper to create a promise
function createPromise(name) {
  const delay = Math.random() * 2 + 1; // 1 to 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: delay });
    }, delay * 1000);
  });
}

// Add initial loading row
output.innerHTML = `
  <tr id="loading">
    <td colspan="2">Loading...</td>
  </tr>
`;

// Create and resolve promises
const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

Promise.all(promises).then((results) => {
  // Remove loading row
  output.innerHTML = "";

  // Add promise rows
  results.forEach((res) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${res.name}</td>
      <td>${res.time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  // Calculate max time for Total
  const maxTime = Math.max(...results.map(res => res.time));

  // Add total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${maxTime.toFixed(3)}</td>
  `;
  output.appendChild(totalRow);
});
