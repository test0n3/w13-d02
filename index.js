// question 1
const withAPI = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
let firstAnswer = document.querySelector('.left .answer');

// question 2