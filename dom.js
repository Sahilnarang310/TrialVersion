// Get Element By Class Name
// var items=document.getElementsByClassName('list-group-item');
// console.log(items)
// items[2].textContent="hello2";
// console.log(items[2]);

// items.style.fontWeight='bold';
// items[2].style.backgroundColor='green';
// items[2].style.background-color:"green";
// Get all the list elements
// const listElements = document.getElementsByTagName("li");

// Loop through the list elements and set the CSS styles
// for (let i = 0; i < listElements.length; i++) {
//   listElements[i].style.fontWeight = "bold";
//   listElements[i].style.color = "green"; // Change to any color you want
//}
//  get element by tag name as same as the class works
// var li=document.getElementsByTagName('li');
// console.log(li);
// li[2].textContent="hello2";
// console.log(li[2]);
// li[2].style.backgroundColor='green';
// for (let i = 0; i < li.length; i++)
//  {
//   li[i].style.fontWeight = "bold";
// }
//Qwery Selector it only grab first one!
// var header =document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';
//  var input=document.querySelector('input');
//  input.value='Hello World';

//  var submit=document.querySelector('input[type="submit"]');
//  submit.value="SEND";
 
//  var item =document.querySelector('.list-group-item');
//  item.style.color="red";

//  var lastitem =document.querySelector('.list-group-item:last-child');
//  lastitem.style.color="blue";

 var seconditem =document.querySelector('.list-group-item:nth-child(2)');
 seconditem.style.color="green"; 
//  seconditem.style.backgroundColor="green"; 
//  Deliverable its messed up because if make seccond text color and background color green then text will invisible!

//  Qwery SelectorAll// works similar as tagname ans class name;
var titles =document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
// var even =document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++){
  odd[i].style.backgroundColor='green';
  // even[i].style.backgroundColor='#ccc';
}
