function storeDetails() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
  
    var details = {
      name: name,
      email: email,
      message: message
    };
  
    localStorage.setItem("userDetails", JSON.stringify(details));
  }

//   localStorage.setItem('name', 'bob');
// localStorage.setItem('class1', 'talk with localstorage');
//console.log(localStorage.getItem('name' ))
// localStorage.removeItem('name');
// it always return as a string
  