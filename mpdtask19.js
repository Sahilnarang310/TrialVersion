// Function to display saved user details
function displayUserDetails(user) {
    // Create new list item element
    var li = document.createElement("li");
  
    // Create text node with user details
    var text = document.createTextNode(user.name + " (" + user.age + ") - " + user.email);
  
    // Append text node to list item element
    li.appendChild(text);
  
    // Create delete button element
    var deleteButton = document.createElement("button");
  
    // Add text to delete button
    deleteButton.innerHTML = "Delete";
  
    // Add click event listener to delete button
    deleteButton.addEventListener("click", function() {
      // Delete user details from server
      axios.delete(`https://crudcrud.com/api/b27d4262f7e3418b8810f7aaf5136a97/appointmentdata/${user._id}`)
        .then(function(response) {
          // Remove list item element when delete button is clicked
          li.remove();
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  
    // Append delete button to list item element
    li.appendChild(deleteButton);
  
    // Create edit button element
    var editButton = document.createElement("button");
  
    // Add text to edit button
    editButton.innerHTML = "Edit";
  
    // Add click event listener to edit button
    editButton.addEventListener("click", function() {
      // Get user details from server
      axios.get(`https://crudcrud.com/api/b27d4262f7e3418b8810f7aaf5136a97/appointmentdata/${user._id}`)
        .then(function(response) {
          // Set input values to user details
          document.getElementById("name").value = response.data.name;
          document.getElementById("email").value = response.data.email;
          document.getElementById("age").value = response.data.age;
  
          // Remove list item element
          li.remove();
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  
    // Append edit button to list item element
    li.appendChild(editButton);
  
    // Add list item element to user list
    document.getElementById("userList").appendChild(li);
  }
  
  // Make GET request to server when DOM has loaded
  document.addEventListener("DOMContentLoaded", function() {
    axios.get("https://crudcrud.com/api/b27d4262f7e3418b8810f7aaf5136a97/appointmentdata")
      .then(function(response) {
        // Loop through saved user details and display them
        response.data.forEach(function(user) {
          displayUserDetails(user);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  
  // Function to add user details
  function addUser() {
    // Get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
  
    // Create new user object
    var user = { name: name, email: email, age: age };
  
    // Display user details
    displayUserDetails(user);
  
    // Store user details on server
    axios.post("https://crudcrud.com/api/b27d4262f7e3418b8810f7aaf5136a97/appointmentdata", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  
    // Reset input fields
    // document.getElementById("name").value = "";
    // document.getElementById("email").value="";
    // document.getElementById("age").value="";
    }