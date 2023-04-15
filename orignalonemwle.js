// Function to save a bill
function saveBill() {
  const price = document.getElementById("choose-price").value;
  const dish = document.getElementById("choose-dish").value;
  const table = document.getElementById("table-number").value;

  // Make a POST request to the API to save the bill
  axios.post("https://crudcrud.com/api/1613dd60135c4d86a58f457b4220c763/unicorns", {
    price: price,
    dish: dish,
    table: table
  })
  .then((response) => {
    // Clear the input fields
    document.getElementById("choose-price").value = "";
    document.getElementById("choose-dish").value = "";

    // Reload the bill table
    displayBills();
  })
  .catch((error) => {
    console.log(error);
  });
}

// Function to display all bills
function displayBills() {
  // Make a GET request to the API to get all bills
  axios.get("https://crudcrud.com/api/1613dd60135c4d86a58f457b4220c763/unicorns")
  .then((response) => {
    const bills = response.data;

    // Build the HTML for the bill table
    let html = "";
    for (let i = 0; i < bills.length; i++) {
      const bill = bills[i];
      html += "<tr>";
      html += "<td>" + bill.price + "</td>";
      html += "<td>" + bill.dish + "</td>";
      html += "<td>" + bill.table + "</td>";
      html += '<td><button onclick="deleteBill(\'' + bill._id + '\')">Delete</button></td>';
      html += "</tr>";
    }

    // Update the bill table with the new HTML
    document.getElementById("bill-table").getElementsByTagName("tbody")[0].innerHTML = html;
  })
  .catch((error) => {
    console.log(error);
  });
}

// Function to delete a bill
function deleteBill(id) {
  // Make a DELETE request to the API to delete the bill with the given ID
  axios.delete(`https://crudcrud.com/api/1613dd60135c4d86a58f457b4220c763/unicorns/${id}`)
  .then((response) => {
    // Reload the bill table
    displayBills();
  })
  .catch((error) => {
    console.log(error);
  });
}

// Remove the display-bills button from the HTML
document.getElementById("display-bills-btn").remove();

// Function to add event listener to the add-bill button
function addBill() {
  document.getElementById("add-bill-btn").addEventListener("click", saveBill);
}

// Call the addBill function to add the event listener
addBill();
