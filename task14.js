function addUser() {
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var age = document.getElementById("age").value;

	
	var li = document.createElement("li");

		var text = document.createTextNode(name + " (" + age + ") - " + email);

	
	li.appendChild(text);

	
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	deleteButton.addEventListener("click", function() {
		li.remove(); 
	});
	li.appendChild(deleteButton);
	var editButton = document.createElement("button");
	editButton.innerHTML = "Edit";
	editButton.addEventListener("click", function() {
		
		var userDetails = JSON.parse(localStorage.getItem(name));

		
		document.getElementById("name").value = name;
		document.getElementById("email").value = userDetails.email;
		document.getElementById("age").value = userDetails.age;	
		li.remove();
	});
	li.appendChild(editButton);
	document.getElementById("userList").appendChild(li);
	localStorage.setItem(name, JSON.stringify({email: email, age: age}));
}