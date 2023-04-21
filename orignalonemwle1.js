// Get references to the table elements
const table1 = document.getElementById('table-1');
const table2 = document.getElementById('table-2');
const table3 = document.getElementById('table-3');

// Define the URL to fetch the data from
const apiUrl = 'https://crudcrud.com/api/267ecfde76024aca807563efceb0f376/unicorns';

// Define a function to fetch and display the data
async function fetchData() {
  try {
    // Make an Axios GET request to the API URL
    const response = await axios.get(apiUrl);

    // Loop through the response data
    for (const order of response.data) {
      // Get the table number from the order data
      const tableNumber = order.table;

      // Create a new row in the appropriate table for the order
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${order.dish}</td>
        <td>${order.price}</td>
        <td><button>Delete</button></td>
      `;

      // Add a click event listener to the delete button to remove the row from the table and delete the order from the API
      newRow.querySelector('button').addEventListener('click', async () => {
        try {
          // Make an Axios DELETE request to the API URL with the order ID in the URL
          await axios.delete(`${apiUrl}/${order._id}`);

          // Remove the row from the appropriate table
          switch (tableNumber) {
            case '1':
              table1.removeChild(newRow);
              break;
            case '2':
              table2.removeChild(newRow);
              break;
            case '3':
              table3.removeChild(newRow);
              break;
          }
        } catch (error) {
          console.error(error);
        }
      });

      // Add the new row to the appropriate table
      switch (tableNumber) {
        case '1':
          table1.appendChild(newRow);
          break;
        case '2':
          table2.appendChild(newRow);
          break;
        case '3':
          table3.appendChild(newRow);
          break;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

// Call the fetchData function when the page is loaded
window.addEventListener('load', fetchData);


// Add a click event listener to the save order button to send a POST request to the API with the new order data
const saveOrderBtn = document.getElementById('save-order-btn');
saveOrderBtn.addEventListener('click', async () => {
  try {
    // Get the input values from the form
    const priceInput = document.getElementById('price');
    const dishInput = document.getElementById('dish');
    const tableNumberSelect = document.getElementById('table-number');
    const tableNumber = tableNumberSelect.value;

    // Make an Axios POST request to the API URL with the new order data
    const response = await axios.post(apiUrl, {
      price: priceInput.value,
      dish: dishInput.value,
      table: tableNumber,
    });

    // Create a new row in the appropriate table for the order
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${response.data.dish}</td>
      <td>${response.data.price}</td>
      <td><button>Delete</button></td>
    `;

    // Add a click event listener to the delete button to remove the row from the table and delete the order from the API
    newRow.querySelector('button').addEventListener('click', async () => {
      try {
        // Make an Axios DELETE request to the API URL with the order ID in the URL
        await axios.delete(`${apiUrl}/${response.data._id}`);

        // Remove the row from the appropriate table
        switch (tableNumber) {
          case '1':
            table1.removeChild(newRow);
            break;
          case '2':
            table2.removeChild(newRow);
            break;
          case '3':
            table3.removeChild(newRow);
            break;
        }
      } catch (error) {
        console.error(error);
      }
    });

    // Add the new row to the appropriate table
    switch (tableNumber) {
      case '1':
        table1.appendChild(newRow);
        break;
      case '2':
        table2.appendChild(newRow);
        break;
      case '3':
        table3.appendChild(newRow);
        break;
    }

    // Clear the form inputs
    priceInput.value = '';
    dishInput.value = '';
    tableNumberSelect.value = '';
  } catch (error) {
    console.error(error);
  }
});
