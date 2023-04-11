// Why were promises discovered?
// Promises were discovered to handle asynchronous operations in JavaScript.
//  Asynchronous operations are operations that take an unknown amount of time to complete and don't block the execution of other code. 
//  Promises provide a way to handle asynchronous operations and their results in a more organized and predictable way.

// Why are async/await better than promise.then design pattern?



// Async/await is a more concise and intuitive way of handling asynchronous operations than the promise.then design pattern. 
// Async/await allows you to write asynchronous code that looks more like synchronous code, 
// making it easier to read and understand. It also eliminates the need for nested callbacks, 
// which can lead to callback hell.



async function planTrip() {

 const flights = await fetch('https://api.example.com/flights?destination=Manali')

  .then(response => response.json())

  .catch(error => {

   console.error('Error fetching flights:', error)

   throw error

  })



 const hotels = await fetch('https://api.example.com/hotels?destination=Manali')

  .then(response => response.json())

  .catch(error => {

   console.error('Error fetching hotels:', error)

   throw error

  })



 const activities = await fetch('https://api.example.com/activities?destination=Manali')

  .then(response => response.json())

  .catch(error => {

   console.error('Error fetching activities:', error)

   throw error

  })



 console.log('Flights:', flights)

 console.log('Hotels:', hotels)

 console.log('Activities:', activities)



 const finalPlan = {

  flights: flights,

  hotels: hotels,

  activities: activities

 }



 return finalPlan

}



planTrip().then(finalPlan => {

 console.log('Final plan:', finalPlan)

}).catch(error => {

 console.error('Error planning trip:', error)

})

