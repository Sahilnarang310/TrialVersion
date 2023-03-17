// Get Element By Class Name
var items=document.getElementsByClassName('list-group-item');
console.log(items)
// items[2].textContent="hello2";
console.log(items[2]);

// items.style.fontWeight='bold';
items[2].style.backgroundColor='green';
// items[2].style.background-color:"green";
// Get all the list elements
const listElements = document.getElementsByTagName("li");

// Loop through the list elements and set the CSS styles
for (let i = 0; i < listElements.length; i++) {
  listElements[i].style.fontWeight = "bold";
//   listElements[i].style.color = "green"; // Change to any color you want
}

