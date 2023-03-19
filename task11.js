// create a object
let user = {
    name: "SahilNarang",
    email: "kikikisweete@example.com",
    age: 300
    
  };
//   convert object into JSON string
  let userJson = JSON.stringify(user);
//   localStorage.setItem('user', userJson);
// To retrive user detail from local stroage
//  it convert string back to object!
  let storedUserJson = localStorage.getItem('user');
  let storedUser = JSON.parse(storedUserJson);
  console.log(localStorage(user));