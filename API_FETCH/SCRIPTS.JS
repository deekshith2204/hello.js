fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => {
      console.log(data);
      document.getElementById("output").innerText = JSON.stringify(data)
  })
  .catch(err => {
    document.getElementById("output").innerText = "Error loading data";
    console.error(err);
  });