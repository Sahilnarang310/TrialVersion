var form =document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event!
form.addEventListener('submit', addItem);
// DeleteEvernt
itemList.addEventListener('click', removeItem);
// Fileter Event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e){
    e.preventDefault();
    const inputValue=document.getElementById('item').value;
    const description=document.getElementById('description').value;


    // get inpu value;
    var newItem=document.getElementById('item').value;
    // create new li element
    var li=document.createElement('li');
    // add  class
    li.className='list-group-item';
    const newText=document.createTextNode(inputValue);
    const descriptionNode =document.createTextNode(" " + description);

    li.appendChild(newText);
    li.appendChild(descriptionNode);
    // console.log(li); 
    //  add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //  create the delete Button element
    var deleteBtn = document.createElement('button');
    // Add classes to delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    // Append Text Node
    deleteBtn.appendChild(document.createTextNode('X'));
    // append button to li
    li.appendChild(deleteBtn);
    // Append li to list
    itemList.appendChild(li);

}
// console.log(form);

function removeItem(e){
if(e.target.classList.contains('delete')){
  if(confirm('Are you sure?')){
    var li=e.target.parentElement;
    itemList.removeChild(li);
  }

}
}
function filterItems(e){
    //  converts to lowecase
    var text=e.target.value.toLowerCase();
    // console.log(text);
    // GEt li's
   var items = itemList.getElementsByTagName('li');
// convert to an array
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    // console.log(itemName);
    if(itemName.toLowerCase().indexOf(text)!=-1){
        item.style.display="block";

    }
    else{
        item.style.display="none";
    }
});
}

