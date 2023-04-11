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
		// Get user details from local storage
		var userDetails = JSON.parse(localStorage.getItem(name));

		// Set input values to user details
		document.getElementById("name").value = name;
		document.getElementById("email").value = userDetails.email;
		document.getElementById("age").value = userDetails.age;

		// Remove list item element
		li.remove();
	});
	var x

	// Append edit button to list item element
	li.appendChild(editButton);

	// Add list item element to user list
	document.getElementById("userList").appendChild(li);

	// Store user details in local storage
	localStorage.setItem(name, JSON.stringify({email: email, age: age}));
}
console.log(printName());

console.log(a);



// var a = 3;



var printName = (name) => {

console.log(name)

}
