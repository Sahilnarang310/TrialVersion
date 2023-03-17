// console.log(document.URL);
// // console.log()
// console.log(document.head);
// console.log(document.title);
// // document.title=123;
// // console.log(document.title);
// console.log(document.head,document.doctype,document.domain);
// console.log(document.all[10]);
// document.all[10].textContent="Hello";
// console.log(document.forms);
// // console.log(document.links);
// console.log(document.images);
// console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent="Hello";
//headerTitle.innerText='God help ' // we over write the hello
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText); // it show the styling also! main difference between both.
// headerTitle.innerHTML='<h3>Hello</h3>'
headerTitle.style.borderBottom='solid 3px #000';
header.style.borderBottom='solid 3px #000';
// console.log(document.div);
const titleElement = document.querySelector('h2.title');
titleElement.style.fontWeight = "bold";
titleElement.style.color = "green";




