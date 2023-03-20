function addUser() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var age = document.getElementById("age").value;

	// Create new list item element
	var li = document.createElement("li");

	// Create text node with user details
	var text = document.createTextNode(name + " (" + age + ") - " + email);

	// Append text node to list item element
	li.appendChild(text);
	var deleteButton = document.createElement("button");

	
	deleteButton.innerHTML = "Delete";
	deleteButton.addEventListener("click", function() {
		li.remove(); 
	});

	
	li.appendChild(deleteButton);

	// Add list item element to user list
	document.getElementById("userList").appendChild(li);

	// l storageStore user details in loca
	localStorage.setItem(name, JSON.stringify({email: email, age: age}));
}
