function addUser() {
	// Get input values
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var age = document.getElementById("age").value;

	// Create new list item element
	var li = document.createElement("li");

	// Create text node with user details
	var text = document.createTextNode(name + " (" + age + ") - " + email);

	// Append text node to list item element
	li.appendChild(text);

	// Create delete button element
	var deleteButton = document.createElement("button");

	// Add text to delete button
	deleteButton.innerHTML = "Delete";

	// Add click event listener to delete button
	deleteButton.addEventListener("click", function() {
		li.remove(); // Remove list item element when delete button is clicked
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
		axios.get(`https://crudcrud.com/api/b27d4262f7e3418b8810f7aaf5136a97/appointmentdata/${name}`)
		.then(function (response) {
			// Set input values to user details
			document.getElementById("name").value = name;
			document.getElementById("email").value = response.data.email;
			document.getElementById("age").value = response.data.age;

			// Remove list item element
			li.remove();
		})
		.catch(function (error) {
			console.log(error);
		});
	});

	// Append edit button to list item element
	li.appendChild(editButton);

	// Add list item element to user list
	document.getElementById("userList").appendChild(li);

	// Store user details on server
	axios.post("https://crudcrud.com/api/b27d4262f7e3418b8810f7aaf5136a97/appointmentdata", { name: name, email: email, age: age })
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.log(error);
	});
}
