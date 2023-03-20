// get form and output div elements
const myForm = document.getElementById("myForm");
const outputDiv = document.getElementById("output");

// on form submission
myForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission behavior

  // get form data
  const name = myForm.elements.name.value;
  const age = myForm.elements.age.value;
  const email = myForm.elements.email.value;
  const myobj = `Name: ${name}, Age: ${age}, Email: ${email}`;
 // create object or string from form data

  // save object to local storage
  localStorage.setItem("myobj", JSON.stringify(myobj));

  // display object on screen
  outputDiv.textContent = JSON.stringify(myobj);
});
