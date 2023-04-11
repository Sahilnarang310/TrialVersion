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
// Qwery Selector it only grab first one!
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

//  var seconditem =document.querySelector('.list-group-item:nth-child(2)');
//  seconditem.style.color="green"; 
//  seconditem.style.backgroundColor="green"; 
//  Deliverable its messed up because if make seccond text color and background color green then text will invisible!

//  Qwery SelectorAll// works similar as tagname ans class name;
// var titles =document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even =document.querySelectorAll('li:nth-child(even)');
// for(var i=0;/i<odd.length;i++){
  // odd[i].style.backgroundColor='green';
  // even[i].style.backgroundColor='#ccc';
// }


// Traversing the dom !!
var itemsList=document.querySelector('#items');
// console.log(itemsList.parentNode);
// itemsList.parentNode.style.backgroundColor="#f4f4f4";
// console.log(itemsList.parentNode.parentNode.parentNode);

// Parent Elements
// console.log(itemsList.parentElement);
// itemsList.parentElement.style.backgroundColor="green";
// console.log(itemsList.parentElement.parentElement.parentElement);

// child Node  
// console.log(itemsList.childNodes); //it take cares of line braks 

// console.log(itemsList.children);// it doesn,t look line break it just elements or text nodes!
// console.log(itemsList.children[1]);
// itemsList.children[1].style.backgroundColor="yellow";
 
// FIRST CHILD it also take cares of line break it white space are there it returns the #text node!
// console.log(itemsList.firstChild);// this method is kind of useless

// so we have anotother method  FIRSTELEMENT CHILD;
// console.log(itemsList.firstElementChild);
// itemsList.firstElementChild.textContent="Hello Uncle";

// LAST CHILD
// console.log(itemsList.lastChild);
// lastElementChild

// console.log(itemsList.lastElementChild);
// itemsList.lastElementChild.textContent="Hello-4";

// next Sibling
// console.log(itemsList.nextSibling);

// nextElementSibling
// console.log(itemsList.nextElementSibling);    we dont hv next sibling in code so it shows null!

// previous Sibling
// console.log(itemsList.previousSibling);

// previousElementSibling
// console.log(itemsList.previousElementSibling);
// itemsList.previousElementSibling.style.color="green";


//  create a div
var newDiv=document.createElement('div');

// add id
newDiv.className-'hello';

// add attributenewdiv
newDiv.setAttribute('title','Hello div');

// create text node
var newDivText=document.createTextNode('Hello world');

//  add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);

newDiv.style.fontSize='35px';


var firstItem = itemsList.firstElementChild;
var helloWorld = document.createTextNode('Hello World ');
firstItem.insertBefore(helloWorld, firstItem.firstChild);

